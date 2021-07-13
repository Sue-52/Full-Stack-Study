// 运算符运算的先后顺序，优先级越高(数字越小)，计算顺序越靠前。

// 2+3+(3-4); 四则运算的顺序

// 与或非


// 与(&&)   两个条件都满足 则为真  有其中一个不满足则为假


// console.log(2 > 3 && 3 < 4); //false
// console.log(2 < 3 && 3 < 4); //true

// 总结: 有一个为假 则为假


// 或(||)  有一个为真 就为真  两个为假才为假
// console.log(2 > 3 || 3 < 4);  // true
// console.log(2 < 3 || 3 < 4);   // true
// console.log(2 > 3 || 3 > 4);  // false



// 非(!) 如果表达式为真 加上非就为假 否则为真
// console.log( !(2>3)); // true

// console.log(!(3<10)); // false


// 检测:
var result = 4 >= 6 || '人' != '阿凡达' && !(11*2>=23) && true;
console.log(result);
// 1.把复杂的运算 变成简单的运算

// 4 >= 6
// '人' != '阿凡达'
// !(11*2>=23) 
// true


// 2.找优先级最高的进行计算:
// (11*2>=23) false

// var result = 4 >= 6 || '人' != '阿凡达' && true && true;
// var result = false || true && true && true;
// var result = false || true;
// true

// 请说出result的结果
// var num =10

// 5 == num / 2 && (2 + 2 * num).toString() === '22'