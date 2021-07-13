// arguments对象 可以读取函数运行时的所有的实参
// arguments虽然是对象 但是它有 length属性 它也可以被遍历

// 请大家计算 任意两个数的和

// function sum() {
//   // console.log(arguments);
//   // console.log(arguments.length);
//   for (var i = 0; i <arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }

// sum(4,2);


// function sum() {
//   var he = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     he = he + arguments[i];
//   }

//   return he;
// }

// var result = sum(1,2,4,5,2,3,78,90);
// console.log(result);


// 总结:
// arguments是函数内部的对象
// arguments有length属性 能遍历

// 我们把 含有length属性 能被遍历的对象 称为 伪数组




// 错误代码
// function he() {
//   var sum = 0;
//   // i = 0;
//   // i = 1;
//   // i = 2;
//   for (var i = 0; i <= arguments.length; i++) {
//     // sum = 0 + 1 = 1
//     // sum = 1 + 1 = 2;
//     // //  4+ undefined = NaN
//     sum = sum + arguments[i];

//   }
//   return sum

// }
// var aa = he(1, 2);
// console.log(aa)