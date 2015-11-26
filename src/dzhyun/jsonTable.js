/**
 * jsonTable的格式化转换模块
 * Created by jiagang on 2015/11/19.
 */

let convertToJsonArray = function (input) {
  if (!input || !input.head) return input;

  let head = input.head,
    data = input.data;

  return data.map((row) => {
    let rowObject = {};
    row.forEach((cell, columnIndex) => {
      rowObject[head[columnIndex]] = convertToJsonArray(cell);
    });
    return rowObject;
  });
};
export default {convertToJsonArray};