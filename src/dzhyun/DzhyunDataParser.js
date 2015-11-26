import DataParser from '../DataParser';
import parser from './parser';
import MSGAdapter from './adapter/MSGAdapter';
import MSGDirectAdapter from './adapter/MSGDirectAdapter';
import pbTable from './pbTable';
import yfloat from 'html5-yfloat';

var adapterMap = {
  //'dyna': MSGAdapter
  'news': new MSGDirectAdapter(),

  //// 暂时处理权限token不做yfloat解析
  //'token': new (class extends MSGAdapter {
  //  parseYFloat(data) {
  //    return data;
  //  }
  //})
};

export default class DzhyunDataParser extends DataParser {
  constructor(service) {
    super();
    this.service = service;
  }

  parse(data) {
    var uaResponse = parser.parse(data, 'UAResponse');
    data = uaResponse.Data;
    if (uaResponse.Err !== 0) {
      return Promise.reject({
        qid: uaResponse.Qid,
        error: data ? (typeof data === 'string') ? data : data.toUTF8 ? data.toUTF8() : data.toString() : 'unknown error'
      });
    } else {
      return Promise.resolve({
        qid: uaResponse.Qid,

        // 待解析数据
        data: this._adapter(parser.parse(data, 'MSG'))
      });
    }
  }

  // 根据service进行数据转换
  _adapter(data) {
    if (!data) {
      return data;
    }
    var keys = Object.keys(adapterMap);
    var adapter = new MSGAdapter();
    keys.some((key) => {
      if (this.service.indexOf(key) >= 0) {
        adapter = adapterMap[key];
        return true;
      }
    });
    return adapter.adapt(data);
  }
}

DzhyunDataParser.parser = parser;
DzhyunDataParser.MSGAdapter = MSGAdapter;
DzhyunDataParser.pbTable = pbTable;
DzhyunDataParser.yfloat = yfloat;

// 将DzhyunDataParser暴露到全局，便于外部使用（之后应该要从datastore中提出成单独模块）
var _global = global || this;
_global.DzhyunDataParser = DzhyunDataParser;