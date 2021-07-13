// Math 是一个内置对象， 它具有数学常数和函数的属性和方法。

// 常用方法:
//Math.PI; 圆周率
//Math.floor() / Math.ceil();  向下取正/向上取整
//Math.round(); 四舍五入
//Math.abs();   绝对值
//Math.max() / Math.min();  最大值和最小值
//Math.sin() / Math.cos();  正弦/余弦
//Math.pow() / Math.sqrt(); 指数次幂/平方根
//Math.random(); 随机数


/*************************** 圆周率 ****************************************/
//常数: Math.PI

// console.log(Math.PI); // 3.14





/*************************** 向下取正/向上取整 *******************************/
// 向下取整 Math.floor(num)  返回一个表示小于或等于指定数字的最大整数的数字(45.95 45.05 -45.05 -45.95);
// var result1 = Math.floor(45.95); // 最小整数
// console.log(result1)
// console.log(Math.floor(45.05)); // 45
// console.log(Math.floor(-45.05));
// console.log(Math.floor(-45.96)); // -46
// 向上取整 Math.ceil(num)   返回大于或等于一个给定数字的最小整数。(0.95 7.004 -0.95 -4 -7.004)
  // console.log(Math.ceil(0.95));
  // console.log(Math.ceil(7.004));
  // console.log(Math.ceil(-0.95))
  // console.log(Math.ceil(-4));
// console.log(Math.ceil(-7.004));
/*************************** 四舍五入 ****************************************/
//四舍五入 Math.round(num) 返回一个数字四舍五入后最接近的整数。(20.49 20.5 -20.5 -20.51)

// console.log(Math.round(20.49));
// console.log(Math.round(20.5));
// console.log(Math.round(-20.5));
// console.log(Math.round(-20.51));

// console.log(0.1 + 0.2);





/********************************* 绝对值 **********************************/
//绝对值 Math.abs(num) 返回指定数字 “x“ 的绝对值 ('-1'  -2 )
// 正整数的绝对值是它本身 负数的绝对值是它的相反数
// console.log(Math.abs(5));
// console.log(Math.abs(-5));

// console.log(Math.abs(-5.1));



/********************************* 最大值和最小值 ****************************/
// Math.max(num1, num2...) 返回一组数中的最大值 es6
// console.log(Math.max(2, 1, 4, 5, 3, 9));
// console.log(Math.max([1,2,3,4,32,4]));
  //  var arr = [1,4,2,9, 31,4,2];
  //   console.log(Math.max(...arr));




// Math.min(num1, num2...) 最小值
// console.log(Math.min(2, 1, 4, 5, 3, 9));
// var arr = [-10,4,2,9, 31,4,2];
// console.log(Math.min(...arr));

/*************************** 底数次幂 / 平方根 ****************************************/
//Math.pow(底数，指数) 底数次幂
// console.log(Math.pow(2,2));
//Math.sqrt(); 平方根
// console.log(Math.sqrt(2));


/********************************* 随机数 **********************************/
//Math.random(); 返回一个浮点数,  伪随机数在范围[0，1)， 大于等于0 小于1
// 伪随机数: 时间变化的非常的快 在毫秒变化的时候 取了一个数 
// [1,10] 大于等于1 小于等于10
// [1,10)  大于等于1  小于10
// (1,10)  大于1  小于10
// (1,10]  大于1  小于等于10

// console.log(Math.random());

// 取 0  - 10的随机数
// console.log(Math.floor(Math.random() * 10));



