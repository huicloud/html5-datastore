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