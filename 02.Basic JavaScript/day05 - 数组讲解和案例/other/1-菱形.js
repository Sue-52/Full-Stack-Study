// 先打印一个*
// var row = '';
// for(var i = 0; i <1; i++) {
//   row += '*';
// }

// console.log(row);

// 打印一行6个星号
// var row = '';
// for(var i = 0; i <6; i++) {
//   row += '* ';
// }

// console.log(row);

// 打印6行6列
for (var i = 0; i < 5; i++) {
  var row = '';
  for (var j = 0; j < 5; j++) {
    row += '* ';
  }

  console.log(row);
}

// // 打印直角三角形
// for (var i = 0; i < 6; i++) {
//   var row = '';
//   for (var j = 0; j < i; j++) {
//     row += '* ';
//   }

//   console.log(row);
// }


// 打印金字塔

for (var i = 0; i < 5; i++) {
  // 5-0
  // 5-1
    var nbsp ='';
   for (var k = 1; k < 5-i; k++) {
     nbsp += "-";
   }
    // console.log(nbsp);



  var row = '';
  for (var j = 0; j < i; j++) {
    row += '* ';
  }

  // console.log(row);
}
