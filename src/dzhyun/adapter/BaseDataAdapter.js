/**
 * 数据转换器，负责将各种响应数据类型转换为用于DataStore统一存储用格式
 */
export default class BaseDataAdapter {

  /**
   * 将输入数据转换为同一格式的输出
   * @param input
   * @return {Object.<key: String, value: Object|Array>}
   */
  adapt() {
    return;
  }
}
