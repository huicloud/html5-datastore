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