(typeof ArrayBuffer==='undefined')&&(ArrayBuffer=function(){});(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define(["protobufjs"],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.DataStore = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
// 添加依赖Promise
if (typeof Promise === 'undefined') {
  global.Promise = require('promise/polyfill');
}
module.exports = require('./lib/DataStore');
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./lib/DataStore":3,"promise/polyfill":31}],2:[function(require,module,exports){
// 数据解析接口
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DataParser = (function () {
  function DataParser() {
    _classCallCheck(this, DataParser);
  }

  _createClass(DataParser, [{
    key: 'parse',

    // 解析数据
    // @return {Promise}
    value: function parse(data) {
      return Promise.reject('未实现');
    }
  }]);

  return DataParser;
})();

exports['default'] = DataParser;
module.exports = exports['default'];
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _util = require('./util');

var $ = _interopRequireWildcard(_util);

var _dzhyunDzhyunDataParser = require('./dzhyun/DzhyunDataParser');

var _dzhyunDzhyunDataParser2 = _interopRequireDefault(_dzhyunDzhyunDataParser);

var _dzhyunDzhyunTokenManager = require('./dzhyun/DzhyunTokenManager');

var _dzhyunDzhyunTokenManager2 = _interopRequireDefault(_dzhyunDzhyunTokenManager);

var _html5Connection = require('html5-connection');

var _html5Connection2 = _interopRequireDefault(_html5Connection);

var Request = (function () {
  function Request(qid, key, filter, subscribe, queryObject) {
    var _this = this;

    _classCallCheck(this, Request);

    this._promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
    this.qid = qid;
    this.key = key;
    this.filter = filter;
    this.subscribe = subscribe;
    this.callbacks = [];
    this.queryObject = queryObject;
  }

  _createClass(Request, [{
    key: 'response',
    value: function response(data) {
      this.resolve(data);
      this.callbacks.forEach(function (callback) {
        callback(data);
      });
    }
  }, {
    key: 'error',
    value: function error(err) {
      var e = new Error(err);
      this.reject(e);
      this.callbacks.forEach(function (callback) {
        callback(e);
      });
    }
  }, {
    key: 'then',
    value: function then() {
      var _promise;

      return (_promise = this._promise).then.apply(_promise, arguments);
    }
  }, {
    key: 'catch',
    value: function _catch() {
      var _promise2;

      return (_promise2 = this._promise)['catch'].apply(_promise2, arguments);
    }
  }]);

  return Request;
})();

var DataStore = (function () {
  _createClass(DataStore, null, [{
    key: '_generateQid',

    // 生成请求序号，递增序号
    value: function _generateQid() {
      return DataStore._qid = (DataStore._qid || 0) + 1;
    }
  }, {
    key: 'cancel',

    /**
     * 取消全部datastore请求
     */
    value: function cancel() {
      DataStore._datastores.forEach(function (datastore) {
        datastore.cancel();
      });
    }
  }, {
    key: '_datastores',
    value: [],
    enumerable: true
  }, {
    key: '_connectionHandler',
    value: {
      dataParser: new _dzhyunDzhyunDataParser2['default'](),
      open: function open() {
        var _this2 = this;

        DataStore._datastores.forEach(function (datastore) {
          if (datastore.conn && _this2 === datastore.conn._handler) {
            datastore._open();
          }
        });
      },
      request: function request() {
        var _this3 = this;

        DataStore._datastores.forEach(function (datastore) {
          if (datastore.conn && _this3 === datastore.conn._handler) {
            datastore._request();
          }
        });
      },
      response: function response(data) {

        // 先将data解析为UAResponse，再根据其中qid找到具体对象处理
        var uaResponse = this.dataParser.parseUAResponse(data);
        var Qid = uaResponse.Qid;

        if (Qid) {
          DataStore._datastores.forEach(function (datastore) {
            if (datastore.requestQueue.hasOwnProperty(Qid)) {
              datastore._response(uaResponse);
            }
          });
        } else {
          console.warn('Qid does not exist.');
        }
      },
      close: function close() {
        var _this4 = this;

        DataStore._datastores.forEach(function (datastore) {
          if (datastore.conn && _this4 === datastore.conn._handler) {
            datastore._close();
          }
        });
      },
      error: function error() {
        var _this5 = this;

        DataStore._datastores.forEach(function (datastore) {
          if (datastore.conn && _this5 === datastore.conn._handler) {
            datastore._error();
          }
        });
      }
    },
    enumerable: true
  }]);

  function DataStore(options) {
    _classCallCheck(this, DataStore);

    options = options || {};

    /**
     * {'auto'|boolean} cache缓存规则，默认auto表示根据请求订阅与否决定是否缓存，订阅的请求数据会被缓存，非订阅则不缓存
     * true，则一定都缓存，每次query一定先从缓存查找
     * false，则一定不缓存，每次query一定请求数据
     * XXX 缓存机制基本上没有使用，默认值改为false
     */
    this.cacheEnable = typeof options.cacheEnable === 'undefined' ? false : options.cacheEnable;

    /** {String} 连接的服务器地址 */
    this.address = options.address || this.constructor.address;

    /** {String} 请求数据的返回类型 pb|json */
    this.dataType = options.dataType || this.constructor.dataType || 'pb';

    /** {String} 响应数据的压缩方式 snappy */
    this.compresser = options.compresser || this.constructor.compresser || null;

    /** {String} 请求的服务url */
    this.serviceUrl = options.serviceUrl;

    /** {String} 请求数据的连接类型 http|ws，不指定的话在请求时根据address定 */
    this.connectionType = options.connectionType;

    /** {boolean} 是否创建独立连接 */
    this.alone = options.alone || false;

    /**
     * {String|Array|Object.<String, String>}
     * 请求的字段，字符串需要‘,’分隔，对象表示需要做字段映射，key是服务提供字段名，value是对应要转换的字段名
     */
    this.fields = options.fields;

    this.dataParser = options.dataParser || new _dzhyunDzhyunDataParser2['default'](this.serviceUrl || '');

    // 添加压缩参数设置
    this.dataParser.parseUAResponse = this.dataParser.parseUAResponse.bind(this.dataParser, this.compresser);

    /**
     * 其它参数
     * @see <http://dms.gw.com.cn/pages/viewpage.action?pageId=128057536#id-请求格式-APP参数>
     *
     * begin_time
     * end_time
     * start
     * count
     * period
     * prefix
     * split
     * name
     * parameter
     * type
     */
    this.otherParams = options.otherParams;

    /** 请求连接 */
    this.conn = null;

    /** 数据的id属性名称（主键），cache中以查询参数中该属性的值为key存储缓存，默认是查询对象obj */
    this.idProperty = options.idProperty || 'obj';

    ///** pb格式message类型 */
    //  Message: null,
    //
    //  dataAdapter: new MSGAdapter(),

    /** {Object.<String, Array>}*/
    this.cache = {};

    this.requestQueue = {};

    // 云平台访问token（暂时）
    this.token = options.token || this.constructor.token;

    this.tokenManager = options.tokenManager || this.constructor.tokenManager;

    this.pushInterval = options.pushInterval || this.constructor.pushInterval;

    DataStore._datastores.push(this);
  }

  // 创建连接，考虑连接共用

  _createClass(DataStore, [{
    key: '_connection',
    value: function _connection() {
      if (this.conn === null) {
        var map = DataStore._connMap = DataStore._connMap || {};
        var address = this.address;
        var conn;
        if (this.alone === false) {
          conn = map[address];
        }
        if (!conn) {
          var handler = $.extend({}, DataStore._connectionHandler, { dataParser: this.dataParser });
          var options = { deferred: true };
          conn = this.connectionType ? _html5Connection2['default'][this.connectionType](address, options, handler) : (0, _html5Connection2['default'])(address, options, handler);

          if (this.alone === false) {
            map[address] = conn;
          }
        }
        this.conn = conn;

        // 实际连接方式
        this.connectionType = conn._protocol;
      }
    }
  }, {
    key: '_open',
    value: function _open() {}
  }, {
    key: '_request',
    value: function _request() {}

    /**
     * 存储数据
     * @param data
     * @private
     */
  }, {
    key: '_store',
    value: function _store(data) {
      var _this6 = this;

      var objs = Object.keys(data);
      objs.forEach(function (obj) {

        var cacheForObj = _this6.cache[obj];
        var dataForObj = data[obj];

        // 判断数据是数组则追加缓存
        if (dataForObj instanceof Array) {
          cacheForObj = cacheForObj || [];
          cacheForObj.push.apply(cacheForObj, dataForObj);
          _this6.cache[obj] = cacheForObj;
        } else {
          _this6.cache[obj] = dataForObj;
        }
      });
    }
  }, {
    key: '_response',
    value: function _response(_ref) {
      var _this7 = this;

      var Qid = _ref.Qid;
      var Err = _ref.Err;
      var Data = _ref.Data;

      var request = this.requestQueue[Qid];
      if (!request) {} else if (Err !== 0) {
        request.error(Data ? typeof Data === 'string' ? Data : Data.toUTF8 ? Data.toUTF8() : JSON.stringify(Data) : 'unknown error');
        if (request.subscribe !== true) {
          delete this.requestQueue[Qid];
        }
      } else {
        var data = this.dataParser.parseMsg(Data);

        if (this.cacheEnable) {
          this._store(data);
        }

        var resultData = data;
        if (request.filter) {
          resultData = this._filter(data, request.filter);
        }
        request.response(resultData);

        if (request.subscribe !== true) {
          delete this.requestQueue[Qid];
        } else if (this.connectionType === 'http') {

          var nextRequest = function nextRequest() {

            // 对于http方式订阅则定时再次查询
            setTimeout(function () {

              // 暂停请求则不做下一次的请求，同时定时下次判断
              if (DataStore.pause === true) {
                nextRequest();
              } else if (request.start) {
                request.start();
              }
            }, _this7.pushInterval);
          };
          nextRequest();
        }
      }
    }
  }, {
    key: '_close',
    value: function _close() {

      // 连接关闭时，调用当前请求的错误回调方法，并且将请求全部取消
      var requestQueue = this.requestQueue;
      var keys = Object.keys(requestQueue);
      keys.forEach(function (qid) {
        var request = requestQueue[qid];
        request.error('connection close');
      });

      this.conn = null;
      this.cancel();
    }
  }, {
    key: '_error',
    value: function _error() {

      // 连接请求错误时，调用当前请求的错误回调方法
      var requestQueue = this.requestQueue;
      var keys = Object.keys(requestQueue);
      keys.forEach(function (qid) {
        var request = requestQueue[qid];
        request.error('request error');
      });
    }

    /**
     * 从缓存中查询指定obj的数据，filter做数据筛选
     * @param {?string} obj
     * @param {function|string|Object} filter
     * @return {boolean.<false>|Object} 返回false表示未找到指定obj的缓存数据，否则应该返回经过filter筛选过的数据
     * @private
     */
  }, {
    key: '_queryCache',
    value: function _queryCache(obj, filter) {

      if (this.cacheEnable === false) {
        return false;
      }
      var data;

      // 如果obj存在则根据obj找出cache中的待选数据
      if (obj) {
        var data = this.cache[obj];
        if (!data) {
          return false;
        }
        return this._filter(data, filter);
      } else {
        // 否则obj不存在则从全部的cache中做筛选
        return this._filter(this.cache, filter);
      }
    }

    /**
     * 使用指定的筛选器筛选data中数据，返回筛选结果
     * @param {Object|Array} data
     * @param {function|string|Object}filter
     * @returns {*}
     * @private
     */
  }, {
    key: '_filter',
    value: function _filter(data, filter) {

      var d = !(data instanceof Array) ? [data] : data;
      if (typeof filter === 'function') {
        return d.filter(filter);
      } else if (typeof filter === 'string') {
        return JSONSelect.match(filter, d);
      } else if (typeof filter === 'object') {
        var selector = [];
        var keys = Object.keys(filter);
        keys.forEach(function (key) {
          var value = filter[key];
          selector.push(':has(.' + key + ':expr(x' + value + '))');
        });
        selector = selector.join('');
        return d.filter(function (eachData) {
          return JSONSelect.match(selector, eachData).length > 0;
        });
      }
      return data;
    }
  }, {
    key: '_requestParams',
    value: function _requestParams(qid, obj, subscribe) {
      var params = {
        qid: qid,
        sub: subscribe && this.connectionType === 'ws' ? 1 : 0,
        output: this.dataType,
        compresser: this.compresser
      };

      var fieldStr = this._requestFieldStr();
      fieldStr ? params.field = fieldStr : null;

      return $.param($.extend(params, obj, this.otherParams));
    }
  }, {
    key: '_requestFieldStr',
    value: function _requestFieldStr() {
      if (!this.fields) {
        return null;
      } else if (this.fields instanceof Array) {
        return this.fields.join(',');
      } else if (typeof this.fields === 'object') {
        return Object.keys(this.fields).join(',');
      } else {
        return this.fields;
      }
    }

    /**
     * 查询数据
     * @param {Object|string} queryObject 查询对象
     * @param {Object} options 查询参数
     *  obj: {string|Array} 查询对象，obj key值对应着idProperty中指定的属性值
     *    string，是以逗号分割的多个obj
     *  filter: {?function|string|Object} 数据筛选条件，注意设置了filter情况，返回的每一个obj的数据肯定是数组
     *    function，对于每一条数据调用该function，返回true和false表示是否选中
     *    string，使用JSONSelect对于数据进行筛选 @see <http://jsonselect.org/>
     *      example: ':has(:root > .Open:expr(x>=100)):has(.Last:expr(x=100))'
     *    Object，筛选条件的数据对象,使用的也是JSONSelect的:expr，具体查看@see <http://jsonselect.org/#docs/>
     *      example:
     *      {
     *        Open: '>=100',
     *        Last: '=100'
     *        ...
     *      }
     *  subscribe: {?boolean} 是否订阅，默认false
     *  partial: {?boolean} 订阅请求时，返回是增量数据还是全量数据，默认true返回增量数据，(非订阅请求返回都是全量)
     *
     *  @return {Promise}
     */
  }, {
    key: 'query',
    value: function query(queryObject, options, cb) {
      var _this8 = this;

      var o = options || {},
          filter = o.filter;

      // 如果queryObject不存在则从缓存中筛选数据
      if (!queryObject) {

        // filter存在则是从cache中过滤所有数据
        if (filter) {
          return Promise.resolve(this._queryCache(null, filter));
        } else {
          return Promise.reject(new Error('query object is null'));
        }
      }

      var serviceUrl = this.serviceUrl;

      // 如果查询对象是字符串则反序列化为对象
      if (typeof queryObject === 'string') {
        if (queryObject[0] === '/') {
          var _queryObject$split = queryObject.split('?');

          var _queryObject$split2 = _slicedToArray(_queryObject$split, 2);

          serviceUrl = _queryObject$split2[0];
          queryObject = _queryObject$split2[1];
        }
        queryObject = $.unParam(queryObject || '');
      }

      var key = queryObject[this.idProperty],
          subscribe = o.subscribe || false,
          forceRequest = o.request,
          partial = o.partial !== false;

      if (key instanceof Array) {
        queryObject[this.idProperty] = key.join(',');
      }

      if (!!key && forceRequest !== true) {

        var request;

        // 判断查询对象是否已请求，已请求过则直接返回请求对象
        var keys = Object.keys(this.requestQueue);
        if (keys.some(function (qid) {
          var r = _this8.requestQueue[qid];
          if (r.key && r.key.toString() === key.toString()) {
            cb && r.callbacks.push(cb);
            request = r;
            return true;
          }
        })) {
          return request;
        }

        // 不是订阅则尝试从缓存中找到数据方法
        if (subscribe !== true && this.cacheEnable !== false) {
          var obj = key;
          if (typeof obj === 'string') {
            obj = obj.split(',').map(function (eachObj) {
              return eachObj.trim();
            });
          }
          var result = [];
          if (obj.every(function (eachObj) {
            var data = _this8._queryCache(eachObj, filter);
            if (data !== false) {
              result[eachObj] = data;
              return true;
            } else {
              return false;
            }
          }) === true) {
            return Promise.resolve(result);
          }
        }
      }

      // 连接
      this._connection();

      var options;

      if (this.connectionType === 'http') {

        // http协议不支持订阅
        //subscribe = false;
        if (this.dataType === 'pb' || this.compresser != null) {

          // 如果以http协议请求pb格式数据时，需设置额外参数以指定响应数据是二进制数据
          options = {
            dataType: 'arraybuffer'
          };
        }
      }
      var qid = DataStore._generateQid();
      var params = this._requestParams(qid, queryObject, subscribe);

      var request = new Request(qid, key, filter, subscribe, queryObject);
      this.requestQueue[qid] = request;
      cb && request.callbacks.push(cb);

      // 附加token处理
      Promise.resolve(this.token || this.tokenManager && this.tokenManager.getToken()).then(function (token) {
        if (token) {

          // 如果ws方式则修改conn的地址添加上token
          if (_this8.connectionType === 'ws' && _this8.conn._address.indexOf('token=') < 0) {
            _this8.conn._address = _this8.conn._address + '?token=' + token;
          } else if (_this8.connectionType === 'http') {
            params = params + '&token=' + token;
          }
        }
      })['catch'](function (data) {
        console.warn('Request token fail');
      }).then(function () {

        // 无论token处理成功或者失败，都尝试请求服务
        // 设置start为了http轮询处理
        request.start = function () {

          // 避免请求取消后再次查询，需检查request是否存在
          if (_this8.requestQueue[request.qid] === request) {
            _this8.conn.request(serviceUrl + '?' + params, options);
          }
        };
        request.start();
      });
      return request;

      //// 否则通过连接请求数据
      //var qid = this._generateQid();
      //var params = this._requestParams(qid, obj, subscribe);
      //var request = this.conn.request(this.serviceUrl, params, options).always(DataStore._response);
      //
      //// 封装request
      //request = _wrapperRequest(request, {
      //  qid: qid,
      //  obj: obj,
      //  deferreds: [deferred],
      //  subscribe: subscribe,
      //  dataStore: this
      //});
      //
      //this.requestQueue[qid] = request;
      //
      //return deferred;
    }
  }, {
    key: 'request',
    value: function request(queryObject, options) {
      return this.query(queryObject, $.extend(options, {
        subscribe: false,
        request: true
      }));
    }
  }, {
    key: 'subscribe',
    value: function subscribe(queryObject, options, cb) {
      if (typeof options === 'function') {
        cb = options;
        options = {};
      } else {
        options = options || {};
      }
      return this.query(queryObject, $.extend(options, {
        subscribe: true
      }), cb);
    }
  }, {
    key: '_cancelRequest',
    value: function _cancelRequest(qid) {
      if (this.connectionType === 'ws' && this.conn && this.conn.getStatus() === WebSocket.OPEN) {
        this.conn.request('/cancel?' + $.param({
          qid: qid
        }));
      }
    }

    /**
     * 取消查询
     * @param number|string qid|obj
     */
  }, {
    key: 'cancel',
    value: function cancel(arg) {
      var _this9 = this;

      if (typeof arg === 'number') {
        var qid = arg;
        this._cancelRequest(qid);
        delete this.requestQueue[qid];
      } else {
        var requestQueue = this.requestQueue;
        var keys = Object.keys(requestQueue);
        keys.forEach(function (qid) {
          var request = requestQueue[qid];
          if (!arg || request.key === arg) {
            _this9._cancelRequest(qid);
            delete requestQueue[qid];
          }
        });
      }
    }

    /**
     * 重置store
     */
  }, {
    key: 'reset',
    value: function reset(options) {

      // 取消当前请求，
      this.cancel();

      // 带入新的设置项
      $.extend(this, options);

      // 清理之前的缓存以及设置
      this.cache = {};

      this.requestQueue = {};

      this.conn = null;
    }
  }]);

  return DataStore;
})();

exports['default'] = DataStore;

DataStore.address = null;
DataStore.datatype = 'pb';
DataStore.pushInterval = 5000;

// 全局暂停标识，对于http订阅数据有效，默认为false
DataStore.pause = false;
module.exports = exports['default'];
},{"./dzhyun/DzhyunDataParser":4,"./dzhyun/DzhyunTokenManager":5,"./util":13,"html5-connection":16}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _DataParser2 = require('../DataParser');

var _DataParser3 = _interopRequireDefault(_DataParser2);

var _parser = require('./parser');

var _parser2 = _interopRequireDefault(_parser);

var _adapterMSGAdapter = require('./adapter/MSGAdapter');

var _adapterMSGAdapter2 = _interopRequireDefault(_adapterMSGAdapter);

var _adapterMSGDirectAdapter = require('./adapter/MSGDirectAdapter');

var _adapterMSGDirectAdapter2 = _interopRequireDefault(_adapterMSGDirectAdapter);

var _pbTable = require('./pbTable');

var _pbTable2 = _interopRequireDefault(_pbTable);

var _html5Yfloat = require('html5-yfloat');

var _html5Yfloat2 = _interopRequireDefault(_html5Yfloat);

var adapterMap = {
  _default: new _adapterMSGAdapter2['default'](),
  _direct: new _adapterMSGDirectAdapter2['default'](),
  'news': new _adapterMSGDirectAdapter2['default']()
};

var DzhyunDataParser = (function (_DataParser) {
  _inherits(DzhyunDataParser, _DataParser);

  function DzhyunDataParser(service) {
    _classCallCheck(this, DzhyunDataParser);

    _get(Object.getPrototypeOf(DzhyunDataParser.prototype), 'constructor', this).call(this);
    this.service = service;
    //this.direct = false;
  }

  // 默认值设置在原型上，可以通过修改原型统一设置

  _createClass(DzhyunDataParser, [{
    key: 'parseUAResponse',
    value: function parseUAResponse(compresser, data) {
      if (compresser === undefined) compresser = null;

      return _parser2['default'].parse(data, 'UAResponse', compresser);
    }
  }, {
    key: 'parseMsg',
    value: function parseMsg(msgData) {
      return this._adapter(_parser2['default'].parse(msgData, 'MSG'));
    }
  }, {
    key: 'parse',
    value: function parse(compresser, data) {
      var _this = this;

      if (compresser === undefined) compresser = null;

      return new Promise(function (resolve, reject) {
        var uaResponse = _this.parseUAResponse(compresser, data);
        data = uaResponse.Data;
        if (uaResponse.Err !== 0) {
          reject({
            qid: uaResponse.Qid,
            error: data ? typeof data === 'string' ? data : data.toUTF8 ? data.toUTF8() : JSON.stringify(data) : 'unknown error'
          });
        } else {
          resolve({
            qid: uaResponse.Qid,
            data: _this.parseMsg(data)
          });
        }
      });
    }

    // 根据service进行数据转换
  }, {
    key: '_adapter',
    value: function _adapter(data) {
      var _this2 = this;

      if (!data) {
        return data;
      }
      var adapter = this.direct ? adapterMap._direct : adapterMap._default;
      if (this.service) {
        var keys = Object.keys(adapterMap);
        keys.some(function (key) {
          if (_this2.service.indexOf(key) >= 0) {
            adapter = adapterMap[key];
            return true;
          }
        });
      }
      return adapter.adapt(data);
    }
  }]);

  return DzhyunDataParser;
})(_DataParser3['default']);

exports['default'] = DzhyunDataParser;
DzhyunDataParser.prototype.direct = false;

DzhyunDataParser.parser = _parser2['default'];
DzhyunDataParser.MSGAdapter = _adapterMSGAdapter2['default'];
DzhyunDataParser.pbTable = _pbTable2['default'];
DzhyunDataParser.yfloat = _html5Yfloat2['default'];

// 将DzhyunDataParser暴露到全局，便于外部使用（之后应该要从datastore中提出成单独模块）
var _global = global || undefined;
_global.DzhyunDataParser = DzhyunDataParser;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../DataParser":2,"./adapter/MSGAdapter":7,"./adapter/MSGDirectAdapter":8,"./parser":10,"./pbTable":11,"html5-yfloat":25}],5:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _html5Connection = require('html5-connection');

var _html5Connection2 = _interopRequireDefault(_html5Connection);

var _util = require('../util');

var util = _interopRequireWildcard(_util);

var _DzhyunDataParser = require('./DzhyunDataParser');

var _DzhyunDataParser2 = _interopRequireDefault(_DzhyunDataParser);

/**
 * 云平台Token管理（暂时）
 */

var DzhyunTokenManager = (function () {

  /**
   * @param {string} address 服务器地址
   * @param {Object=} params 请求token相关的参数 <http://dms.gw.com.cn/pages/viewpage.action?pageId=135299522>
   * @param {number=} refreshSecond 自动刷新token时间秒数，每隔指定时间则自动刷新当前token，设置为0表示不自动刷新token，不设置或者null则表示根据请求到的数据中duration来计算刷新时间
   */

  function DzhyunTokenManager(address, params, refreshSecond) {
    _classCallCheck(this, DzhyunTokenManager);

    this.address = address;
    this.params = params;
    this.refreshSecond = refreshSecond;
  }

  // 将DzhyunTokenManager暴露到全局，便于外部使用（之后应该要从datastore中提出成单独模块）

  _createClass(DzhyunTokenManager, [{
    key: '_request',
    value: function _request(service, params) {
      var _this = this;

      return new Promise(function (resolve, reject) {

        // FIXME https方式nodejs认证有问题，暂时先使用http方式
        //connection.https(this.address, {}, {
        _html5Connection2['default'].http(_this.address, {}, {
          response: resolve,
          error: reject
        }).request(service + '?' + util.param(params));
      }).then(function (data) {
        return new _DzhyunDataParser2['default'](service).parse(null, data);
      }).then(function (data) {
        data = data.data[0];
        if (data.result == 0) {
          return data;
        } else {
          throw data;
        }
      });
    }

    /**
     * 请求访问token
     * @param {Object} params <http://dms.gw.com.cn/pages/viewpage.action?pageId=135299522>
     * @returns {Promise.<T>}
     */
  }, {
    key: 'access',
    value: function access(params) {
      return this._request('/token/access', params);
    }

    /**
     * 刷新访问token
     * @deprecated 已废弃，请使用access方法重新请求新的token
     * @param {Object} params <http://dms.gw.com.cn/pages/viewpage.action?pageId=135299522>
     * @returns {Promise.<T>}
     */
  }, {
    key: 'refresh',
    value: function refresh(params) {
      return this._request('/token/refresh', params);
    }

    /**
     * 得到当前token,为空则请求新的token
     */
  }, {
    key: 'getToken',
    value: function getToken() {
      var _this2 = this;

      return this._promise || (this._promise = Promise.resolve(this._token || this.access(this.params).then(function (data) {
        _this2._token = data.token;
        _this2._promise = null;

        // 自动刷新token
        _this2._refreshToken(data);
        return _this2._token;
      })));
    }

    /**
     * 自动刷新token处理
     * @private
     */
  }, {
    key: '_refreshToken',
    value: function _refreshToken(data) {
      var _this3 = this;

      //var lastTime = data.create_time || data.refresh_time;
      var duration = parseInt(data.duration);

      var refreshSecond = this.refreshSecond;
      if (refreshSecond !== 0) {
        refreshSecond = refreshSecond || Math.max(duration - 60, 10);
        this._refreshTimeout && clearTimeout(this._refreshTimeout);
        this._refreshTimeout = setTimeout(function () {
          _this3._refreshTimeout = null;
          _this3.access(_this3.params).then(function (data) {
            _this3._token = data.token;

            // 注意，token重设置以后，之前的promise必须移除;
            _this3._promise = null;

            // 下一次刷新
            _this3._refreshToken(data);
          })['catch'](function () {

            // 刷新失败, 删除token和promise，再下次getToken时会再次重新请求token
            _this3._token = null;
            _this3._promise = null;
          });
        }, refreshSecond * 1000);
      }
    }
  }]);

  return DzhyunTokenManager;
})();

exports['default'] = DzhyunTokenManager;
var _global = global || undefined;
_global.DzhyunTokenManager = DzhyunTokenManager;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../util":13,"./DzhyunDataParser":4,"html5-connection":16}],6:[function(require,module,exports){
/**
 * 数据转换器，负责将各种响应数据类型转换为用于DataStore统一存储用格式
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseDataAdapter = (function () {
  function BaseDataAdapter() {
    _classCallCheck(this, BaseDataAdapter);
  }

  _createClass(BaseDataAdapter, [{
    key: "adapt",

    /**
     * 将输入数据转换为同一格式的输出
     * @param input
     * @return {Object.<key: String, value: Object|Array>}
     */
    value: function adapt() {
      return;
    }
  }]);

  return BaseDataAdapter;
})();

