// arguments的作用是用来接受实参的
// 实参就是 函数调用的小括号中的值

// var sum = function () {
//   // arguments是伪数组 就是又length且能被遍历
//   // console.log(arguments);
//   var result = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }

//   console.log(result);
// }

// sum(1,2,6,4,5);

// arguments只能在函数内部
// arguments是一个伪数组 还是对象
// var fn = function () {};

// console.log(typeof fn);//  function



// 要算 某一个数的阶乘

// 4的阶乘  4 * 3 * 2 * 1
// var jc = function (num) {
//   var result = 1;
//   for (var i = 1; i <= num; i++) {
//     result*=i;
//   }

//   // console.log(result);
//   return result;
// }

// jc(4);

// var res = jc(4);
// console.log(res);



// 要算 某一个数的阶乘和
// 4的阶乘和  4 的阶乘 + 3的阶乘 + 2 的阶乘 + 1 的阶乘