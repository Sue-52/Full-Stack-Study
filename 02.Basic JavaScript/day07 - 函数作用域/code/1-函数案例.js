// 求2个数中的最大值
// var maxValue = function (a, b) {
//   var result =  a > b ?  a : b;
//   return result;
// }

// console.log(maxValue(4, 5));
// 求3个数中的最大值
// 1.定义一个函数 参数 3个 a  b  c
// var maxValue = function (a, b, c) {
//   // 2.判断一下 如果 a > b  && a >c   输出最大值a
//   if (a > b && a > c) {
//     // 5.输出结果
//     return a;
//   } else if (b > a && b > c) {
//     // 3.判断一下 如果 b >  a && b >c   输出最大值b
//     // 5.输出结果
//     return b;
//   } else if (c > a && c > b) {
//     // 4.判断一下 如果  c > a && c > b  输出最大值 c
//     // 5.输出结果
//     return c;
//   }
// }

// console.log(maxValue(1,2,3));


// 求两个数字的差
// var cha = function (a, b) {
//   var result = a - b;
//   return result;
// }

// console.log(cha(1,3));

// 求一个数组中的最大值
// 1.定义一个函数,传入一个数组
// var maxValue = function (arr) {
//   // 2.假设数组中的第0个数最大
//   var max = arr[0];
//   // 3.遍历数组
//   for (var i = 0; i < arr.length; i++) {
//     // 4.判断一下 如果 数组中的某一个数 比 最大值都要大 
//     if (arr[i] > max) {
//       // 5.那就把它赋值给最大值
//       max = arr[i];
//     }

//     return max;
//   }

//   // 6.输出结果
// }


// 求一个数组中的最小值

// 求一个数组中的和

// 判断一个数是否是素数(质数),只能被1和自身整除，质数是从2开始
// 用这个数字和这个数字前面所有的数字整除一次(没有1的，没有自身的)
// 1.定义一个函数,传入一个参数 参数是那个数字
// var isPrime = function (num) {
// // 2.遍历 该数以前的所有数字 从 2开始
//   for (var i = 2; i < num; i++) {
//   // 3.如果整除 它前面的任意一个数字 代表它不是质数
//     if (num % i == 0) {
//       return false;
//     }
//   }

// // 4.如果不整除 就是质数
//   return true;
// // 5.输出
// }

// console.log(isPrime(37));




// 通过函数实现数组反转
// // 1.定义一个数组
// var arr = [1, 2, 3, 4];
// // 2.遍历数组
// for (var i = 0; i < arr.length / 2; i++) {
// // 3.交换
// // 3.1 先定义一个空变量,让这个空变量的值为1(i = 0)
//   var temp = arr[i];
// // 3.2 让1的位置为4(arr.length -1 -i)
//   arr[i] = arr[arr.length -1 -i];
// // 3.3 让4的位置为空变量
//   arr[arr.length -1 -i] = temp;
// }

// console.log(arr);


// var reverse = function (arr) {
//   for (var i = 0; i < arr.length / 2; i++) {
//     // 3.交换
//     // 3.1 先定义一个空变量,让这个空变量的值为1(i = 0)
//       var temp = arr[i];
//     // 3.2 让1的位置为4(arr.length -1 -i)
//       arr[i] = arr[arr.length -1 -i];
//     // 3.3 让4的位置为空变量
//       arr[arr.length -1 -i] = temp;
//     }
//     return arr;
// }

// console.log(reverse([3,6,1,4]));


// 通过函数实现冒泡排序
// var arr = [5, 4, 3, 2, 1];
// var arr = [15, 24, 43, 12, 1];
// for (var i = 0; i < arr.length -1; i++) {
//    for (var j = 0; j < arr.length -1 -i; j++) {
//      if (arr[j] > arr[j+1]) {
//        var temp = arr[j];
//        arr[j] = arr[j + 1];
//        arr[j + 1] = temp;
//      }
//    }
// }


// console.log(arr);

// var pop = function (arr) {
//   for (var i = 0; i < arr.length -1; i++) {
//     for (var j = 0; j < arr.length -1 -i; j++) {
//       if (arr[j] > arr[j+1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//  }
//  return arr;
// }

// console.log(pop([5,1,9,2,3,6]));





// 求一个数字的阶乘
var jc = function (num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// console.log(jc(1));
// console.log(jc(2));
// console.log(jc(3));
// console.log(jc(4));

// 求一个数字的阶乘和
// 6的 应该
// 6! + 5! +4! + 3! + 2! + 1!
// var sum = function (num) {
//   var he = 0;
//   for (var i = 1; i <= num; i++) {
//     he += jc(num);
//   }

//   return he;
// }

// console.log(sum(4));
// 求斐波那契数列


// 输入,年月日,获取这个日期是这一年的第多少天
// 1.定义一个函数，接受三个参数 分别为年 月 日
var getDays = function (year, month, day) {
  // 先把day先存起来
  var days = day;
  // 2.如果我输入的是1月 写几号就是第多少天
  if (month == 1) {
    return days;
  }
  // 3.先写出来 每个月有多少天, for循环 当 我写 4月  应该是 month-1个月的所有天数加起来
  var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (var i = 0; i < month - 1; i++) {
    days += months[i]
  }
  // 4.判断是不是闰年 月份 是不是大于 2月 如果两个条件同时满足
  if ((year % 4 == 0 && year % 100 != 0 || year % 400 == 0) && month > 2) {
    days++;
  }
  // 5. 返回天数
  return days;
}

console.log(getDays(2018,3,17));

