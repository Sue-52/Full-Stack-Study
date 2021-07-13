// 转换成数值类型

// 1.Number() 可以把任意值转换成数值，如果要转换的字符串中有一个不是数值的字符，返回NaN
// var str = "123";
// var str1 = "123ab321";
// var bool = true;
// var unde = undefined;
// var nu = null; // 0

// console.log(typeof Number(str));
// var result = Number(str1);
// console.log(result);
// console.log(typeof Number(str1));

// console.log(typeof Number(undefined));


// NaN 首先是属于数字类型的
// NaN代表的含义是: not a number 不是一个数字

// 如何判断是不是一个字符串呢？
// isNaN() 是 不是一个数字 如果是数字 返回值为false  如果不是数字 返回true

// console.log(isNaN('h'));  不是数字 返回true
// console.log(isNaN(3)); // 是数字 返回false



// 2.parseInt() 如果第一个字符是数字会解析直到遇到非数字结束;如果第一个字符不是数字或者符号就返回NaN

// var str = "123";
// var str1 = "123.1ab321";
// console.log(str);
// console.log(parseInt(str));
// console.log("----------------------------");
// console.log(str1);
// parseInt  Int代表整数(整型数字)
// console.log(parseInt(str1));

// 3.parseFloat() ParseFloat() 和parseInt非常相似，不同之处在于parseFloat会解析第一个.，遇到第二个，或者非数字结束，如果解析的内容里只有整数，解析成整数
// var str = "123";
// var str1 = "123.1.1ab321";

// console.log(parseFloat(str));
// console.log(parseFloat(str1));

// 4.+,-0等运算 

// var num = "500";
// console.log(num);
// console.log(+num);
// console.log(-num);