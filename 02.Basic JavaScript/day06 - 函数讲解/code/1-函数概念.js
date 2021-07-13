
// for (var i = 0; i < 5; i++) {
//   var row = "";
//   for (var j = 0; j < 5; j++) {
//     row+="*"+' ';
//   }
//   console.log(row);
// }

// 函数的定义: 函数是一段 实现某个功能的代码 放到一个特定的格式中 ，当需要的时候 调用就可以了，函数的调用可以调用任意次


// 函数的语法结构:
// function 函数名() {
//   函数体
// }

// 调用
// 函数名();

function square() {
  for (var i = 0; i < 5; i++) {
    var row = "";
    for (var j = 0; j < 5; j++) {
      row += "*" + ' ';
    }
    console.log(row);
  }
}

square();


// 函数定义流程
// 1.定义函数
// 2.调用函数(函数定义了 不调用 函数是不会执行的)


// 函数的执行流程
// 1.执行的是square(); 函数调用
// 2.执行的是
// // function square() {
//   for (var i = 0; i < 5; i++) {
//     var row = "";
//     for (var j = 0; j < 5; j++) {
//       row += "*" + ' ';
//     }
//     console.log(row);
//   }
// }

// var cc =Math.floor(2.333);
// console.log(cc);




