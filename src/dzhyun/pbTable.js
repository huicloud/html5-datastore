/**
 * pb table格式数据转换模块
 */
import dzhyun from './dzhyun';
import ProtoBuf from './protobuf';

var ByteBuffer = ProtoBuf.ByteBuffer;

/** 列类型枚举 */
var InfoType = dzhyun.InfoType || {
    Type_Int: 105,
    Type_Float: 102,
    Type_Double: 100,
    Type_String: 115,
    Type_Binary: 98,
    Type_Table: 116,
    Type_SInt: 120,
    Type_Unknow: 0
  };

/** PbTable类型 */
var PbTable = dzhyun.Table;

/** 各种列类型对应数据字段前缀 */
var cDataFieldPrefix = {};
cDataFieldPrefix[InfoType.Type_Int] = 'i';
cDataFieldPrefix[InfoType.Type_Float] = 'f';
cDataFieldPrefix[InfoType.Type_Double] = 'd';
cDataFieldPrefix[InfoType.Type_String] = 's';
cDataFieldPrefix[InfoType.Type_Binary] = 'b';
cDataFieldPrefix[InfoType.Type_Table] = 't';
cDataFieldPrefix[InfoType.Type_SInt] = 'x';

//var keys = Object.keys(InfoType);
//keys.forEach(function(key){
//    cDataFieldPrefix[key] = String.fromCharCode(InfoType[key]);
//});

/** table信息缓存，多次推送数据时只有第一次会有table信息，所以需要做缓存 */
var tableInfoCache = {};

/**
 * pbTable数据转换器类型
 * @param {?{filter: {function}}} options 可以设置一个filter函数对所有解析的数据都会调用该方法，返回true保留数据，false丢弃数据，返回其它类型数据则将其替换
 * @constructor
 */
var PbTableConverter = function(options) {
  this.options = options || {};
  this._tableInfoStack = [];
};

