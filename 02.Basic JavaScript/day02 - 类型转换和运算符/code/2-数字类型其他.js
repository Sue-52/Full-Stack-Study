// 1. 浮点数在运算的时候会出现精度丢失的问题，因此在做比较运算的时候，尽量不要用小数进行比较
var num1 = 0.1;
var num2 = 0.2;
var result = num1 + num2; // 0.3
console.log(result); // 0.30000000000000004

// 2.数值的范围--最大值
// 1.7976931348623157e+308  含义是: 1.797....*10的308次方  前面是科学计数法在js中的样子
console.log(Number.MAX_VALUE);

// 3.数值的范围--最小值
// 5e-324  含义是: 5*10的-324次方
console.log(Number.MIN_VALUE); 


// 4.无穷大：Infinity   （正数数字和0相除的结果）
console.log(1/0);

// 5.无穷小：-Infinity  （负数数字和0相除的结果）
console.log(-1/0);
