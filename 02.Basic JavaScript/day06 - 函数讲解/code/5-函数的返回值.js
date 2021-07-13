// var fac = 1;
// for (var i = 1; i <=4; i++) {
//   fac = fac * i;
// }
// console.log(fac);

// 24 + 6 + 2 = 32;

// function jc(num) {
//   var fac = 1;
//   for (var i = 1; i <= num; i++) {
//     fac = fac * i;
//   }
//   console.log(fac);
// }

// // jc(4) + 
// // jc(3);
// // jc(2);


// 函数的返回值: 就是函数进行运算的最终结果 输出出来


// 格式:
// function 函数名(形式参数, 形式参数...) {
//   函数体
//   return 值
// }

// 调用
//  var 变量 = 函数名(实参,实参,...)

// function jc(num) {
//   var fac = 1;
//   for (var i = 1; i <= num; i++) {
//     fac = fac * i;
//   }
//   // 你想得到谁 你就return谁
//   return fac;
// }
// var result = jc(5);
// console.log(result);


// 函数返回值的作用
// 1. 把函数运算的结果 输出
// 2. 任何语句见到return 直接停止

// function fn1(){
//   console.log(1);
//   return;
//   console.log(2);
// }

// fn1();

// 3. 我们可以return 任何值 也可以不return 根据需要进行判断 如果不return 那么函数的值是undefined

// function fn() {
  
// }


// var a = fn();
// console.log(a); // undefined


// function fn() {
//   var names = "张三";

//   return names;
//   // return 5;

// }


// var a = fn();
// console.log(a); // -1


// 在js中有哪些函数

// 无参无返回值函数
// function fn() {

// }

// // 有参无返回值函数
// function fn1(a,b) {

// }

// // 有参数有返回值函数
// function fn2(a,b) {
//   return a;
// }

// // 无参有返回值函数
// function fn3() {
//   return 0;
// }


// 一个函数中只有一个return 