PbTableConverter.prototype = {

  /**
   * 解码二进制pbTable数据转换为pbTable定义格式的Message对象
   * @param {!ArrayBuffer|ByteBuffer|Object} pbTable 待转换的二进制pbTable数据
   * @return {Object} 转换后pbTable格式的Message对象
   * @throws {Error}
   * @private
   */
  _pbTableDecode: function(pbTable) {

    // ArrayBuffer类型数据使用pbTable定义格式解码为PbTable格式的Message对象
    if (pbTable instanceof ArrayBuffer || pbTable instanceof ByteBuffer) {
      return PbTable.decode(pbTable);
    }

    // 其它类型数据不处理
    return pbTable;
  },

  /**
   * 根据列的类型取得具体列数据中对应字段的数据值
   * @param {Object} columnData
   * @param {number} columnType
   * @private
   */
  _getColumnDataValues: function(columnData, columnType) {

    // 非未知类型直接取类型的字段值
    if (columnType !== InfoType.Type_Unknow) {
      var fieldName = cDataFieldPrefix[columnType] + 'Values';
      return columnData[fieldName];
    }

    // 对于未知类型则按顺序找到第一个不为空的数据字段值
    else {
      return columnData.iValues || columnData.fValues || columnData.dValues ||
        columnData.sValues || columnData.bValues || columnData.tValues || columnData.xValues;
    }
  },

  /**
   * 恢复数据值
   * @param {*} value
   * @param {number} columnType
   * @param {number} columnRatio
   * @param {number} rowIndex
   * @returns {*}
   * @private
   */
  _retrieveValue: function(value, columnType, columnRatio, rowIndex) {

    // 对于Table类型数据递归转换
    if (columnType == InfoType.Type_Table) {
      value = this.convert(value, rowIndex === 0);
    }

    // 对于整型数据，根据radio将数据还原（第一行数据跳过，不处理）
    if (rowIndex !== 0 && (columnType == InfoType.Type_Int || columnType == InfoType.Type_SInt) && !!columnRatio) {
      value = value * columnRatio;
    }

    return value;
  },

  /**
   * 转换列数据
   * @param {Object} columnData 指定的一列的数据 CData|CDataX
   * @param {?Object} columnInfo 对应的该列的列信息 CInfo
   * @param {!Array.<Object>} resultArray 存放转换后数据的数组
   * @throws {Error}
   * @private
   */
  _convertColumn: function(columnData, columnInfo, resultArray) {
    var index = columnData.Index;

    // 类信息为null时，默认设置为空对象
    columnInfo = columnInfo || {};

    // 列信息中名称不存在时，列名使用列下标
    var columnName = columnInfo.Name || index;

    // 列信息中类型不存在时，列类型取未知
    var columnType = columnInfo.Type || InfoType.Type_Unknow;

    var columnRatio = columnInfo.Ratio;

    var values = this._getColumnDataValues(columnData, columnType);

    // 如果对应列数据为空则抛出错误
    if (values == null) {
      throw new Error('column[' + index + '] data is null');
    }

    this._columnToRow(values, index, columnName, columnType, columnRatio, resultArray);
  },

  /**
   * 列数据转为行数据
   * @param columnValues
   * @param columnIndex
   * @param columnName
   * @param columnType
   * @param columnRatio
   * @param resultArray
   * @private
   */
  _columnToRow: function(columnValues, columnIndex, columnName, columnType, columnRatio, resultArray) {

    // 上一个数据值，用作差分类型计算，dq记录数据差分
    var differObject = {
      previousValue: 0,
      dq: undefined
    };
    columnValues.forEach(function(value, rowIndex) {

      // 对应结果行数据不存在则创建
      var row = resultArray[rowIndex];
      if (row === undefined) {
        row = {};
        resultArray.push(row);
      }

      // 恢复数据值
      // FIXME 不需要每次判断类型
      value = this._retrieveValue(value, columnType, columnRatio, rowIndex);

      // 经options.filter处理，差分处理放到filter yloat转换时处理
      if (typeof this.options.filter === 'function') {
        var filterValue = this.options.filter(value, columnType == InfoType.Type_SInt ? differObject : void(0));
        if (filterValue === false) {
          // 返回false的数据将被忽略
        } else if (filterValue === true || filterValue === undefined) {
          // 返回true或者不返回则直接使用该数据
          row[columnName] = value;
        } else {
          // 返回其它类型则使用过滤转换后的数据
          value = row[columnName] = filterValue;
        }
      } else {
        row[columnName] = value;
      }
    }.bind(this));

    // 一列转换完成后将tableInfoStack中最后一个数据移除堆栈
    this._tableInfoStack.pop();
  },

  /**
   * 将传入的pbTable格式数据转换成标准json对象数组
   * @param {!ArrayBuffer|ByteBuffer|Object} pbTable 待转换的pbTable格式数据
   * @param {?boolean} isFirstRow 转换的pbTable数据是否是嵌套table转换数据的第一行
   *        第一行则要记录tableInfo，非第一行则不记录，避免堆栈数据重复
   * @throws {Error}
   * @return {Array.<Object>} 转换后的标准json对象数组
   */
  convert: function(pbTable, isFirstRow) {

    var pbTableMessage = this._pbTableDecode(pbTable);

    // 得到table列信息
    var tableInfoId = pbTableMessage.Tiid;
    var tableInfo = pbTableMessage.Info;

    // table信息不存在则从堆栈或者全局缓存中查找对应table信息
    if (!tableInfo || tableInfo.length === 0) {
      var length = this._tableInfoStack.length;
      tableInfo = isFirstRow === false && length > 0 ?
        this._tableInfoStack[length] : tableInfoCache[tableInfoId];
    } else {

      // 第一行的tableInfo信息放入堆栈
      isFirstRow === true ? this._tableInfoStack.push(tableInfo) : null;
      tableInfoCache[tableInfoId] = tableInfo;
    }

    // 定义出最后的转换结果数组
    var jsonArray = [];

    // 转换table数据
    var tableData = pbTableMessage.Data || pbTableMessage.DataX;
    if (tableData) {
      tableData.forEach(function(columnData) {
        var columnIndex = columnData.Index;

        // 从table信息中得到该列对应的column信息，column信息可能不存在
        var columnInfo = tableInfo ? tableInfo[columnIndex] : null;
        this._convertColumn(columnData, columnInfo, jsonArray);
      }.bind(this));
    } else {
      throw new Error('table data undefined');
    }

    return jsonArray;
  }
};

export default {

  /**
   * 将传入的pbTable格式数据转换成标准json对象数组
   * @param {!ArrayBuffer|ByteBuffer|Object} pbTable 待转换的pbTable格式数据
   * @param {Object=} options 选项
   * @throws {Error}
   * @return {Array.<Object>} 转换后的标准json对象数组
   */
  convertToJsonArray: function(pbTable, options) {
    return new PbTableConverter(options).convert(pbTable);
  },

  /**
   * 将传入的pbTable格式数据转换成行列结构的二维数组
   * @param {!ArrayBuffer|ByteBuffer|Object} pbTable 待转换的pbTable格式数据
   * @param {Object=} options 选项
   * @throws {Error}
   * @return {Array.<Array.<*>>} 转换后的标准json对象数组
   */
  convertToJsonTable: function(pbTable, options) {
    var converter = new PbTableConverter(options);
    converter._columnToRow = function(columnValues, columnIndex, columnName, columnType, columnRatio, resultArray) {

      // 上一个数据值，用作差分类型计算
      var previousValue = 0;
      columnValues.forEach(function(value, rowIndex) {

        // 对应结果行数据不存在则创建
        var row = resultArray[rowIndex];
        if (row === undefined) {
          row = [];
          resultArray.push(row);
        }
        previousValue = this._retrieveValue(value, previousValue, columnType, columnRatio);
        row.push(previousValue);
      }.bind(this));
    };
    return converter.convert(pbTable);
  }
}