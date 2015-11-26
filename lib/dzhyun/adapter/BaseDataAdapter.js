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