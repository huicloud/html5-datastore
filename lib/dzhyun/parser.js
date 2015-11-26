'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dzhyun = require('./dzhyun');

var _dzhyun2 = _interopRequireDefault(_dzhyun);

var _protobuf = require('./protobuf');

var _protobuf2 = _interopRequireDefault(_protobuf);

var ByteBuffer = _protobuf2['default'].ByteBuffer;

exports['default'] = {

  stringToArrayBuffer: function stringToArrayBuffer(str) {
    var strLen = str.length;
    var buf = new ArrayBuffer(strLen * 2); // 2 bytes for each char
    var bufView = new Uint8Array(buf);
    for (var i = 0; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  },

  arrayBufferToString: function arrayBufferToString(arrayBuffer) {
    var uint8Array = new Uint8Array(arrayBuffer);
    var length = uint8Array.length;
    if (length > 65535) {
      var start = 0,
          results = [];
      do {
        var subArray = uint8Array.subarray(start, start += 65535);
        results.push(String.fromCharCode.apply(null, subArray));
      } while (start < length);

      return decodeURIComponent(escape(results.join('')));
    } else {
      return decodeURIComponent(escape(String.fromCharCode.apply(null, uint8Array)));
    }
  },

  parseProtoBuf: function parseProtoBuf(pbData, message) {

    var result = _dzhyun2['default'][message].decode(pbData);

    if (result) {
      result._isPb = true;
    }
    return result;
  },

  isBuffer: function isBuffer(data) {
    // 判断数据是node中的Buffer类型，避免使用instanceof
    return data.constructor && data.constructor.name === 'Buffer';
  },

  parse: function parse(data, message) {

    var result = data;

    if (!data) {
      return data;
    } else if (typeof data === 'string') {

      // 先尝试用json格式转换
      try {
        result = JSON.parse(data);
      } catch (err) {

        // 转换失败则认为是二进制数据，将其转为ArrayBuffer后按照pb格式解析
        result = this.parseProtoBuf(this.stringToArrayBuffer(data), message);
      }
    } else if (data instanceof ArrayBuffer) {

      // 先尝试用pb格式转换
      try {
        result = this.parseProtoBuf(data, message);
      } catch (err) {

        // 转换失败则认为是以ws的二进制通道传输的json格式数据，先转为字符串再用json格式解析
        result = JSON.parse(this.arrayBufferToString(data));
      }
    } else if (this.isBuffer(data)) {

      // 先尝试用pb格式转换
      try {
        result = this.parseProtoBuf(data, message);
      } catch (err) {

        // 转换失败则认为是以ws的二进制通道传输的json格式数据，先转为字符串再用json格式解析
        result = JSON.parse(data.toString('utf8'));
      }
    } else if (data instanceof ByteBuffer) {
      result = this.parseProtoBuf(data, message);
    }
    return result;
  }
};
module.exports = exports['default'];