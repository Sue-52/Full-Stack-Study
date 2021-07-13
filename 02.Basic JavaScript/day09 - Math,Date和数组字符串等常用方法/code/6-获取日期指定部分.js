// 
// var date = new Date();
// 日期对象中 
// getFullYear() 获取现在是哪一年
// console.log(date.getFullYear());


// 如何打出来月份  getMonth() 是从0开始算的 所以一般获取来 要+1
// console.log(date.getMonth()+1);


// 如何获取天数
// getDay() 获取一周中的第几天
// getDate() 获取一月中的第几天
// console.log(date.getDate());

// 如何获取小时
// console.log(date.getHours());

// 如何获取分钟
// console.log(date.getMinutes());

// 如何获取秒数
// console.log(date.getSeconds());


// 写一个函数，格式化日期对象，返回yyyy/MM/dd HH:mm:ss的形式
// 获取今天的日期 把日期 变成yyyy/MM/dd HH:mm:ss

// 1.定义一个函数
var format = function () {
  // 2.获取当前的时间
  var date = new Date();
  // 3.获取当前时间的 年
  var year = date.getFullYear();
  // 4.获取当前时间的 月
  var month = date.getMonth() + 1;
  // 5.获取当前时间的 日
  var day = date.getDate();
  // 6.获取当前时间的 时
  var h = date.getHours();
  // 7.获取当前时间的 分
  var min = date.getMinutes();
  // 8.获取当前时间的 秒
  var s = date.getSeconds();
  // 9.判断一下 月 日 时 分  秒 是不是两位数 如果不是 在前面+'0' 
  month = month > 9 ? month : '0' + month;
  day = day > 9 ? day : '0' + day;
  h = h > 9 ? h : '0' + h;
  min = min > 9 ? min : '0' + min;
  s = s > 9 ? s : '0' + s;

  // 10.拼接输出
  return year + "/" + month + '/' + day + ' ' + h + ":" + min + ":" + s;

}

console.log(format());
