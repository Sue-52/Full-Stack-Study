// 随机生成颜色RGB
// 1.新建一个函数 生成一个随机数 #xxxxxx  0-9 a-f
// var getColor = function () {
// // 2.新建一个颜色字符串 给一个初始值 #
//   var color = "#";
// // 3.把0-9 a-f存入到一个数组中
//   var hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
// // 4.遍历该数组
//   for (var i = 0; i < 6; i++) {
//   // 5.新建一个变量来接受 Math.random()产生的随机数
//     var num = Math.floor(Math.random() * 16);
//   // 6.通过该变量的值(下标) 找到数组中的某一个数字
//     var val = hex[num];
//   // 7.把开始的那个颜色字符串 和产生的数组中的数字 拼接起来
//    color += val;
//   }
//   return color;
// // 8.输出颜色字符串
// }

// 定时器
// setInterval(函数, 时间)
// setInterval(function() {
//  console.log(getColor());
// }, 1000)

// 找到文档中的body标签 让body标签的样式的背景色 为 getColor()随机产生的颜色


// setInterval(function() {
//   document.body.style.backgroundColor = getColor();
// }, 1000)



/**
 *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * 
 */
// 模拟实现max()/min()
// 1.如何实现输入几个实参 就得到几个数呢？ arguments

// 1.定义一个函数
// var max = function () {
// // 2.假设 arguments中的第0个数最大
//  var maxValue = arguments[0];
// // 3.遍历arguments
// for (var i = 0; i < arguments.length; i++) {
// // 4.判断 如果arguments中的第i个数 比最大的都要大 那就把这个数赋值给最大值
//   if (arguments[i] > maxValue) {
//     maxValue = arguments[i];
//   }
// }

// // 5.返回最大值
// return maxValue;
// }


// console.log(max(1,2,4,23,45,2))