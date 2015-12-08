'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _pbTable = require('../pbTable');

var _pbTable2 = _interopRequireDefault(_pbTable);

var _jsonTable = require('../jsonTable');

var _jsonTable2 = _interopRequireDefault(_jsonTable);

var _BaseDataAdapter2 = require('./BaseDataAdapter');

var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

var _html5Yfloat = require('html5-yfloat');

var _html5Yfloat2 = _interopRequireDefault(_html5Yfloat);

var _protobuf = require('../protobuf');

var _protobuf2 = _interopRequireDefault(_protobuf);

var Long = _protobuf2['default'].Long;

var excludeFieldName = ['Id', 'Obj'];

var MSGAdapter = (function (_BaseDataAdapter) {
  _inherits(MSGAdapter, _BaseDataAdapter);

  function MSGAdapter() {
    _classCallCheck(this, MSGAdapter);

    _get(Object.getPrototypeOf(MSGAdapter.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MSGAdapter, [{
    key: 'parseYFloat',

    /**
     * 递归data，将其中的数字类型按照yfloat格式解析
     */
    value: function parseYFloat(data) {
      var self = this;
      if (!data) {
        return data;
      } else if (typeof data === 'number' || data instanceof Long) {
        return _html5Yfloat2['default'].unmakeValueToNumber(data);
      } else if (data instanceof Array) {
        var newArray = [];
        data.forEach(function (eachData) {
          newArray.push(self.parseYFloat(eachData));
        });
        return newArray;
      } else if (typeof data === 'object') {
        var keys = Object.keys(data);
        keys.forEach(function (key) {
          data[key] = self.parseYFloat(data[key]);
        });
        return data;
      } else {
        return data;
      }
    }
  }, {
    key: 'adapt',
    value: function adapt(input) {

      var output,
          isPb = input._isPb;

      // 取得其中数据
      // 如果Tbl字段有数据则将Tbl数据按pbTable转换为普通的json数组
      if (input.Tbl != null) {
        output = _pbTable2['default'].convertToJsonArray(input.Tbl, {
          filter: function filter(value, differObject) {
            if (typeof value === 'number' || value instanceof Long) {

              // 如果differObject不为空则表示使用差分计算（json格式不做查分处理，不做yfloat解析）
              if (isPb && differObject !== undefined) {

                var previousValue = differObject.previousValue,
                    dq = differObject.dq;

                // 第一次记录精度
                if (dq === undefined) {
                  var arr = _html5Yfloat2['default'].unmakeValue(value);
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
                return isPb ? _html5Yfloat2['default'].unmakeValueToNumber(value) : value;
              }
            }
            return true;
          }
        });

        // FIXME 后台转换后的table数据会多一层msg table，所以取output中第一行第一列数据
        output = output[0];
        output = output[Object.keys(output)[0]];
      } else if (input.JsonTbl != null) {
        output = _jsonTable2['default'].convertToJsonArray(input.JsonTbl);

        output = output[0];
        output = output[Object.keys(output)[0]];
      } else {

        // 否则查找其它有数据的字段
        var keys = Object.keys(input);
        keys.some(function (key) {
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
  }, {
    key: 'format',
    value: function format(data, obj) {
      var output = data;

      // 如果数据是数组并且如果数据有Obj字段试着将其转为obj:data结构的对象返回，否则直接将数据返回
      if (output instanceof Array) {
        if (output.length > 0 && output[0].hasOwnProperty('Obj')) {
          output = {};
          data.forEach(function (eachData) {
            output[eachData['Obj']] = eachData['Data'] || eachData;
          });
        }
      } else if (obj !== null) {
        output = {};
        output[obj] = data;
      }
      return output;
    }
  }]);

  return MSGAdapter;
})(_BaseDataAdapter3['default']);

exports['default'] = MSGAdapter;
module.exports = exports['default'];