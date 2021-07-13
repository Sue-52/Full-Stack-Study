// 比较运算符

// 1. 大于等于(>=)    小于等于(<=)
// var a = 3;
// var b = 4;

// console.log(b >=a); // true
// console.log(b <=a); // false


// 2. 等于(==)        不等于(!=)
// 两个等号 只判断两个值是否相等  虽然a是数字  b是字符串 但是两个等号会进行类型转换 所以
// 当b转换为数字 就是真正的数字3   那么3 == 3 吗  等于   所以是true
// var a = 3;
// var b = '3';
// var c = 4;
// console.log(a == b); // true
  // console.log(b != c);

// 3. 严格等于(===)      严格不等于(!==)
// 不仅仅要比较值 还要比较数据类型 其中任何一个不一样 都是false

// var a = "200";
// var b = 200;

// console.log(a === b);
// console.log(a !== b);

// var bool1 = false;
// var bool2 = true;

// console.log(bool1 !== bool2);

// 如果你要追求代码的严谨 用 严格等于  要是追加写代码的速度 就用 两个等号