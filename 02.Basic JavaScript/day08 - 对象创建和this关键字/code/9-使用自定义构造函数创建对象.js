// 使用自定义构造函数

// 构造函数: 构造函数 和普通函数 没有任何不一样的地方
            //  普通函数的命名: 小驼峰
            //  构造函数的命名是: 每个单词的首字母都大写 就是为了提醒开发者 这是构造函数
    // 构造函数 在js中就是为了创建对象, 必须使用  new 构造函数();   来调用

    

// 格式:
/**
 * var 函数名 = function (形式参数...) {
 *   this.属性名 = 形式参数;
 *   this.属性名 = 形式参数;
 *    ... ... 
 * 
 * }
 * 
 * var 对象名 = new 函数名(实参, 实参, 实参...);
 * 
 */

//  定义一个明星 毛不易

// var SuperStar = function (name, age, sex, hobby, money, worker) {
//     this.name = name;
//     this.age = age;
//     this. sex = sex;
//     this.hobby = hobby;
//     this.money = money;
//     this.worker = worker;
// }

// var maoBuYi = new SuperStar("毛不易", 24, "男", ["唱歌","写歌","打麻将", "烫头"], 1000, ["消愁","创业事待","我是巨星"]);

// console.log(maoBuYi);





var SuperStar = function (name, age, sex) {
  this.name = name;
  this.age = age;
  this. sex = sex;

}
var maoBuYi = new SuperStar("毛不易", 24, "男");

console.log(maoBuYi);