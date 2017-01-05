import connection from 'html5-connection';
import * as util from '../util';
import DzhyunDataParser from './DzhyunDataParser';

/**
 * 云平台Token管理（暂时）
 */
export default class DzhyunTokenManager {

  /**
   * @param {string} address 服务器地址
   * @param {Object=} params 请求token相关的参数 <http://dms.gw.com.cn/pages/viewpage.action?pageId=135299522>
   * @param {number=} refreshSecond 自动刷新token时间秒数，每隔指定时间则自动刷新当前token，设置为0表示不自动刷新token，不设置或者null则表示根据请求到的数据中duration来计算刷新时间
   */
  constructor(address, params, refreshSecond) {
    this.address = address;
    this.params = params;
    this.refreshSecond = refreshSecond;
  }

  _request(service, params) {
    return new Promise((resolve, reject) => {

      // FIXME https方式nodejs认证有问题，暂时先使用http方式
      //connection.https(this.address, {}, {
      connection.http(this.address, {}, {
        response: resolve,
        error: reject
      }).request(service + '?' + util.param(params));
    }).then((data) => {
      return new DzhyunDataParser(service).parse(null, data);
    }).then((data) => {
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
  access(params) {
    return this._request('/token/access', params);
  }

  /**
   * 刷新访问token
   * @deprecated 已废弃，请使用access方法重新请求新的token
   * @param {Object} params <http://dms.gw.com.cn/pages/viewpage.action?pageId=135299522>
   * @returns {Promise.<T>}
   */
  refresh(params) {
    return this._request('/token/refresh', params);
  }

  /**
   * 得到当前token,为空则请求新的token
   */
  getToken() {
    return this._promise || (this._promise = Promise.resolve(this._token || this.access(this.params).then((data) => {
      this._token = data.token;
      this._promise = null;

      // 自动刷新token
      this._refreshToken(data);
      return this._token;
    })));
  }

  /**
   * 自动刷新token处理
   * @private
   */
  _refreshToken(data) {
    //var lastTime = data.create_time || data.refresh_time;
    var duration = parseInt(data.duration);

    var refreshSecond = this.refreshSecond;
    if (refreshSecond !== 0) {
      refreshSecond = refreshSecond || Math.max(duration - 60, 10);
      this._refreshTimeout && clearTimeout(this._refreshTimeout);
      this._refreshTimeout = setTimeout(() => {
        this._refreshTimeout = null;
        this.access(this.params).then((data) => {
          this._token = data.token;

          // 注意，token重设置以后，之前的promise必须移除;
          this._promise = null;

          // 下一次刷新
          this._refreshToken(data);
        }).catch(() => {

          // 刷新失败, 删除token和promise，再下次getToken时会再次重新请求token
          this._token = null;
          this._promise = null;
        });
      }, refreshSecond * 1000);
    }
  }
}

// 将DzhyunTokenManager暴露到全局，便于外部使用（之后应该要从datastore中提出成单独模块）
var _global = global || this;
_global.DzhyunTokenManager = DzhyunTokenManager;