// 函数要先定义后使用


// 1.定义一个函数,打印一句话"我的青春在传智";
// function printWord() {
//   console.log("我的青春在传智");
// }

// printWord();

// 2.定义一个函数,求两个数的和(4 和 9)
// function add() {
//   var a = 4;
//   var b = 9;
//   var c = a + b;
//   console.log(c);
// }

// add();

// 3.定义一个函数,求两个数字的最大值(4 和 9)
// function maxValue() {
//   var a = 4;
//   var b = 9;

//   var result =  a > b ? a : b;
//   console.log("最大值为" + result);
// }

// maxValue();

// 4.定义一个函数，求1-100之间的偶数和
// function evenSum() {
//   var sum = 0;
//   for (var i = 1; i <= 100; i++) {
//    if (i % 2 == 0) {
//     sum += i;
//    }
//   }

//   console.log(sum);
// }

// evenSum();

// 5.定义一个函数,求数组的和 [4,9,10,20,3,5,1]

// function arraySum() {
//   var arr = [4,9,10,20,3,5,1];
//   var  sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   console.log(sum);
// }

// arraySum();


// 总结一下:

// function 函数名() {
//   函数体
// }

// 调用
// 函数名();


// 1.声明函数
// function 函数名() {
//   函数体
// }

// 2.调用
// 函数名();

// 3.函数名
// 函数名是自定义的,要见名知意  要符合小驼峰命名法

// 4.函数体
// 所谓的函数体 就是实现某一个功能的代码,不要把多个功能放在一个函数中,应该一个功能对应一个函数

// 5.调用
// 可以调用任意次

// 6.如果写好多个函数 函数名不能重复 如果重复 下面的函数会把上面的函数 覆盖掉

// function f1() {
//   console.log("f1");
// }

// function f1() {
//   console.log("我才是f1");
// }

// f1();