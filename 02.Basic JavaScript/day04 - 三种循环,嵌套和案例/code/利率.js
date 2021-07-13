// 9.本金10000元存入银行，年利率是千分之三，
// 每过1年，将本金和利息相加作为新的本金。

// 算一年后 你有多少钱

// 1.定义一个变量 代表你有多少本金
// var money = 10000;
// // 2.定义一个变量 代表利率
// var rate = 0.003;
// // 3.将本金和利息相加作为新的本金
// money = money + (money*rate);
// console.log(money);

// 算5年后
var money = 10000;
var rate = 0.003;
for (var i = 0; i < 5; i++) {
  money = money + (money*rate);
}
console.log(money);