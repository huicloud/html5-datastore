import dzhyun from './dzhyun';
import ProtoBuf from './protobuf';
import SnappyJS from 'snappyjs'

var ByteBuffer = ProtoBuf.ByteBuffer;

export default {

  stringToArrayBuffer: function(str) {
    var strLen = str.length;
    var buf = new ArrayBuffer(strLen * 2); // 2 bytes for each char
    var bufView = new Uint8Array(buf);
    for (var i = 0; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  },

  arrayBufferToString: function(arrayBuffer) {
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

  parseProtoBuf: function(pbData, message) {

    var result = dzhyun[message].decode(pbData);

    if (result) {
      result._isPb = true;
    }
    return result;
  },

  isBuffer: function(data) {
    // 判断数据是node中的Buffer类型，避免使用instanceof
    return data.constructor && data.constructor.name === 'Buffer';
  },

  parse: function(data, message, compresser) {
    if (compresser === 'snappy') {
      try {
        if (typeof data === 'string') {
          data = this.stringToArrayBuffer(data);
          data = SnappyJS.uncompress(data);
          data = this.arrayBufferToString(data);
        } else {
          data = SnappyJS.uncompress(data);
        }
      } catch (e) {
        console.warn('uncompress fail', e);
      }
    }
    var result = data;
    try {
      if (!data) {
        return data;
      } else if (typeof data === 'string') {

        // 先尝试用json格式转换
        try {
          result = JSON.parse(data);
        } catch(err) {

          // 转换失败则认为是二进制数据，将其转为ArrayBuffer后按照pb格式解析
          result = this.parseProtoBuf(this.stringToArrayBuffer(data), message)
        }
      } else if (data instanceof ArrayBuffer) {

        // 先尝试用pb格式转换
        try {
          result = this.parseProtoBuf(data, message);
        } catch(err) {

          // 转换失败则认为是以ws的二进制通道传输的json格式数据，先转为字符串再用json格式解析
          result = JSON.parse(this.arrayBufferToString(data));
        }
      } else if (this.isBuffer(data)){

        // 先尝试用pb格式转换
        try {
          result = this.parseProtoBuf(data, message);
        } catch(err) {

          // 转换失败则认为是以ws的二进制通道传输的json格式数据，先转为字符串再用json格式解析
          result = JSON.parse(data.toString('utf8'));
        }
      } else if (data instanceof ByteBuffer) {
        result = this.parseProtoBuf(data, message);
      }
    } catch(err) {

      // 转换失败，异常情况，考虑可能是json格式问题无法解析，也可能是pb结构错误解析错误
      console.warn(`${new Date()},Fail parse data [${data}]`, err.message);
    }
    return result;
  }
}
