import pbTable from '../pbTable';
import jsonTable from '../jsonTable';
import BaseDataAdapter from './BaseDataAdapter';
import yfloat from 'html5-yfloat';
import ProtoBuf from '../protobuf';
var Long = ProtoBuf.Long;

var excludeFieldName = ['Id', 'Obj'];

export default class MSGAdapter extends BaseDataAdapter {

  /**
   * 递归data，将其中的数字类型按照yfloat格式解析
   */
  parseYFloat(data) {
    var self = this;
    if (!data) {
      return data;
    } else if (typeof data === 'number' || data instanceof Long) {
      return yfloat.unmakeValueToNumber(data);
    } else if (data instanceof Array) {
      var newArray = [];
      data.forEach(function(eachData) {
        newArray.push(self.parseYFloat(eachData));
      });
      return newArray;
    } else if (typeof data === 'object') {
      var keys = Object.keys(data);
      keys.forEach(function(key) {
        data[key] = self.parseYFloat(data[key]);
      });
      return data;
    } else {
      return data;
    }
  }

  adapt(input) {

    var output, isPb = input._isPb;

    // 取得其中数据
    // 如果Tbl字段有数据则将Tbl数据按pbTable转换为普通的json数组
    if (input.Tbl != null) {
      output = pbTable.convertToJsonArray(input.Tbl, {
        filter: function(value, differObject) {
          if (typeof value === 'number' || value instanceof Long) {

            // 如果differObject不为空则表示使用差分计算（json格式不做查分处理，不做yfloat解析）
            if (isPb && differObject !== undefined) {

              var previousValue = differObject.previousValue,
                dq = differObject.dq;

              // 第一次记录精度
              if (dq === undefined) {
                var arr = yfloat.unmakeValue(value);
                dq = differObject.dq = arr[1];
                return differObject.previousValue = arr[0];
              } else {
                if (value instanceof Long) {
                  value = value.toNumber();
                }
                var w = Math.pow(10, dq);
                return differObject.previousValue = Number((previousValue * w + value).toFixed()) / w;
              }
            } else {
              return isPb ? yfloat.unmakeValueToNumber(value) : value;
            }
          }
          return true;
        }
      });

      // FIXME 后台转换后的table数据会多一层msg table，所以取output中第一行第一列数据
      output = output[0];
      output = output[Object.keys(output)[0]];
    } else if (input.JsonTbl != null) {
      output = jsonTable.convertToJsonArray(input.JsonTbl);

      output = output[0];
      output = output[Object.keys(output)[0]];
    } else {

      // 否则查找其它有数据的字段
      var keys = Object.keys(input);
      keys.some(function(key) {
        var data = input[key];

        // 不是排除的字段并且不为null
        if (excludeFieldName.indexOf(key) < 0 && data !== null) {

          // 不是数组或者数组长度大于1
          if (!(data instanceof Array) || data.length > 0) {
            output = data;
            return true;
          }
        }
      });

      // 只对于pb格式解析yfloat, json格式数据不进行yfloat解析
      if (isPb === true) {
        output = this.parseYFloat(output);
      }
    }

    return this.format(output, input['Obj']);
  }

  format(data, obj) {
    var output = data;

    // 如果数据是数组并且如果数据有Obj字段试着将其转为obj:data结构的对象返回，否则直接将数据返回
    if (output instanceof Array) {
      if (output.length > 0 && output[0].hasOwnProperty('Obj')) {
        output = {};
        data.forEach(function(eachData) {
          output[eachData['Obj']] = eachData['Data'] || eachData;
        });
      }
    } else if (obj !== null) {
      output = {};
      output[obj] = data;
    }
    return output;
  }
}