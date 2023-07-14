/**
 * 输入框校验
 * @param {String} model 值
 * @param {String} type 校验类型
 * type:
 *  ZEN   表示中英数
 *  EN    表示英数
 *  EN*   表示英数特殊字符
 *  EN_-  表示英数下划线，杠
 *  END   表示英数点
 *  ND    表示数点
 *  N     表示数
 *  EMAIL 表示邮箱
 */
const ruleFormReplace = (model, type) => {
  if (type == 'ZEN') {
    // 非中英数就替换为空
    return model.replace(/[^\u4E00-\u9FA5a-zA-Z\d]/g, '');
  }
  if (type == 'EN') {
    // 非英数就替换为空
    return model.replace(/[^a-zA-Z\d]/g, '');
  }
  if (type == 'EN*') {
    return model.replace(/[^a-zA-Z\d`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g, '');
  }
  if (type == 'EN_-') {
    // 非英数下划线，杠就替换为空
    return model.replace(/[^a-zA-Z\d_-]/g, '');
  }
  if (type == 'END') {
    // 非英数点就替换为空
    return model.replace(/[^.a-zA-Z\d]/g, '');
  }
  if (type == 'ND') {
    // 非数点就替换为空
    return model.replace(/[^.\d]/g, '');
  }
  if (type == 'N') {
    // 非数字就替换为空
    return model.replace(/[^\d]/g, '');
  }
  // 匹配邮箱
  return model.replace(/[^\u4E00-\u9FA5a-zA-Z\d@_.-]/g, '');
};
export default ruleFormReplace;