exports["default"] = BaseDataAdapter;
module.exports = exports["default"];
},{}],7:[function(require,module,exports){
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

var excludeFieldName = ['Id', 'Obj', 'ObjCount'];

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
        // 排序将'RepData'开头的数据字段放前面，先判断（尽量避免以后再添加字段时不会影响现有逻辑）
        var keys = Object.keys(input).sort(function (key1, key2) {
          return key1.indexOf('RepData') === 0 ? -1 : key2.indexOf('RepData') === 0 ? 1 : 0;
        });
        keys.some(function (key) {
          var data = input[key];

          // 不是排除的字段并且不为null
          if (excludeFieldName.indexOf(key) < 0 && data !== null) {

            // 不是数组或者数组长度大于0
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
},{"../jsonTable":9,"../pbTable":11,"../protobuf":12,"./BaseDataAdapter":6,"html5-yfloat":25}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _MSGAdapter2 = require('./MSGAdapter');

var _MSGAdapter3 = _interopRequireDefault(_MSGAdapter2);

var MSGDirectAdapter = (function (_MSGAdapter) {
  _inherits(MSGDirectAdapter, _MSGAdapter);

  function MSGDirectAdapter() {
    _classCallCheck(this, MSGDirectAdapter);

    _get(Object.getPrototypeOf(MSGDirectAdapter.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MSGDirectAdapter, [{
    key: 'format',
    value: function format(data) {
      return data;
    }
  }]);

  return MSGDirectAdapter;
})(_MSGAdapter3['default']);

exports['default'] = MSGDirectAdapter;
module.exports = exports['default'];
},{"./MSGAdapter":7}],9:[function(require,module,exports){
/**
 * jsonTable的格式化转换模块
 * Created by jiagang on 2015/11/19.
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var convertToJsonArray = function convertToJsonArray(input) {
  if (!input || !input.head) return input;

  var head = input.head,
      data = input.data;

  return data.map(function (row) {
    var rowObject = {};
    row.forEach(function (cell, columnIndex) {
      rowObject[head[columnIndex]] = convertToJsonArray(cell);
    });
    return rowObject;
  });
};
exports["default"] = { convertToJsonArray: convertToJsonArray };
module.exports = exports["default"];
},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dzhyun = require('./dzhyun');

var _dzhyun2 = _interopRequireDefault(_dzhyun);

var _protobuf = require('./protobuf');

var _protobuf2 = _interopRequireDefault(_protobuf);

var _snappyjs = require('snappyjs');

var _snappyjs2 = _interopRequireDefault(_snappyjs);

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

  parse: function parse(data, message, compresser) {
    if (compresser === 'snappy') {
      try {
        if (typeof data === 'string') {
          data = this.stringToArrayBuffer(data);
          data = _snappyjs2['default'].uncompress(data);
          data = this.arrayBufferToString(data);
        } else {
          data = _snappyjs2['default'].uncompress(data);
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
    } catch (err) {

      // 转换失败，异常情况，考虑可能是json格式问题无法解析，也可能是pb结构错误解析错误
      console.warn(new Date() + ',Fail parse data [' + data + ']', err.message);
    }
    return result;
  }
};
module.exports = exports['default'];
},{"./dzhyun":14,"./protobuf":12,"snappyjs":32}],11:[function(require,module,exports){
/**
 * pb table格式数据转换模块
 */
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

/** 列类型枚举 */
var InfoType = _dzhyun2['default'].InfoType || {
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
var PbTable = _dzhyun2['default'].Table;

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
var PbTableConverter = function PbTableConverter(options) {
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
  _pbTableDecode: function _pbTableDecode(pbTable) {

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
  _getColumnDataValues: function _getColumnDataValues(columnData, columnType) {

    // 非未知类型直接取类型的字段值
    if (columnType !== InfoType.Type_Unknow) {
      var fieldName = cDataFieldPrefix[columnType] + 'Values';
      return columnData[fieldName];
    }

    // 对于未知类型则按顺序找到第一个不为空的数据字段值
    else {
        return columnData.iValues || columnData.fValues || columnData.dValues || columnData.sValues || columnData.bValues || columnData.tValues || columnData.xValues;
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
  _retrieveValue: function _retrieveValue(value, columnType, columnRatio, rowIndex) {

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
  _convertColumn: function _convertColumn(columnData, columnInfo, resultArray) {
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
  _columnToRow: function _columnToRow(columnValues, columnIndex, columnName, columnType, columnRatio, resultArray) {

    // 上一个数据值，用作差分类型计算，dq记录数据差分
    var differObject = {
      previousValue: 0,
      dq: undefined
    };
    columnValues.forEach((function (value, rowIndex) {

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
        var filterValue = this.options.filter(value, columnType == InfoType.Type_SInt ? differObject : void 0);
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
    }).bind(this));

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
  convert: function convert(pbTable, isFirstRow) {

    var pbTableMessage = this._pbTableDecode(pbTable);

    // 得到table列信息
    var tableInfoId = pbTableMessage.Tiid;
    var tableInfo = pbTableMessage.Info;

    // table信息不存在则从堆栈或者全局缓存中查找对应table信息
    if (!tableInfo || tableInfo.length === 0) {
      var length = this._tableInfoStack.length;
      tableInfo = isFirstRow === false && length > 0 ? this._tableInfoStack[length] : tableInfoCache[tableInfoId];
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
      tableData.forEach((function (columnData) {
        var columnIndex = columnData.Index;

        // 从table信息中得到该列对应的column信息，column信息可能不存在
        var columnInfo = tableInfo ? tableInfo[columnIndex] : null;
        this._convertColumn(columnData, columnInfo, jsonArray);
      }).bind(this));
    } else {
      throw new Error('table data undefined');
    }

    return jsonArray;
  }
};

exports['default'] = {

  /**
   * 将传入的pbTable格式数据转换成标准json对象数组
   * @param {!ArrayBuffer|ByteBuffer|Object} pbTable 待转换的pbTable格式数据
   * @param {Object=} options 选项
   * @throws {Error}
   * @return {Array.<Object>} 转换后的标准json对象数组
   */
  convertToJsonArray: function convertToJsonArray(pbTable, options) {
    return new PbTableConverter(options).convert(pbTable);
  },

  /**
   * 将传入的pbTable格式数据转换成行列结构的二维数组
   * @param {!ArrayBuffer|ByteBuffer|Object} pbTable 待转换的pbTable格式数据
   * @param {Object=} options 选项
   * @throws {Error}
   * @return {Array.<Array.<*>>} 转换后的标准json对象数组
   */
  convertToJsonTable: function convertToJsonTable(pbTable, options) {
    var converter = new PbTableConverter(options);
    converter._columnToRow = function (columnValues, columnIndex, columnName, columnType, columnRatio, resultArray) {

      // 上一个数据值，用作差分类型计算
      var previousValue = 0;
      columnValues.forEach((function (value, rowIndex) {

        // 对应结果行数据不存在则创建
        var row = resultArray[rowIndex];
        if (row === undefined) {
          row = [];
          resultArray.push(row);
        }
        previousValue = this._retrieveValue(value, previousValue, columnType, columnRatio);
        row.push(previousValue);
      }).bind(this));
    };
    return converter.convert(pbTable);
  }
};
module.exports = exports['default'];
},{"./dzhyun":14,"./protobuf":12}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ProtoBuf;
try {
  ProtoBuf = require('protobufjs');
} catch (err) {
  ProtoBuf = typeof dcodeIO !== 'undefined' && dcodeIO.ProtoBuf;
}

if (!ProtoBuf) {

  ProtoBuf = {};

  // 简单模拟ProtoBuf中ByteBuffer和Long
  ProtoBuf.Long = function Long() {
    _classCallCheck(this, Long);
  };

  ProtoBuf.ByteBuffer = function ByteBuffer() {
    _classCallCheck(this, ByteBuffer);
  };
}

//var ByteBuffer = ProtoBuf.ByteBuffer;

//function polyfill(ProtoBuf) {
//
//  // 默认true将int64类型转换为Number，false使用原始方法转换为Long
//  ProtoBuf.asNumber = true;
//
//  var ByteBufferPrototype = ByteBuffer.prototype;
//  ByteBufferPrototype._readVarint64 = ByteBufferPrototype.readVarint64;
//  ByteBufferPrototype._readVarint64ZigZag = ByteBufferPrototype.readVarint64ZigZag;
//
//  ByteBufferPrototype.parseNumber = function (lowBits, highBits) {
//    var ratios = [100, 10, 1, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 1];
//    var digtes = [2, 1, 0, 3, 4, 5, 6, 7, 8, 9, 0];
//
//    var B = (lowBits >> 16) & 0xFF;
//    var L = B & 0x0F;
//    var H = (B >> 4) & 0x0F;
//
//    if (L == 2)
//      return "--";
//
//    var N = highBits * 0x1000000;
//    N += (lowBits & 0xFFFF) + ((lowBits >> 24) * 0x10000);
//    N /= ratios[L];
//    if (H != 0) {
//      return Number((-N).toFixed(digtes[L]));
//    } else {
//      return Number(N.toFixed(digtes[L]));
//    }
//  };
//
//  ByteBufferPrototype.readVarint64 = function(offset) {
//    if (ProtoBuf.asNumber === false) {
//      return this._readVarint64(offset);
//    } else if (this.view) {
//      return this._readVarint64AB(offset);
//    } else {
//      return this._readVarint64NB(offset);
//    }
//  };
//
//  ByteBufferPrototype._readVarint64AB = function (offset) {
//    var relative = typeof offset === 'undefined';
//    if (relative) offset = this.offset;
//    if (!this.noAssert) {
//      if (typeof offset !== 'number' || offset % 1 !== 0)
//        throw TypeError("Illegal offset: " + offset + " (not an integer)");
//      offset >>>= 0;
//      if (offset < 0 || offset + 1 > this.buffer.byteLength)
//        throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 1 + ") <= " + this.buffer.byteLength);
//    }
//    // ref: src/google/protobuf/io/coded_stream.cc
//    var start = offset,
//      part0 = 0,
//      part1 = 0,
//      part2 = 0,
//      b  = 0;
//    b = this.view.getUint8(offset++); part0  = (b & 0x7F)      ; if (b & 0x80) {
//      b = this.view.getUint8(offset++); part0 |= (b & 0x7F) <<  7; if (b & 0x80) {
//        b = this.view.getUint8(offset++); part0 |= (b & 0x7F) << 14; if (b & 0x80) {
//          b = this.view.getUint8(offset++); part0 |= (b & 0x7F) << 21; if (b & 0x80) {
//            b = this.view.getUint8(offset++); part1  = (b & 0x7F)      ; if (b & 0x80) {
//              b = this.view.getUint8(offset++); part1 |= (b & 0x7F) <<  7; if (b & 0x80) {
//                b = this.view.getUint8(offset++); part1 |= (b & 0x7F) << 14; if (b & 0x80) {
//                  b = this.view.getUint8(offset++); part1 |= (b & 0x7F) << 21; if (b & 0x80) {
//                    b = this.view.getUint8(offset++); part2  = (b & 0x7F)      ; if (b & 0x80) {
//                      b = this.view.getUint8(offset++); part2 |= (b & 0x7F) <<  7; if (b & 0x80) {
//                        throw Error("Buffer overrun"); }}}}}}}}}}
//    var value = this.parseNumber(part0 | (part1 << 28), (part1 >>> 4) | (part2) << 24);
//    if (relative) {
//      this.offset = offset;
//      return value;
//    } else {
//      return {
//        'value': value,
//        'length': offset - start
//      };
//    }
//  };
//
//  ByteBufferPrototype._readVarint64NB = function (offset) {
//    var relative = typeof offset === 'undefined';
//    if (relative) offset = this.offset;
//    if (!this.noAssert) {
//      if (typeof offset !== 'number' || offset % 1 !== 0)
//        throw TypeError("Illegal offset: "+offset+" (not an integer)");
//      offset >>>= 0;
//      if (offset < 0 || offset + 1 > this.buffer.length)
//        throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.length);
//    }
//    // ref: src/google/protobuf/io/coded_stream.cc
//    var start = offset,
//      part0 = 0,
//      part1 = 0,
//      part2 = 0,
//      b  = 0;
//    b = this.buffer[offset++]; part0  = (b & 0x7F)      ; if ( b & 0x80                                                   ) {
//      b = this.buffer[offset++]; part0 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
//        b = this.buffer[offset++]; part0 |= (b & 0x7F) << 14; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
//          b = this.buffer[offset++]; part0 |= (b & 0x7F) << 21; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
//            b = this.buffer[offset++]; part1  = (b & 0x7F)      ; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
//              b = this.buffer[offset++]; part1 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
//                b = this.buffer[offset++]; part1 |= (b & 0x7F) << 14; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
//                  b = this.buffer[offset++]; part1 |= (b & 0x7F) << 21; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
//                    b = this.buffer[offset++]; part2  = (b & 0x7F)      ; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
//                      b = this.buffer[offset++]; part2 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
//                        throw Error("Buffer overrun"); }}}}}}}}}}
//    var value = this.parseNumber(part0 | (part1 << 28), (part1 >>> 4) | (part2) << 24);
//    if (relative) {
//      this.offset = offset;
//      return value;
//    } else {
//      return {
//        'value': value,
//        'length': offset-start
//      };
//    }
//  };
//
//  ByteBufferPrototype.readVarint64ZigZag = function (offset) {
//    if (ProtoBuf.asNumber === false) {
//      return ByteBufferPrototype._readVarint64ZigZag.call(this, offset);
//    }
//    var val = this.readVarint64(offset);
//    if (val && val['value'] instanceof Long) {
//      val["value"] = ByteBuffer.zigZagDecode64(val["value"]);
//      return this.parseNumber(val["value"].low, val["value"].high);
//    }
//    else {
//      val = ByteBuffer.zigZagDecode64(val);
//      return this.parseNumber(val.low, val.high);
//    }
//    return val;
//  };
//}

//polyfill(ProtoBuf);

exports['default'] = ProtoBuf;
module.exports = exports['default'];
},{"protobufjs":"protobufjs"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.unParam = unParam;

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _html5ConnectionLibUtil = require('html5-connection/lib/util');

_defaults(exports, _interopExportWildcard(_html5ConnectionLibUtil, _defaults));

function unParam(searchStr) {
  if (searchStr.indexOf('?') === 0) {
    searchStr = searchStr.substring(1);
  }
  var pairs = searchStr.split('&'),
      obj = {},
      pair,
      i;

  for (i in pairs) {
    if (pairs[i] === '') continue;

    pair = pairs[i].split('=');
    obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair.slice(1).join('='));
  }

  return obj;
}
},{"html5-connection/lib/util":24}],14:[function(require,module,exports){

},{}],15:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],16:[function(require,module,exports){
require('./lib/HttpConnection');
require('./lib/WebSocketConnection');

module.exports = require('./lib/connection');
},{"./lib/HttpConnection":18,"./lib/WebSocketConnection":20,"./lib/connection":23}],17:[function(require,module,exports){
/**
 * connection基类
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BaseConnection = (function () {

  /**
   * 构造方法
   * @param {!string} address 连接地址
   * @param {!object} options 设置参数
   * @param {object=} handler 事件处理对象
   * @param {boolean=} [secure=false]
   */

  function BaseConnection(address, options, handler, secure) {
    _classCallCheck(this, BaseConnection);

    this._address = address;
    this.options = options || {};

    if (typeof handler === 'boolean') {
      this._secure = handler;
      this._handler = null;
    } else {
      this._secure = secure || false;
      this._handler = handler;
    }

    // 默认协议
    this._protocol = 'http';

    this._listenerMap = {};
  }

  _createClass(BaseConnection, [{
    key: 'getAddress',
    value: function getAddress() {
      return this.getProtocol() + '://' + this._address.replace(/^(\w+:\/\/)?/, '');
    }
  }, {
    key: 'getProtocol',
    value: function getProtocol() {
      return this._protocol + (this._secure ? 's' : '');
    }
  }, {
    key: 'request',
    value: function request(message, options) {}
  }, {
    key: 'send',
    value: function send(message, options) {
      this.request(message, options);
    }
  }, {
    key: 'close',
    value: function close() {}
  }, {
    key: 'on',

    /**
     * 事件监听接口
     */

    value: function on(type, listener) {
      if (typeof listener === 'function') {
        var listeners = this._listenerMap[type] || (this._listenerMap[type] = []);
        if (listeners.indexOf(listener) < 0) {
          listeners.push(listener);
        }
      }
      return this;
    }
  }, {
    key: 'off',
    value: function off(type, listener) {
      if (typeof listener === 'function') {
        var listeners = this._listenerMap[type] || (this._listenerMap[type] = []);
        var index = listeners.indexOf(listener);
        index >= 0 && listeners.splice(index, 1);
      }
      return this;
    }
  }, {
    key: 'trigger',
    value: function trigger(type) {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this._listenerMap[type];
      listeners && listeners.forEach(function (listener) {
        return listener.apply(_this, args);
      });

      // 同时触发handler中对应方法
      this._handler && typeof this._handler[type] === 'function' && this._handler[type].apply(this._handler, args);
      return this;
    }
  }]);

  return BaseConnection;
})();

BaseConnection.EVENT_OPEN = 'open';
BaseConnection.EVENT_CLOSE = 'close';
BaseConnection.EVENT_ERROR = 'error';
BaseConnection.EVENT_REQUEST = 'request';
BaseConnection.EVENT_SEND = 'send';
BaseConnection.EVENT_RESPONSE = 'response';
BaseConnection.EVENT_MESSAGE = 'message';
BaseConnection.EVENT_PROGRESS = 'progress';

exports['default'] = BaseConnection;
module.exports = exports['default'];
},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

var _BaseConnection2 = require('./BaseConnection');

var _BaseConnection3 = _interopRequireDefault(_BaseConnection2);

var _util = require('./util');

var _ajax = require('./ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var HttpConnection = (function (_BaseConnection) {
  function HttpConnection() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, HttpConnection);

    _get(Object.getPrototypeOf(HttpConnection.prototype), 'constructor', this).apply(this, args);

    // 用于记录当前未关闭的请求
    this._request = [];
  }

  _inherits(HttpConnection, _BaseConnection);

  _createClass(HttpConnection, [{
    key: 'request',
    value: function request(message, options) {
      var _this = this;

      options = (0, _util.extend)({}, this.options, options);

      options.success = function (data, textStatus, jqXHR) {
        _this.trigger(_BaseConnection3['default'].EVENT_MESSAGE, data);
        _this.trigger(_BaseConnection3['default'].EVENT_RESPONSE, data);
      };

      options.error = function (jqXHR, textStatus, errorThrown) {
        _this.trigger(_BaseConnection3['default'].EVENT_ERROR, errorThrown);
      };

      options.complete = function () {
        var index = _this._request.indexOf(xhr);
        _this._request.splice(index, 1);
      };

      options.url = this.getAddress() + (message ? message : '');

      var xhr = (0, _ajax2['default'])(options);

      xhr && (xhr.onreadystatechange = (function (origFun) {
        return function () {
          if (xhr.readyState === 2) {

            // 发出了请求
            _this.trigger(_BaseConnection3['default'].EVENT_SEND);
            _this.trigger(_BaseConnection3['default'].EVENT_REQUEST);
          }
          origFun && origFun();
        };
      })(xhr.onreadystatechange));

      // 打开了连接
      this.trigger(_BaseConnection3['default'].EVENT_OPEN);

      this._request.push(xhr);

      xhr.onprogress = function (event) {
        _this.trigger(_BaseConnection3['default'].EVENT_PROGRESS, event);
      };

      return this;
    }
  }, {
    key: 'close',
    value: function close() {
      var _this2 = this;

      // 取消全部未结束的请求
      this._request.forEach(function (xhr, index) {
        xhr.abort();
        _this2._request.splice(index, 1);
      });

      this.trigger(_BaseConnection3['default'].EVENT_CLOSE);
      return this;
    }
  }]);

  return HttpConnection;
})(_BaseConnection3['default']);

exports['default'] = HttpConnection;
;

_connection2['default'].http = function (url, options, handler) {
  return new HttpConnection(url, options, handler, false);
};

_connection2['default'].https = function (url, options, handler) {
  return new HttpConnection(url, options, handler, true);
};
module.exports = exports['default'];
},{"./BaseConnection":17,"./ajax":22,"./connection":23,"./util":24}],19:[function(require,module,exports){
// WebSocket 依赖，node环境使用模块ws
'use strict';

if (typeof window !== 'undefined') {
  if (window.WebSocket) {
    module.exports = window.WebSocket;
  } else {
    console.log('当前浏览器不支持WebSocket');
  }
} else if (typeof WebSocket !== 'undefined') {
  module.exports = WebSocket;
} else {
  var wsDep = 'ws';
  module.exports = require(wsDep);
}
},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

var _BaseConnection2 = require('./BaseConnection');

var _BaseConnection3 = _interopRequireDefault(_BaseConnection2);

var _WebSocket = require('./WebSocket');

var _WebSocket2 = _interopRequireDefault(_WebSocket);

var WebSocketConnection = (function (_BaseConnection) {

  /**
   *
   * @param address
   * @param {{deferred: boolean}} options
   *  deferred: false 创建连接时马上连接websocket，默认
   *            true  延时在第一次请求时连接websocket
   */

  function WebSocketConnection(address, options, handler) {
    _classCallCheck(this, WebSocketConnection);

    _get(Object.getPrototypeOf(WebSocketConnection.prototype), 'constructor', this).apply(this, arguments);

    this._protocol = 'ws';
    this._ws = null;

    var deferred = options && options.deferred === true || false;

    if (deferred === false) {
      this._connect();
    }
  }

  _inherits(WebSocketConnection, _BaseConnection);

  _createClass(WebSocketConnection, [{
    key: 'getStatus',
    value: function getStatus() {
      return this._ws ? this._ws.readyState : _WebSocket2['default'].CLOSED;
    }
  }, {
    key: '_connect',
    value: function _connect() {
      var _this = this;

      // 连接创建websocket
      if (typeof _WebSocket2['default'] !== 'undefined') {
        this._ws = new _WebSocket2['default'](this.getAddress());

        // 避免WebSocket上没有状态静态值
        if (_WebSocket2['default'].OPEN === undefined) {
          _WebSocket2['default'].CONNECTING = this._ws.CONNECTING;
          _WebSocket2['default'].OPEN = this._ws.OPEN;
          _WebSocket2['default'].CLOSING = this._ws.CLOSING;
          _WebSocket2['default'].CLOSED = this._ws.CLOSED;
        }
        this._ws.binaryType = this.options.binaryType || this.options.dataType || 'arraybuffer';

        this._ws.addEventListener('open', function () {
          _this.trigger(_BaseConnection3['default'].EVENT_OPEN);
        });
        this._ws.addEventListener('error', function () {
          _this.trigger(_BaseConnection3['default'].EVENT_ERROR);
        });
        this._ws.addEventListener('close', function () {
          _this.trigger(_BaseConnection3['default'].EVENT_CLOSE);
        });
        this._ws.addEventListener('message', function (message) {
          _this.trigger(_BaseConnection3['default'].EVENT_MESSAGE, message.data);
          _this.trigger(_BaseConnection3['default'].EVENT_RESPONSE, message.data);
        });
      } else {
        throw Error('Don\'t support WebSocket');
      }
    }
  }, {
    key: 'request',
    value: function request(message, options) {
      var _this2 = this;

      message = message || '';
      if (this.getStatus() === _WebSocket2['default'].CLOSED) {
        this._connect();
      }

      if (this.getStatus() !== _WebSocket2['default'].OPEN) {
        this._ws.addEventListener('open', function () {
          _this2._ws.send(message);
          _this2.trigger(_BaseConnection3['default'].EVENT_SEND);
          _this2.trigger(_BaseConnection3['default'].EVENT_REQUEST);
        });
      } else {
        this._ws.send(message);
        this.trigger(_BaseConnection3['default'].EVENT_SEND);
        this.trigger(_BaseConnection3['default'].EVENT_REQUEST);
      }
      return this;
    }
  }, {
    key: 'close',
    value: function close() {
      if (this.getStatus() !== _WebSocket2['default'].CLOSED) {
        this._ws.close();
        this._ws = null;
      }
      return this;
    }
  }]);

  return WebSocketConnection;
})(_BaseConnection3['default']);

exports['default'] = WebSocketConnection;
;

_connection2['default'].ws = function (url, options, handler) {
  return new WebSocketConnection(url, options, handler, false);
};

_connection2['default'].wss = function (url, options, handler) {
  return new WebSocketConnection(url, options, handler, true);
};
module.exports = exports['default'];
},{"./BaseConnection":17,"./WebSocket":19,"./connection":23}],21:[function(require,module,exports){
// 判断环境，浏览器环境存在window对象
'use strict';

if (typeof window !== 'undefined') {

  // 不考虑IE6以下的ActiveX方式
  if (window.XMLHttpRequest) {
    module.exports = window.XMLHttpRequest;
  } else {
    console.log('当前浏览器不支持XMLHttpRequest');
  }
} else if (typeof XMLHttpRequest !== 'undefined') {
  module.exports = XMLHttpRequest;
} else {

  // nodejs中使用xhr2模块
  var xmlhttprequestDep = 'xhr2';
  var xmlhttprequest = require(xmlhttprequestDep);
  module.exports = xmlhttprequest.XMLHttpRequest || xmlhttprequest;
}
},{}],22:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

var _XMLHttpRequest = require('./XMLHttpRequest');

var _XMLHttpRequest2 = _interopRequireDefault(_XMLHttpRequest);

var _util = require('./util');

/**
 * 模拟jquery的ajax接口
 */

/**
 * 得到ArrayBuffer类型的响应数据
 * @param xhr
 * @returns {ArrayBuffer}
 */
function getArrayBufferResponse(xhr) {
  if (typeof ArrayBuffer === 'undefined') {
    throw new Error('不支持ArrayBuffer类型');
  } else if (xhr.response instanceof ArrayBuffer) {
    return xhr.response;
  } else {

    var text = xhr.responseText;
    var length = text.length;
    var buf = new ArrayBuffer(length);
    var bufView = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {

      // "& 0xff"，表示在每个字符的两个字节之中，只保留后一个字节，将前一个字节扔掉。原因是浏览器解读字符的时候，会把字符自动解读成Unicode的0xF700-0xF7ff区段。
      // http://www.ruanyifeng.com/blog/2012/09/xmlhttprequest_level_2.html
      bufView[i] = text.charCodeAt(i) & 255;
    }
    return buf;
  }
}

/**
 * 得到Blob类型的响应数据
 * @param xhr
 */
function getBlobResponse(xhr) {
  if (typeof Blob === 'undefined') {
    throw new Error('不支持Blob类型');
  } else if (xhr.response instanceof Blob) {
    return xhr.response;
  } else {
    var buf = getArrayBufferResponse(xhr);

    // TODO 未知类型
    return new Blob([buf]);
  }
}

// 判断如果$.ajax存在则直接使用$.ajax
if (typeof $ !== 'undefined' && typeof $.ajax === 'function' && typeof XDomainRequest === 'undefined') {
  var binaryTransport = function (options, originalOptions, jqXHR) {
    return {
      send: function send(headers, callback) {
        var data, type, url, xhr;
        xhr = options.xhr();

        url = options.url;
        type = options.type;
        data = options.data || null;
        xhr.onload = function () {

          var response = options.dataType === 'arraybuffer' ? getArrayBufferResponse(xhr) : getBlobResponse(xhr);

          var result = _defineProperty({}, options.dataType, response);
          return callback(xhr.status, xhr.statusText, result, xhr.getAllResponseHeaders());
        };
        xhr.onerror = 'error', function (err) {
          return callback(-1, err);
        };
        xhr.ontimeout = function (err) {
          return callback(-1, err);
        };

        xhr.open(type, url, true);

        // 因为IE的问题，只能将设置responseType的操作放在xhr.open之后
        // https://connect.microsoft.com/IE/feedback/details/795580/ie11-xmlhttprequest-incorrectly-throws-invalidstateerror-when-setting-responsetype
        // 判断是否支持设置responseType
        var supported = typeof xhr.responseType === 'string';

        // 支持二进制请求直接设置responseType
        if (supported) {

          // 响应类型默认arraybuffer，可以设置为blob（响应回来使用response取得数据）
          xhr.responseType = options.dataType;
        } else {

          // 不支持则尝试使用用户自定义的字符集方式（响应回来使用responseText取得数据）
          xhr.overrideMimeType ? xhr.overrideMimeType('text/plain; charset=x-user-defined') : xhr.setRequestHeader('Accept-Charset', 'x-user-defined');
        }

        for (var i in headers) {
          xhr.setRequestHeader(i, headers[i]);
        }

        return xhr.send(data);
      },
      abort: function abort() {
        return jqXHR.abort();
      }
    };
  };

  // 从jqXHR中暴露原生的xhr
  var generateXHRFun = $.ajaxSettings.xhr;

  // jquery强制支持异步跨域
  $.support.cors = true;

  $.ajaxSetup({
    xhr: function xhr() {
      var xhr = generateXHRFun.call(this);
      this.setXHR(xhr);
      return xhr;
    },
    beforeSend: function beforeSend(jqXHR, settings) {
      settings.setXHR = function (xhr) {
        xhr.abort = jqXHR.abort;
        jqXHR.xhr = xhr;
      };
    },
    crossDomain: true
  });

  $.ajaxTransport('+arraybuffer', binaryTransport);
  $.ajaxTransport('+blob', binaryTransport);

  module.exports = function ajax() {
    var jqXHR = $.ajax.apply($, [].slice.call(arguments));
    return jqXHR.xhr;
  };
} else {
  var jsonpID, nodejs, document, key, name, rscript, scriptTypeRE, xmlTypeRE, jsonType, htmlType, blankRE;
  var ajax;

  (function () {

    // trigger a custom event and return false if it was cancelled

    var triggerAndReturn = function (context, eventName, data) {
      //todo: Fire off some events
      //var event = $.Event(eventName)
      //$(context).trigger(event, data)
      return true; //!event.defaultPrevented
    };

    // trigger an Ajax "global" event

    var triggerGlobal = function (settings, context, eventName, data) {
      if (settings.global) return triggerAndReturn(context || document, eventName, data);
    };

    var ajaxStart = function (settings) {
      if (settings.global && ajax.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');
    };

    var ajaxStop = function (settings) {
      if (settings.global && ! --ajax.active) triggerGlobal(settings, null, 'ajaxStop');
    };

    // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable

    var ajaxBeforeSend = function (xhr, settings) {
      var context = settings.context;
      if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false) return false;

      triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
    };

    var ajaxSuccess = function (data, xhr, settings) {
      var context = settings.context,
          status = 'success';
      settings.success.call(context, data, status, xhr);
      triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
      ajaxComplete(status, xhr, settings);
    };

    // type: "timeout", "error", "abort", "parsererror"

    var ajaxError = function (error, type, xhr, settings) {
      var context = settings.context;
      settings.error.call(context, xhr, type, error);
      triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error]);
      ajaxComplete(type, xhr, settings);
    };

    // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"

    var ajaxComplete = function (status, xhr, settings) {
      var context = settings.context;
      settings.complete.call(context, xhr, status);
      triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
      ajaxStop(settings);
    };

    // Empty function, used as default callback

    var empty = function () {};

    var mimeToDataType = function (mime) {
      return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
    };

    var appendQuery = function (url, query) {
      return (url + '&' + query).replace(/[&?]{1,2}/, '?');
    };

    // serialize payload and append it to the URL for GET requests

    var serializeData = function (options) {
      if (typeof options.data === 'object') options.data = (0, _util.param)(options.data);
      if (options.data && (!options.type || options.type.toUpperCase() == 'GET')) options.url = appendQuery(options.url, options.data);
    };

    // 修改自https://github.com/ForbesLindesay/ajax
    jsonpID = 0;
    nodejs = typeof window === 'undefined';
    document = !nodejs && window.document;
    rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    scriptTypeRE = /^(?:text|application)\/javascript/i;
    xmlTypeRE = /^(?:text|application)\/xml/i;
    jsonType = 'application/json';
    htmlType = 'text/html';
    blankRE = /^\s*$/;

    ajax = module.exports = function (options) {
      var settings = (0, _util.extend)({}, options || {});
      for (key in ajax.settings) if (settings[key] === undefined) settings[key] = ajax.settings[key];

      ajaxStart(settings);

      if (!settings.crossDomain) {
        settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && !nodejs && !!window.location && RegExp.$2 != window.location.host;
      }

      var dataType = settings.dataType,
          hasPlaceholder = /=\?/.test(settings.url);
      if (dataType == 'jsonp' || hasPlaceholder) {
        if (!hasPlaceholder) settings.url = appendQuery(settings.url, 'callback=?');
        return ajax.JSONP(settings);
      }

      if (!settings.url) settings.url = !nodejs && !!window.location && window.location.toString();
      serializeData(settings);

      var mime = settings.accepts[dataType],
          baseHeaders = {},
          protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : !nodejs && !!window.location && window.location.protocol,
          xhr = ajax.settings.xhr(),
          abortTimeout;

      if (!settings.crossDomain) baseHeaders['X-Requested-With'] = 'XMLHttpRequest';else if (typeof XDomainRequest !== 'undefined') {
        xhr = new XDomainRequest();
        xhr.onload = function () {
          xhr.readyState = 4;
          xhr.status = 200;
          xhr.onreadystatechange();
        };
        xhr.error = function () {
          xhr.readyState = 4;
          xhr.status = 400;
          xhr.onreadystatechange();
        };
      }
      if (mime) {
        baseHeaders['Accept'] = mime;
        if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];
        xhr.overrideMimeType && xhr.overrideMimeType(mime);
      }
      if (settings.contentType || settings.data && settings.type.toUpperCase() != 'GET') baseHeaders['Content-Type'] = settings.contentType || 'application/x-www-form-urlencoded';
      settings.headers = (0, _util.extend)(baseHeaders, settings.headers || {});

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          clearTimeout(abortTimeout);
          var result,
              error = false;
          if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
            dataType = dataType || mimeToDataType(xhr.contentType || xhr.getResponseHeader && xhr.getResponseHeader('content-type'));

            try {
              if (dataType == 'script') (1, eval)(result);else if (dataType == 'xml') result = xhr.responseXML;else if (dataType == 'json') result = blankRE.test(xhr.responseText) ? null : JSON.parse(xhr.responseText);else if (dataType === 'arraybuffer') result = getArrayBufferResponse(xhr);else if (dataType === 'blob') result = getBlobResponse(xhr);else result = xhr.responseText;
            } catch (e) {
              error = e;
            }

            if (error) ajaxError(error, 'parsererror', xhr, settings);else ajaxSuccess(result, xhr, settings);
          } else {
            ajaxError(null, 'error', xhr, settings);
          }
        }
      };

      var async = 'async' in settings ? settings.async : true;
      xhr.open(settings.type, settings.url, async);

      if (dataType == 'arraybuffer' || dataType == 'blob') {

        // 因为IE的问题，只能将设置responseType的操作放在xhr.open之后
        // https://connect.microsoft.com/IE/feedback/details/795580/ie11-xmlhttprequest-incorrectly-throws-invalidstateerror-when-setting-responsetype
        // 判断是否支持设置responseType
        var supported = typeof xhr.responseType === 'string';

        // 支持二进制请求直接设置responseType
        if (supported) {

          // 响应类型默认arraybuffer，可以设置为blob（响应回来使用response取得数据）
          xhr.responseType = options.dataType;
        } else {

          // 不支持则尝试使用用户自定义的字符集方式（响应回来使用responseText取得数据）
          xhr.overrideMimeType ? xhr.overrideMimeType('text/plain; charset=x-user-defined') : xhr.setRequestHeader('Accept-Charset', 'x-user-defined');
        }
      }

      for (name in settings.headers) xhr.setRequestHeader(name, settings.headers[name]);

      if (ajaxBeforeSend(xhr, settings) === false) {
        xhr.abort();
        return false;
      }

      if (settings.timeout > 0) abortTimeout = setTimeout(function () {
        xhr.onreadystatechange = empty;
        xhr.abort();
        ajaxError(null, 'timeout', xhr, settings);
      }, settings.timeout);

      // avoid sending empty string (#319)
      xhr.send(settings.data ? settings.data : null);
      return xhr;
    };

    // Number of active Ajax requests
    ajax.active = 0;

    ajax.JSONP = function (options) {
      if (!('type' in options)) return ajax(options);

      var callbackName = 'jsonp' + ++jsonpID,
          script = document.createElement('script'),
          abort = function abort() {
        //todo: remove script
        //$(script).remove()
        if (!nodejs && callbackName in window) window[callbackName] = empty;
        ajaxComplete('abort', xhr, options);
      },
          xhr = { abort: abort },
          abortTimeout,
          head = document.getElementsByTagName('head')[0] || document.documentElement;

      if (options.error) script.onerror = function () {
        xhr.abort();
        options.error();
      };

      if (!nodejs) window[callbackName] = function (data) {
        clearTimeout(abortTimeout);
        //todo: remove script
        //$(script).remove()
        delete window[callbackName];
        ajaxSuccess(data, xhr, options);
      };

      serializeData(options);
      script.src = options.url.replace(/=\?/, '=' + callbackName);

      // Use insertBefore instead of appendChild to circumvent an IE6 bug.
      // This arises when a base node is used (see jQuery bugs #2709 and #4378).
      head.insertBefore(script, head.firstChild);

      if (options.timeout > 0) abortTimeout = setTimeout(function () {
        xhr.abort();
        ajaxComplete('timeout', xhr, options);
      }, options.timeout);

      return xhr;
    };

    ajax.settings = {
      // Default type of request
      type: 'GET',
      // Callback that is executed before request
      beforeSend: empty,
      // Callback that is executed if the request succeeds
      success: empty,
      // Callback that is executed the the server drops error
      error: empty,
      // Callback that is executed on request complete (both: error and success)
      complete: empty,
      // The context for the callbacks
      context: null,
      // Whether to trigger "global" Ajax events
      global: true,
      // Transport
      xhr: function xhr() {
        return new _XMLHttpRequest2['default']();
      },
      // MIME types mapping
      accepts: {
        script: 'text/javascript, application/javascript',
        json: jsonType,
        xml: 'application/xml, text/xml',
        html: htmlType,
        text: 'text/plain'
      },
      // Whether the request is to another domain
      crossDomain: false,
      // Default timeout
      timeout: 0
    };

    ajax.get = function (url, success) {
      return ajax({ url: url, success: success });
    };

    ajax.post = function (url, data, success, dataType) {
      if (typeof data === 'function') dataType = dataType || success, success = data, data = null;
      return ajax({ type: 'POST', url: url, data: data, success: success, dataType: dataType });
    };

    ajax.getJSON = function (url, success) {
      return ajax({ url: url, success: success, dataType: 'json' });
    };
  })();
}
},{"./XMLHttpRequest":21,"./util":24}],23:[function(require,module,exports){
/**
 * 解析url，根据url中指定的协议创建对应的连接对象
 * @param url
 * @param options
 * @returns {*}
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

function connection(url, options, handler) {
  if (typeof url !== 'string') {
    throw new Error('url is incorrect');
  }

  var _w$exec = /^((\w+):\/\/)?(.*)/.exec(url);

  var _w$exec2 = _slicedToArray(_w$exec, 4);

  var _w$exec2$2 = _w$exec2[2];
  var protocol = _w$exec2$2 === undefined ? 'http' : _w$exec2$2;
  var urlWithoutProtocol = _w$exec2[3];

  var func = connection[protocol];
  if (!func) {
    throw new Error('protocol "' + protocol + '" no support');
  }
  return func(urlWithoutProtocol, options, handler);
}

exports['default'] = connection;
module.exports = exports['default'];
},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.serialize = serialize;
exports.param = param;
exports.extend = extend;
var escape = encodeURIComponent;

function serialize(params, obj, traditional, scope) {
  var array = obj instanceof Array;
  for (var key in obj) {
    var value = obj[key];

    if (scope) key = traditional ? scope : scope + '[' + (array ? '' : key) + ']';
    // handle data in serializeArray() format
    if (!scope && array) params.add(value.name, value.value);else if (traditional ? value instanceof Array : typeof value === 'object') serialize(params, value, traditional, key);else params.add(key, value);
  }
}

function param(obj, traditional) {
  var params = [];
  params.add = function (k, v) {
    this.push(escape(k) + '=' + escape(v));
  };
  serialize(params, obj, traditional);
  return params.join('&').replace('%20', '+');
}

function extend(target) {
  var slice = Array.prototype.slice;
  slice.call(arguments, 1).forEach(function (source) {
    for (var key in source) if (source[key] !== undefined) target[key] = source[key];
  });
  return target;
}

// recurse into nested objects
},{}],25:[function(require,module,exports){
/**
 * yfloat格式数据的解析模块
 * Created by jiagang on 2015/10/15.
 */

var TWO_PWR_16_DBL = 1 << 16;
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

/**
 * 得到value中高32位数值
 * @param {number} value
 * @returns {number}
 */
function getHighBits(value) {
  return (value / TWO_PWR_32_DBL) | 0;
}

/**
 * 得到value中低32位数值
 * @param {number} value
 * @returns {number}
 */
function getLowBits(value) {
  return (value % TWO_PWR_32_DBL) | 0;
}

/**
 * 高位和低位合并为一个数字
 * @param {number} low
 * @param {number} high
 * @returns {number}
 */
function toNumber(low, high) {
  return ((high >>> 0) * TWO_PWR_32_DBL) + (low >>> 0);
}

/**
 * 解析yfloat类型数字，返回数值和精度的数组
 * @param {number|Long} value
 * @returns {Array}
 */
function unmakeValue(value) {
  var high, low;

  // 数字类型
  if (typeof value === 'number' && value > 0) {
    high = getHighBits(value);
    low = getLowBits(value);
  }

  // Long型
  else if (value && typeof value['getHighBits'] === 'function' && typeof value['getLowBits'] === 'function') {
    high = value.getHighBits();
    low = value.getLowBits();
  }

  // 其它类型不支持
  else {
    console.warn('unmakeValue: invalid value');
    return [NaN, 0];
  }

  var b = (low >> 16) & 0xFF,
    l = b & 0x0F,
    h = (b >> 4) & 0x0F,
    bx = toNumber((high << 24) + ((low >>> 24) << 16) + (low & 0xFFFF), high >> 8),
    dq = [2, 1, null, 3, 4, 5, 6, 7, 8, 9, 0][l],
    temp = dq != null ? bx / (Math.pow(10, dq) || 1) : NaN;

  if (h != 0) {
    temp = -temp;
  }
  return [temp, dq];
}

/**
 * 解析yfloat类型数字，返回数字类型
 * @param {number|Long} value
 * @returns {number}
 */
function unmakeValueToNumber(value) {
  return unmakeValue(value)[0];
}

/**
 * 解析yfloat类型数字，返回根据精度格式化后的字符串
 * @param {number|Long} value
 * @returns {string}
 */
function unmakeValueToString (value) {
  var result = unmakeValue(value),
    resultValue = result[0],
    dq = result[1];
  return dq !== null ? resultValue.toFixed(dq) : resultValue.toString();
}

module.exports = {
  unmakeValue: unmakeValue,
  unmakeValueToNumber: unmakeValueToNumber,
  unmakeValueToString: unmakeValueToString
};

},{}],26:[function(require,module,exports){
'use strict';

var asap = require('asap/raw');

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('not a function');
  }
  this._37 = 0;
  this._12 = null;
  this._59 = [];
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._99 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
};
function handle(self, deferred) {
  while (self._37 === 3) {
    self = self._12;
  }
  if (self._37 === 0) {
    self._59.push(deferred);
    return;
  }
  asap(function() {
    var cb = self._37 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._37 === 1) {
        resolve(deferred.promise, self._12);
      } else {
        reject(deferred.promise, self._12);
      }
      return;
    }
    var ret = tryCallOne(cb, self._12);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._37 = 3;
      self._12 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._37 = 1;
  self._12 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._37 = 2;
  self._12 = newValue;
  finale(self);
}
function finale(self) {
  for (var i = 0; i < self._59.length; i++) {
    handle(self, self._59[i]);
  }
  self._59 = null;
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  })
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}

},{"asap/raw":29}],27:[function(require,module,exports){
'use strict';

//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = require('./core.js');

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._99);
  p._37 = 1;
  p._12 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._37 === 3) {
            val = val._12;
          }
          if (val._37 === 1) return res(i, val._12);
          if (val._37 === 2) reject(val._12);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

},{"./core.js":26}],28:[function(require,module,exports){
"use strict";

// rawAsap provides everything we need except exception management.
var rawAsap = require("./raw");
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};

},{"./raw":29}],29:[function(require,module,exports){
(function (global){
"use strict";

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
var BrowserMutationObserver = global.MutationObserver || global.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],30:[function(require,module,exports){
// should work in any browser without browserify

if (typeof Promise.prototype.done !== 'function') {
  Promise.prototype.done = function (onFulfilled, onRejected) {
    var self = arguments.length ? this.then.apply(this, arguments) : this
    self.then(null, function (err) {
      setTimeout(function () {
        throw err
      }, 0)
    })
  }
}
},{}],31:[function(require,module,exports){
// not "use strict" so we can declare global "Promise"

var asap = require('asap');

if (typeof Promise === 'undefined') {
  Promise = require('./lib/core.js')
  require('./lib/es6-extensions.js')
}

require('./polyfill-done.js');

},{"./lib/core.js":26,"./lib/es6-extensions.js":27,"./polyfill-done.js":30,"asap":28}],32:[function(require,module,exports){
(function (process,Buffer){
// The MIT License (MIT)
//
// Copyright (c) 2016 Zhipeng Jia
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

'use strict'

function isNode () {
  if (typeof process === 'object') {
    if (typeof process.versions === 'object') {
      if (typeof process.versions.node !== 'undefined') {
        return true
      }
    }
  }
  return false
}

var is_node = isNode()

function isUint8Array (object) {
  return object instanceof Uint8Array && (!is_node || !Buffer.isBuffer(object))
}

function isArrayBuffer (object) {
  return object instanceof ArrayBuffer
}

function isBuffer (object) {
  if (!is_node) {
    return false
  }
  return Buffer.isBuffer(object)
}

var SnappyDecompressor = require('./snappy_decompressor').SnappyDecompressor
var SnappyCompressor = require('./snappy_compressor').SnappyCompressor

var TYPE_ERROR_MSG = 'Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array'

function uncompress (compressed) {
  if (!isUint8Array(compressed) && !isArrayBuffer(compressed) && !isBuffer(compressed)) {
    throw new TypeError(TYPE_ERROR_MSG)
  }
  var uint8_mode = false
  var array_buffer_mode = false
  if (isUint8Array(compressed)) {
    uint8_mode = true
  } else if (isArrayBuffer(compressed)) {
    array_buffer_mode = true
    compressed = new Uint8Array(compressed)
  }
  var decompressor = new SnappyDecompressor(compressed)
  var length = decompressor.readUncompressedLength()
  if (length === -1) {
    throw new Error('Invalid Snappy bitstream')
  }
  var uncompressed, uncompressed_view
  if (uint8_mode) {
    uncompressed = new Uint8Array(length)
    if (!decompressor.uncompressToBuffer(uncompressed)) {
      throw new Error('Invalid Snappy bitstream')
    }
  } else if (array_buffer_mode) {
    uncompressed = new ArrayBuffer(length)
    uncompressed_view = new Uint8Array(uncompressed)
    if (!decompressor.uncompressToBuffer(uncompressed_view)) {
      throw new Error('Invalid Snappy bitstream')
    }
  } else {
    uncompressed = new Buffer(length)
    if (!decompressor.uncompressToBuffer(uncompressed)) {
      throw new Error('Invalid Snappy bitstream')
    }
  }
  return uncompressed
}

function compress (uncompressed) {
  if (!isUint8Array(uncompressed) && !isArrayBuffer(uncompressed) && !isBuffer(uncompressed)) {
    throw new TypeError(TYPE_ERROR_MSG)
  }
  var uint8_mode = false
  var array_buffer_mode = false
  if (isUint8Array(compressed)) {
    uint8_mode = true
  } else if (isArrayBuffer(uncompressed)) {
    array_buffer_mode = true
    uncompressed = new Uint8Array(uncompressed)
  }
  var compressor = new SnappyCompressor(uncompressed)
  var max_length = compressor.maxCompressedLength()
  var compressed, compressed_view
  var length
  if (uint8_mode) {
    compressed = new Uint8Array(max_length)
    length = compressor.compressToBuffer(compressed)
  } else if (array_buffer_mode) {
    compressed = new ArrayBuffer(max_length)
    compressed_view = new Uint8Array(compressed)
    length = compressor.compressToBuffer(compressed_view)
  } else {
    compressed = new Buffer(max_length)
    length = compressor.compressToBuffer(compressed)
  }
  return compressed.slice(0, length)
}

exports.uncompress = uncompress
exports.compress = compress

}).call(this,require('_process'),require("buffer").Buffer)
},{"./snappy_compressor":33,"./snappy_decompressor":34,"_process":15,"buffer":14}],33:[function(require,module,exports){
// The MIT License (MIT)
//
// Copyright (c) 2016 Zhipeng Jia
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

'use strict'

var BLOCK_LOG = 16
var BLOCK_SIZE = 1 << BLOCK_LOG

var MAX_HASH_TABLE_BITS = 14
var global_hash_tables = new Array(MAX_HASH_TABLE_BITS + 1)

function hashFunc (key, hash_func_shift) {
  return (key * 0x1e35a7bd) >>> hash_func_shift
}

function load32 (array, pos) {
  return array[pos] + (array[pos + 1] << 8) + (array[pos + 2] << 16) + (array[pos + 3] << 24)
}

function equals32 (array, pos1, pos2) {
  return array[pos1] === array[pos2] &&
         array[pos1 + 1] === array[pos2 + 1] &&
         array[pos1 + 2] === array[pos2 + 2] &&
         array[pos1 + 3] === array[pos2 + 3]
}

function copyBytes (from_array, from_pos, to_array, to_pos, length) {
  var i
  for (i = 0; i < length; i++) {
    to_array[to_pos + i] = from_array[from_pos + i]
  }
}

function emitLiteral (input, ip, len, output, op) {
  if (len <= 60) {
    output[op] = (len - 1) << 2
    op += 1
  } else if (len < 256) {
    output[op] = 60 << 2
    output[op + 1] = len - 1
    op += 2
  } else {
    output[op] = 61 << 2
    output[op + 1] = (len - 1) & 0xff
    output[op + 2] = (len - 1) >>> 8
    op += 3
  }
  copyBytes(input, ip, output, op, len)
  return op + len
}

function emitCopyLessThan64 (output, op, offset, len) {
  if (len < 12 && offset < 2048) {
    output[op] = 1 + ((len - 4) << 2) + ((offset >>> 8) << 5)
    output[op + 1] = offset & 0xff
    return op + 2
  } else {
    output[op] = 2 + ((len - 1) << 2)
    output[op + 1] = offset & 0xff
    output[op + 2] = offset >>> 8
    return op + 3
  }
}

function emitCopy (output, op, offset, len) {
  while (len >= 68) {
    op = emitCopyLessThan64(output, op, offset, 64)
    len -= 64
  }
  if (len > 64) {
    op = emitCopyLessThan64(output, op, offset, 60)
    len -= 60
  }
  return emitCopyLessThan64(output, op, offset, len)
}

function compressFragment (input, ip, input_size, output, op) {
  var hash_table_bits = 1
  while ((1 << hash_table_bits) <= input_size &&
         hash_table_bits <= MAX_HASH_TABLE_BITS) {
    hash_table_bits += 1
  }
  hash_table_bits -= 1
  var hash_func_shift = 32 - hash_table_bits

  if (typeof global_hash_tables[hash_table_bits] === 'undefined') {
    global_hash_tables[hash_table_bits] = new Uint16Array(1 << hash_table_bits)
  }
  var hash_table = global_hash_tables[hash_table_bits]
  var i
  for (i = 0; i < hash_table.length; i++) {
    hash_table[i] = 0
  }

  var ip_end = ip + input_size
  var ip_limit
  var base_ip = ip
  var next_emit = ip

  var hash, next_hash
  var next_ip, candidate, skip
  var bytes_between_hash_lookups
  var base, matched, offset
  var prev_hash, cur_hash
  var flag = true

  var INPUT_MARGIN = 15
  if (input_size >= INPUT_MARGIN) {
    ip_limit = ip_end - INPUT_MARGIN

    ip += 1
    next_hash = hashFunc(load32(input, ip), hash_func_shift)

    while (flag) {
      skip = 32
      next_ip = ip
      do {
        ip = next_ip
        hash = next_hash
        bytes_between_hash_lookups = skip >>> 5
        skip += 1
        next_ip = ip + bytes_between_hash_lookups
        if (ip > ip_limit) {
          flag = false
          break
        }
        next_hash = hashFunc(load32(input, next_ip), hash_func_shift)
        candidate = base_ip + hash_table[hash]
        hash_table[hash] = ip - base_ip
      } while (!equals32(input, ip, candidate))

      if (!flag) {
        break
      }

      op = emitLiteral(input, next_emit, ip - next_emit, output, op)

      do {
        base = ip
        matched = 4
        while (ip + matched < ip_end && input[ip + matched] === input[candidate + matched]) {
          matched += 1
        }
        ip += matched
        offset = base - candidate
        op = emitCopy(output, op, offset, matched)

        next_emit = ip
        if (ip >= ip_limit) {
          flag = false
          break
        }
        prev_hash = hashFunc(load32(input, ip - 1), hash_func_shift)
        hash_table[prev_hash] = ip - 1 - base_ip
        cur_hash = hashFunc(load32(input, ip), hash_func_shift)
        candidate = base_ip + hash_table[cur_hash]
        hash_table[cur_hash] = ip - base_ip
      } while (equals32(input, ip, candidate))

      if (!flag) {
        break
      }

      ip += 1
      next_hash = hashFunc(load32(input, ip), hash_func_shift)
    }
  }

  if (next_emit < ip_end) {
    op = emitLiteral(input, next_emit, ip_end - next_emit, output, op)
  }

  return op
}

function putVarint (value, output, op) {
  do {
    output[op] = value & 0x7f
    value = value >>> 7
    if (value > 0) {
      output[op] += 0x80
    }
    op += 1
  } while (value > 0)
  return op
}

function SnappyCompressor (uncompressed) {
  this.array = uncompressed
}

SnappyCompressor.prototype.maxCompressedLength = function () {
  var source_len = this.array.length
  return 32 + source_len + Math.floor(source_len / 6)
}

SnappyCompressor.prototype.compressToBuffer = function (out_buffer) {
  var array = this.array
  var length = array.length
  var pos = 0
  var out_pos = 0

  var fragment_size

  out_pos = putVarint(length, out_buffer, out_pos)
  while (pos < length) {
    fragment_size = Math.min(length - pos, BLOCK_SIZE)
    out_pos = compressFragment(array, pos, fragment_size, out_buffer, out_pos)
    pos += fragment_size
  }

  return out_pos
}

exports.SnappyCompressor = SnappyCompressor

},{}],34:[function(require,module,exports){
// The MIT License (MIT)
//
// Copyright (c) 2016 Zhipeng Jia
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

'use strict'

var WORD_MASK = [0, 0xff, 0xffff, 0xffffff, 0xffffffff]

function copyBytes (from_array, from_pos, to_array, to_pos, length) {
  var i
  for (i = 0; i < length; i++) {
    to_array[to_pos + i] = from_array[from_pos + i]
  }
}

function selfCopyBytes (array, pos, offset, length) {
  var i
  for (i = 0; i < length; i++) {
    array[pos + i] = array[pos - offset + i]
  }
}

function SnappyDecompressor (compressed) {
  this.array = compressed
  this.pos = 0
}

SnappyDecompressor.prototype.readUncompressedLength = function () {
  var result = 0
  var shift = 0
  var c, val
  while (shift < 32 && this.pos < this.array.length) {
    c = this.array[this.pos]
    this.pos += 1
    val = c & 0x7f
    if (((val << shift) >>> shift) !== val) {
      return -1
    }
    result |= val << shift
    if (c < 128) {
      return result
    }
    shift += 7
  }
  return -1
}

SnappyDecompressor.prototype.uncompressToBuffer = function (out_buffer) {
  var array = this.array
  var array_length = array.length
  var pos = this.pos
  var out_pos = 0

  var c, len, small_len
  var offset

  while (pos < array.length) {
    c = array[pos]
    pos += 1
    if ((c & 0x3) === 0) {
      // Literal
      len = (c >>> 2) + 1
      if (len > 60) {
        if (pos + 3 >= array_length) {
          return false
        }
        small_len = len - 60
        len = array[pos] + (array[pos + 1] << 8) + (array[pos + 2] << 16) + (array[pos + 3] << 24)
        len = (len & WORD_MASK[small_len]) + 1
        pos += small_len
      }
      if (pos + len > array_length) {
        return false
      }
      copyBytes(array, pos, out_buffer, out_pos, len)
      pos += len
      out_pos += len
    } else {
      switch (c & 0x3) {
        case 1:
          len = ((c >>> 2) & 0x7) + 4
          offset = array[pos] + ((c >>> 5) << 8)
          pos += 1
          break
        case 2:
          if (pos + 1 >= array_length) {
            return false
          }
          len = (c >>> 2) + 1
          offset = array[pos] + (array[pos + 1] << 8)
          pos += 2
          break
        case 3:
          if (pos + 3 >= array_length) {
            return false
          }
          len = (c >>> 2) + 1
          offset = array[pos] + (array[pos + 1] << 8) + (array[pos + 2] << 16) + (array[pos + 3] << 24)
          pos += 4
          break
        default:
          break
      }
      if (offset === 0 || offset > out_pos) {
        return false
      }
      selfCopyBytes(out_buffer, out_pos, offset, len)
      out_pos += len
    }
  }
  return true
}

exports.SnappyDecompressor = SnappyDecompressor

},{}]},{},[1])(1)
});