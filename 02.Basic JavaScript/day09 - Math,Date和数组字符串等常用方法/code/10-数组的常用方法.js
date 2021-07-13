// push(); 将一个或多个元素添加到数组的末尾
// unshift(); 将一个或多个元素添加到数组的开头
// shift(); 从数组中删除第一个元素
// sort();  排序
// reverse(); 反转
// splice(); 切割数组
// indexOf(); 在数组中找到一个给定元素的第一个索引


// 1.push()后面添加  unshift 前面添加
// var arr = [0];

// arr.push(1);
// arr.push(2);
// arr.push(3);

// arr.unshift(-1);
// arr.unshift(-2);
// arr.unshift(-3);
// console.log(arr);



// shift() 删除第一个元素

// var arr = [4,2,1,3,6,7];

// arr.shift();
// arr.shift();
// console.log(arr);

// reverse() 数组反转

// var arr = [4,2,1,3,6,7];
// console.log(arr.reverse());


// indexOf(元素) 查找 有没有某个元素 有返回索引 没有返回-1
// var arr = [4,2,1,3,6,7];

// console.log(arr.indexOf(10));


// splice(从几开始,删几个,替换元素(可以不写)) 增加  删除 替换
var arr = [4,2,1,3,6,7];

// 删除
// arr.splice(0,3);
// console.log(arr);

// 替换
// 从0开始 删2个 增加 a 增加b
// arr.splice(1,2,'a','b');
// console.log(arr);

// 该代码说明 如果你想从后往前删  最后一个的索引是-1
// arr.splice(-1,1);
// console.log(arr);



// sort() 排序
// 默认怎么排序呢？ 如果是数字 先对比第一位 再对比第二位 从小到大排列
// 如果是字母 按照ascii码表来进行排序

// var arr = [1, 22, 12, 100, 40];
// arr.sort();
// console.log(arr);
// var arr1 = ['c', 'helo','ab']
// arr1.sort();
// console.log(arr1);


// 在数字中  如何按照数字的大小进行排列呢？

// 如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
// 如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
// 如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
// compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。


// var arr = [1, 22, 12, 100, 40];
// a 代表的是 1 
// b 代表的是22
// 
// arr.sort(function (a, b) {
//   return b - a;
// });

// console.log(arr);