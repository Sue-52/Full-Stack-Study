// 1.把变量的声明提升到当前作用域的最前面，只会提升声明，不会提升赋值
// 2.把函数的声明提升到当前作用域的最前面，只会提升声明，不会提升调用
// 3.先提升声明变量，再提升function
// function fn() {
//   console.log(1)
// }

// fn();










// 原题
// var a = 25;
// function abc (){
//   alert(a);
//   var a = 10;
// }
// abc();

// 分析 先看函数 再看变量
// var a = 25;
// function abc (){
//   var a; // 声明 只声明 不赋值 那么 就是undefined 所以打出来是 undefined
//   alert(a);
//   // var a = 10;
//   a = 10;// 赋值
// }
// abc();






// 原题
// console.log(a);
// function a() {
//   console.log('aaaaa');
// }
// var a = 1;
// console.log(a);

// 分析
// 1.先把函数提升到作用域的最前面
// function a() {
//   console.log('aaaaa');
// }
// console.log(a); // 函数
// var a = function () {
//   console.log('aaaaa');
// }
// console.log(a);
// var a = 1;
// console.log(a);



// var num = 1;
//    num =2;
