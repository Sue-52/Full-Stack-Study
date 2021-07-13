// 函数参数
// 1.形式参数: 就是 不真正的参与运算,只是占个位置  在函数声明的小括号中叫形式参数 也叫形参
// 2.实际参数: 就是 真正的去参与运算              在函数调用的小括号中叫实际参数 也叫实参

// 语法格式
// function 函数名(形式参数, 形式参数, 形式参数......) {
//   函数体
// }

// 调用
// 函数名(实际参数,实际参数) 


// function square() {
// 控制行 row
//   for (var i = 0; i < 5; i++) {
//     var row = "";
// 控制列 col
//     for (var j = 0; j < 5; j++) {
//       row += "*" + ' ';
//     }
//     console.log(row);
//   }
// }

// square();


// 那个量变化 就把哪个量写成参数
function square(row, col) {
  // 控制行 row
  for (var i = 0; i < row; i++) {
    var rows= "";
    // 控制列 col
    for (var j = 0; j < col; j++) {
      rows += "*" + ' ';
    }
    console.log(rows);
  }
}

// 5 7
square(5, 7);
// 6 8
square(6,8);
// 9 10
square(9,10);
// 3 4 
square(3,4);