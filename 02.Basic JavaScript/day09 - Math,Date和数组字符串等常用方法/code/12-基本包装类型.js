// 基本类型: 数字 字符串 布尔值 
// 数据类型: 简单类型 复杂类型
// 复杂类型: 对象

// 什么类型才有方法 只有对象才有方法

// var fn = function(){}
// function fn() {}

// var obj= {
//   fn: function() {},
//   say: function() {}
// }
// 函数单独写叫函数
// 函数放在对象中叫方法


// 如果你们见到 xx.yy(); xx的方法yy();


// var str = "helloWorld";
// var str1 = str.substr(5);
// console.log(str1);


// 为什么要有基本包装类型呢？
// 因为基本类型没有方法，因为他们是值 不是对象
// 但是我就需要截取字符串这样的操作，需要方法来完成
// js就给我们我们提供了三个基本包装类型字符串对象String(很常用) 数字对象Number(不用) 布尔对象Boolean(不用);


// var obj = new Object();

var str = new String("HelloWorld");
var str1 = str.substr(5);
console.log(str1);


  // 如果简单类型 要调用方法 必须使用基本包装类型 来调用