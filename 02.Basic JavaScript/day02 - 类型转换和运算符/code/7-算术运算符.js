// 算术运算符
// 1.乘法
// 2x3 = 6;
// console.log(2*4);
// 2.除法
// console.log(3/2);
// 3.求余数(取模)
// console.log(8%3);

// 	加法运算符在连接字符串时要注意，只有直接与字符串相加才会转成字符串。

// 	除法“/”当两边为整数时，取整数部分，舍余数。当两边为浮点型时，按正常规则相除

// 	整数做被除数，0不能做除数，否则报错。

// 	小数做被除数，整除0结果为Infinity， 对0取余结果为NaN。

// 	自增与自减: 单独使用时，前置与后置效果相同，均为直接+1或-1；
            // 混合使用时，++或—为前置时，先+1或-1，再使用值。
            // ++或—为后置时，先使用值再+1或-1

  // 自增就是某一个数 num++ 代表的意思是 num+1
  // var a = 2;
    // a++;
    // ++a;
    // console.log(a);

    // 当自增运算符 单独使用的时候 前置和后置没有任何区别
    // var b = 3;

    // var result = ++a +b;
    // var result = a++ + b;


  // console.log(result);


 // ++为前置时，先+1，再使用值。
 // ++为后置时，先使用值再+1

  // 检测:
// var a = 1; var b = ++a + ++a; console.log(b); 

// var a = 1; var b = a++ + ++a; console.log(b); 


// var a = 1; var b = a++ + a++; console.log(b);
// var a = 1; var b = ++a + a++; console.log(b);

var num = 10;
var sum = num++ + num + ++num;
console.log(sum);//?
console.log(num);//?
