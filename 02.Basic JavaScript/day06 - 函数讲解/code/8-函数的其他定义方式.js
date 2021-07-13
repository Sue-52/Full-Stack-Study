// 1. 函数声明的方式
// function 函数名(形参,形参...) {
//   函数体

//   return 表达式
// }

// // 调用
// 函数名(实参,实参...)


// 2.函数表达式

// 格式
// var 变量名 = function (形参,形参...) {
// //   函数体

// //   return 表达式
// }
// // 调用:
// 变量名(实参,实参...)

// 需求: 求任意两个数之间的和
// var getSum = function (start, end) {
//    var sum = 0;
//    for (var i = start; i <= end; i++) {
//      sum += i;
//    }

//    return sum;
// }
// var result = getSum(1,100);
// console.log(result);


// 1.定义一个函数,打印任意一句你喜欢的话;
// var say = function (a) {
//   console.log(a)
// }

// say("你好");
// 2.定义一个函数,求任意两个数的和;
// var sum = function (num1, num2) {
//   var result = num1 + num2;
//   return result;
// }

// console.log(sum(1,2));

// 3.定义一个函数,求任意两个数字的最大值
// var maxValue = function (a, b) {
//   var result =  a > b ? a : b;
//   return result;
// }

// console.log(maxValue(2,6));
// 4.定义一个函数，求任意数之间的偶数和
// var evenSum = function (start, end) {
//   var sum = 0;

//   for (var i = start; i <= end; i++) {
//     if (i % 2 == 0) {
//       sum = sum + i;
//     }
//   }

//   return sum;
// }

// console.log(evenSum(1,50));
// 5.定义一个函数,求任何一个数组中元素的和
// var arraySum = function (arr) {
//   var sum = 0;
//   for (var i = 0; i< arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(arraySum([1,2,3]));






// 自调用函数

// 格式
// (function (形参, 形参) {
//   函数体
// })(实参,实参)


// 计算1 + 2 + 3;

// (function (a, b, c) {
//   console.log(a + b + c);
// })(1, 2, 3);

// 1.自调用函数只调用1次
// 2.自调用函数 不能用return