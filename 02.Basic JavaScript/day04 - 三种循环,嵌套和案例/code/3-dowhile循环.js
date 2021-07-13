// do...while 用于至少执行一次的场景 

// 语法规则:
//   初始化表达式1
//    do {
      // 循环体3
      // 步进表达式4
// } while(布尔表达式2);

// 执行过程:
      // 1. 初始化表达式1
      // 2. 执行循环体3
      // 3. 执行步进表达式4
      // 4. 判断布尔表达式
      // 5. 如果布尔表达式满足 执行 循环体3
      // 6. 执行步进表达式

// 打出3次 我爱你

// 1. 初始化次数
// var i = 1;
// do {
// // 2. 打印 我爱你
// console.log("我爱你");
// // 3. 让次数++
//       i++;
// } while (i <= 3);
// 4. 判断次数是否在3以内


// 理想医院的急诊机制：
      // 根据医疗费选择治疗或者不治疗，第一次急诊时，人命关天，需要先治疗一次，再判断是否有能力继续支付，
      // 如果有能力，达到5000元打印治疗，没有打印不予治疗。

// 步骤:
// 1.定义一个变量 用来表示金额
// var money = 5000;
// // 2.在循环中打印 治疗
// do {
//    console.log("治疗");
// }while(money >= 5000);
// 3.判断钱是否大于等于5000
