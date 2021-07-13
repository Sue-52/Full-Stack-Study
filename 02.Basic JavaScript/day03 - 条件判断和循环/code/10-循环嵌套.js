// 循环嵌套并不是一个新的知识点。只是在循环格式中嵌套使用了循环。

// 语法格式:
// for(初始化表达式; 循环条件; 操作表达式) {
//   ………
//   for(初始化表达式; 循环条件; 操作表达式) {
//     执行语句
//     ………
//   }
//   ………
// }

// for (var j = 0; j < 4; j++) {
//       var x = "";
//       for (var i = 0; i < 9; i++) {
//             x += '*';
//       }
//       console.log(x);
// }


for (var j = 0; j < 10; j++) {
      var x = "";
      for (var i = 0; i < j; i++) {
            x += '*';
      }
      console.log(x);
}


      // var x = "";
      // for (var i = 0; i < 2; i++) {
      //       x += '*';
      // }
      // console.log(x);

      // var x = "";
      // for (var i = 0; i < 3; i++) {
      //       x += '*';
      // }
      // console.log(x);

      // var x = "";
      // for (var i = 0; i < 4; i++) {
      //       x += '*';
      // }
      // console.log(x);

      // var x = "";
      // for (var i = 0; i < 5; i++) {
      //       x += '*';
      // }
      // console.log(x);

      // var x = "";
      // for (var i = 0; i < 6; i++) {
      //       x += '*';
      // }
      // console.log(x);

for (var i = 1; i < 10; i++) {
      var row = "";
      for (var j = 1; j <= i; j++) {
            row += j + "x" + i + '=' + j*i +"\t"; 
      }
      console.log(row);
}

