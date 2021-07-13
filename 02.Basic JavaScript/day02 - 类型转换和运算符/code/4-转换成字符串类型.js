// 转换成字符串类型

// 1.	toString()
// 1.1 数字
//  var num = 10;
//  var result = num.toString();
//  console.log(typeof result);
// 1.2 布尔
  // var bool = true;
  //  console.log(typeof bool.toString());
// 1.3 undefined 

  // var unde = undefined;
  // Uncaught TypeError: Cannot read property 'toString' of undefined
  // 直白的说 就是unde使用不了这个方法
  // console.log(typeof unde.toString());
// 1.4 null
  // var nu = null;
  // Uncaught TypeError: Cannot read property 'toString' of null  
  // 直白的说 就是nu使用不了这个方法
  // console.log(typeof nu.toString());


  // 除了undefined 和null 之外的其他数据类型都可以通过toString() 方法转换为字符串

// 2.	String()
// var num = 10;
// var bool = true;
// var unde = undefined;
// var nu = null;
// 用法: String(值)
// console.log(typeof String(num));
// console.log(typeof String(bool));
// console.log(typeof String(unde));
// console.log(typeof String(nu));
// 3. 拼接字符串方式
// var num = 10;
// var bool = true;

// var result = num + "";
// console.log(result);
// console.log(typeof result);
// var result = bool +"";
// console.log(result);
// console.log(typeof result);