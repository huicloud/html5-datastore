// 添加依赖Promise
if (typeof Promise === 'undefined') {
  global.Promise = require('promise');
}
module.exports = require('./lib/DataStore');