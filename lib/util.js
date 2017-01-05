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