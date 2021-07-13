var bigYellow = {
  name: "大黄",
  sex: "公",
  sleep: function () {
    console.log("睡觉");
  }
}

// 设置对象的键对应的值

/**
 * 格式:
 *  对象.键 = 值;
 * 
 * 格式:
 *  对象["键"] = 值;
 * 
 */

//  bigYellow.name = "猫咪";
//  bigYellow["sex"] = "母";
//  console.log(bigYellow);


// 能不能自己创建一个 键 并且赋予值
// bigYellow.eat = function () {
//   console.log("吃");
// }

// console.log(bigYellow);

// bigYellow.sleep();



// 总结:
  //  1.使用对象.键 = 值; 来设置对象的属性对应的值
  //  2.对象["键"] = 值; 来设置对象的属性对应的值
  //  3.如何重新创建一个新的键 并赋予值