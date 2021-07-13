//1. 
// var num1 = 10;
// var num2 = num1;
// num1 = 20;
// console.log(num1); // 20
// console.log(num2); // 10

//2. 
var num = 50;
function f1(num) {
    num = 60;
    console.log(num);
}
f1(num);
console.log(num);

//3. 
// var num1 = 55;
// var num2 = 66;
// function f1(num, num1) {
//   num = 100;
//   num1 = 100;
//   num2 = 100;
//   console.log(num);
//   console.log(num1);
//   console.log(num2);
// }

// f1(num1, num2);
// console.log(num1);
// console.log(num2);
// console.log(num);