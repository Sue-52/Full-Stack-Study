
// 一元运算符

//  比如: -2
// 一元运算符的特点是 操作数只有1个

// 二元运算符

// 比如: 2*3;
// 二元运算符 操作数有两个



// 三元运算符(主要是用来做判断的)

// 1.格式: (条件表达式)？结果1：结果 2；

// 2.运算规则：
      // 判断条件表达式
      // true，运算结果为表达式1
      // false，运算结果为表达式2

// 要判断 2 和 3 哪个数比较大

// var a = 2;
// var b = 3;

// 1.格式: (条件表达式)？结果1：结果 2；
// var result = a < b ? "最大数是a" : "最大数是b";
// console.log(result);

// 需求: 判断 年龄是否大于18岁，如果大于，那么输出一句话: “可以进网吧”，否则输出一句话: “未成年不得进网吧”

// 定义一个变量  用来表示年龄
 var age = 19;
// 要和18比，如果比18大 那么就进网吧 如果比18小 就不让进网吧
var result = age > 18 ? "欢迎来到网吧！！！" :"对不起，请长大再来";
console.log(result);