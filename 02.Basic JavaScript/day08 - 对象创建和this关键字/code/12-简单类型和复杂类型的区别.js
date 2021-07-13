// 基本类型存储的是 值  
// 引用类型存储的是 地址

// 栈中存: 变量数值 函数参数 
// 堆中存:  对象 数组

// 基本类型在内存中的存储
var num = 10;
var n = num;















// 复杂类型在内存中的存储
var p = new Person('zs', 18, 1000);
var p1 = p;

















// 基本类型作为函数的参数
function f1(a, b) {
  a = a + 1;
  b = b + 1;
  console.log("a="+a);
  console.log("b="+b);
}
var x = 5;
var y = 6;
f1 (x,y);
















// 复杂类型作为函数的参数