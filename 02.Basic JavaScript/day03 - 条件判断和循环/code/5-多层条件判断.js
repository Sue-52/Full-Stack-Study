// 在复杂的业务逻辑中，可以使用多层的条件判断代码是否执行。
// 语法:
// if(第一层条件){
//   if(第二层条件){
//     真正运行逻辑
//   }
// }


// 对一个学生的考试成绩进行等级的划分，(知道学生的考试成绩 定义一个变量)
// 如果分数大于等于80分，小于等于100分等级为优；(如果分数在80分及以上 100分及以下 打印优秀)
// 如果分数大于等于70分，小于80分级为良；(如果分数在70分及以上 80分以下 为良)
// 如果分数大于等于60分，小于70分等级为及格；(如果分数在60分及以上, 70分以下 为及格)
// 60以下为不及格；(分数应该在60分以下 0分及以上)
// 大于100或者小于0则分数异常。(否则 就是分数异常)



// 分析:
// 1.要排除意外 比如:分数是大于100的 不可能   分数是小于0的不可能
// 2.当意外排除了 再去划分 优良中差

// 步骤:
// // 1.定义变量,来表示学生的成绩
// var score = 0;
// // 2.排除意外 先判断学生的成绩是否在正常范围
// if (score <= 100 && score >= 0) {
//       // 3.排除意外之后 再去划分优良中差
//       if (score >= 80) {
//             console.log("优秀");
//       } else if (score >= 70 && score < 80) {
//             console.log("良好");
//       } else if (score >= 60 && score < 70) {
//             console.log("及格");
//       } else {
//             console.log("不及格");
//       }
// } else {
//       console.log("成绩不正常");
// }
