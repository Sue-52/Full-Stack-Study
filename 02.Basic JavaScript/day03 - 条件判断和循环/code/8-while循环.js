// 当不知道循环次数时，使用while循环更为简单。这种循环逻辑简单：满足条件就循环，否则继续执行。 

// 语法格式:
        // 初始化表达式①
        // while(布尔表达式②){
        //   循环体③
        //   步进表达式④
        // }

// 执行顺序： ①②③④>②③④>②③④… ②不满足为止。
          // ①负责完成循环变量初始化。
          // ②负责判断是否满足循环条件，不满足则跳出循环。
          // ③具体执行的语句。
          // ④循环后，循环变量的变化情况。

// 跑10圈 每次打出我跑第几圈
var num = 1; // 跑了0圈

while (num <= 10) {
 console.log("我跑了第"+ num + "圈");
 num++;
}


// 死循环是禁止的

// while (true) {
//         console.log(1);
// }


