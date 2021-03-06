// 一般而言，兔子在出生两个月后，就有繁殖能力，一对兔子每个月能生出一对小兔子来。如果所有兔子都不死，那么一年以后可以繁殖多少对兔子？
// 我们不妨拿新出生的一对小兔子分析一下：
// 第一个月小兔子没有繁殖能力，所以还是一对
// 两个月后，生下一对小兔对数共有两对
// 三个月以后，老兔子又生下一对

// 新生小兔子  1
// 第一个月    1
// 第二个月    2
// 第三个月    3
// 第四个月    5
// 第五个月    8
// 求 12个月后 有多少对小兔子


// 总的规律： 1 1 2 3 5 8 13 21 34 55 89 144 

// 第三个月 是第一个月 + 第二个月的和


// num1 = 1;  第一个月 1
// num2 = 1;  第二个月 1
// sum = num1 + num2; 第三个月  2

// num 1 = num2     第四个月= 第二个月 1
// num2 =   sum     第五个月= 第三个月 2
// sum = num1 + num 第六个月= 第四个月+ 第五个月= 3;

// num1 = 2  第七个月=第三个月
// num2 = 3   第八个月= 第四个月
//  sum = num1 + num2 = 5     第九个月 = 第七个月+ 第八个月


// 1   1    2    3    5    8   13    21 


// 1.第一个月 原始本来就有一对兔子
var num1 = 1;
// 2.第二个月 兔子长大了 还是一对兔子
var num2 = 1;
// 3.初始化一个 总数
var sum = 0;

// 兔子 要从生兔子开始
for (var i = 3; i <= 12; i++) {
  // 4.兔子的总和
  sum = num1 + num2;
  // 5.本月等于前一个月
  num1 = num2;
  // 6.第二月 等于上一次的综合
  num2 = sum;
}

console.log(sum); // 144
