// switch语句将表达式的值与每个case中的目标值进行匹配， 穷举完的场景
// 如果找到了匹配的值，会执行对应case后的语句，
// 如果没找到任何匹配的值，就会执行default后的语句。
// break的作用是跳出switch语句。

// 语法:
      // switch (表达式){
      //   case 目标值1:
      //     执行语句1
      //     break;
      //   case 目标值2:
      //     执行语句2
      //     break;
      //   ．．．．．．
      //   case 目标值n:
      //     执行语句n
      //     break;
      //   default:
      //     执行语句n+1
      //     break;
      // }


// 当输入1-5个数字 打印这是几
var num = 1;
switch (num) {
      case 1:
      console.log("这是一");
      break;

      case 2:
      console.log("这是二");
      break;

      case 3:
      console.log("这是三");
      break;

      case 4:
      console.log("这是四");
      break;

      case 5: 
      console.log("这是五");
      break;

      default:
      console.log("不在范围内 异常");
      break;
}     

// 注意: switch语句中 除了特殊情况  必须都要有break,而且是一个case对应一个break


// 2、定义值1-7输出该数字打头的一个成语，视为你今天的状态
// 1：一帆风顺
// 2：二话不说
// 3：三心二意
// 4：四面楚歌
// 5：五湖四海
// 6：六亲不认
// 7：七上八下
