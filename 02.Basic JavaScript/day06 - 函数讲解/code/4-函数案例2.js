// 1.定义一个函数,打印任意一句你喜欢的话;
function say(words) {
  console.log(words);
}

say("你好");


// 2.定义一个函数,求任意两个数的和;
// function add(a, b) {
//   var c = a + b;
//   console.log(c);
// }

// add(1,3);

// 3.定义一个函数,求任意两个数字的最大值
// function maxValue(a, b) {
//   var result = a > b ? a : b;
//   console.log(result);
// }

// maxValue(3,9);


// 4.定义一个函数，求任意数之间的偶数和
// function evenSum(startNum, endNum) {
//   var sum = 0;
//   for (var i = startNum; i <= endNum; i++) {
//     if ( i % 2 == 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }
// evenSum(1,100);


// 5.定义一个函数,求任何一个数组中元素的和
function arraySum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

// var arr = [4,9,10,20,3,5,1];
arraySum([4,9,10,20,3,5,1]);


// 参数
// 1.形参: 在函数声明小括号中的参数叫形参  相当于变量名
// 2.实参: 在调用的小括号中的参数叫实参    相当于变量值


// 注意:
  // 1.形参可以声明无数个 但是不要var
  // 2.实参的个数要和形参的个数一样
  // 3.实参的顺序必须要和形参的顺序一致


