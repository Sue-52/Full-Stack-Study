// break 是用来跳出switch 和循环的

// 规则: 置于循环中， 循环遇到break 会直接停止循环

// 打出三次我爱你

// for (var i = 0; i < 3; i++) {
//   console.log("我爱你");
//   break;
// }

// 上面代码: 注意点: for循环中的大括号就是循环体

// 执行过程: 首先i=0; 然后判断i <3 为true， 然后执行循环体 
// 按照顺序结构: 执行循环体 第一句 打出 我爱你  第二句碰到break了 不管遇到任何情况 立马停止(跳出)循环
// 结果就是 一句 我爱你


// 请大家打印出 100 -200之间 第一个被7整除的数
// 1.首先要打印出100 - 200之间的所有数
// for (var i = 100; i <= 200; i++){
// // 2.判断一下  100-200之间能被7整数的数
//   if (i % 7 == 0) {
//   // 3.只要找到 立马跳出循环
//   console.log(i);
//   break;
//   }
// }
