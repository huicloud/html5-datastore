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