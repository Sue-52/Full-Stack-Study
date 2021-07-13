/**
 * 对象的字面量的定义格式:
 * var 变量(对象名) = {
 * 键: 值,
 * 键: 值
 * ......
 * 
 * }
 * 
 * 
 */


//  用js的方式定义我们班的陆鹏文这个对象

var luPengWen = {
  name: "陆鹏文",
  sex: null,
  age: 20,
  married: true,
  hobby: ["抽烟", "喝酒", "烫头"],
  study: function () {
    console.log("我在开心的学Js");
  }
}

// 如何把学生对象、老师对象、英雄对象用js对象的定义方式表示
// var hero = {
//   name: "众星之子",
//   age: 18,
//   sex: "女",
//   skill: ["星之关注", "吃我毒奶"],
//   hp: 1000,
//   say: function () {
//     console.log("我有两把枪");
//   }
// }

