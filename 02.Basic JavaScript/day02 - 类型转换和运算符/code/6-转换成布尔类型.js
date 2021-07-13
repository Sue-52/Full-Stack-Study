// 转换成布尔类型

// 1. Boolean() 0 ""(空字符串) null undefined NaN 会转换成false， 其他都会转换成true

var num = 0;
var str = "";
var num1 = 1;
var str1 = 'j';

console.log(Boolean(num)); // false
console.log(Boolean(str)); // false
console.log(Boolean(num1)); // true
console.log(Boolean(str1)); // true


