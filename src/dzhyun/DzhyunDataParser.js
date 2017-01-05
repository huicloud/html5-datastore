import DataParser from '../DataParser';
import parser from './parser';
import MSGAdapter from './adapter/MSGAdapter';
import MSGDirectAdapter from './adapter/MSGDirectAdapter';
import pbTable from './pbTable';
import yfloat from 'html5-yfloat';

var adapterMap = {
  _default: new MSGAdapter,
  _direct: new MSGDirectAdapter(),
  'news': new MSGDirectAdapter()
};

export default class DzhyunDataParser extends DataParser {
  constructor(service) {
    super();
    this.service = service;
    //this.direct = false;
  }

  parseUAResponse(compresser = null, data) {
    return parser.parse(data, 'UAResponse', compresser);
  }

  parseMsg(msgData) {
    return this._adapter(parser.parse(msgData, 'MSG'));
  }

  parse(compresser = null, data) {
    return new Promise((resolve, reject) => {
      var uaResponse = this.parseUAResponse(compresser, data);
      data = uaResponse.Data;
      if (uaResponse.Err !== 0) {
        reject({
          qid: uaResponse.Qid,
          error: data ? (typeof data === 'string') ? data : data.toUTF8 ? data.toUTF8() : JSON.stringify(data) : 'unknown error'
        });
      } else {
        resolve({
          qid: uaResponse.Qid,
          data: this.parseMsg(data)
        });
      }
    });
  }

  // 根据service进行数据转换
  _adapter(data) {
    if (!data) {
      return data;
    }
    var adapter = this.direct ? adapterMap._direct : adapterMap._default;
    if (this.service) {
      var keys = Object.keys(adapterMap);
      keys.some((key) => {
        if (this.service.indexOf(key) >= 0) {
          adapter = adapterMap[key];
          return true;
        }
      });
    }
    return adapter.adapt(data);
  }
}

// 默认值设置在原型上，可以通过修改原型统一设置
DzhyunDataParser.prototype.direct = false;

DzhyunDataParser.parser = parser;
DzhyunDataParser.MSGAdapter = MSGAdapter;
DzhyunDataParser.pbTable = pbTable;
DzhyunDataParser.yfloat = yfloat;

// 将DzhyunDataParser暴露到全局，便于外部使用（之后应该要从datastore中提出成单独模块）
var _global = global || this;
_global.DzhyunDataParser = DzhyunDataParser;