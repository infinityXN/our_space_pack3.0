


// 格式化当前时间(传天数，' 今天到前多少天 ')
export const timeFormatDate = (day) => {
  let end = new Date();
  let start = new Date();
  start.setTime(start.getTime() - 3600 * 1000 * 24 * day);
  // 年格式化
  let endY = end.getFullYear();
  let startY = start.getFullYear();
  // 月格式化（小于10前面加0）
  let endM = end.getMonth() + 1;
  endM = endM < 10 ? '0' + endM : endM;
  let startM = start.getMonth() + 1;
  startM = startM < 10 ? '0' + startM : startM;
  // 日格式化（小于10前面加0）
  let endD = end.getDate() + 1;
  endD = endD < 10 ? '0' + endD : endD;
  let startD = start.getDate() + 1;
  startD = startD < 10 ? '0' + startD : startD;
  // 返回开始结束时间
  return [
    `${startY}-${startM}-${startD}`,
    `${endY}-${endM}-${endD}`
  ]
}