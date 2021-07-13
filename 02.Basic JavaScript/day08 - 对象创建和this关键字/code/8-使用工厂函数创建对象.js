// 工厂函数创建对象 没有格式 是建立在系统构造函数的基础之上

// 格式:
/**
 * var 变量名 = function (形式参数1, 形式参数2) {
 * 
 * var  对象名 = new Object();
 *  对象名.属性 = 形式参数1;
 *  对象名.属性 = 形式参数2;
 *    ...
 * 
 *  return 对象名
 * }
 * 
 */

//  定义三个对象 陆鹏文  张乃赫  于景尧

// 工厂函数
var CreateObj = function (name, age, sex, say) {
    var obj = new Object();
      obj.name = name;
      obj.age = age;
      obj.sex = sex;
      obj.say = say;

      return obj;
} 


// 陆鹏文
// var luPengWen = CreateObj("陆鹏文", 20, "男", function () {
//   console.log("你好");
// })
// console.log(luPengWen);

// luPengWen.say();
// 张乃赫
  //  var zhangNaiHe = CreateObj("张乃赫", 18, "男", function () {
  //    console.log("nice to meet you");
  //  })

// 于景尧
  //  var yuJingYao = CreateObj("于景尧", 19, "男", function () {
  //    console.log("卡哇伊");
  //  })