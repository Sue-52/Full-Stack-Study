// 遍历对象的格式
/**
 * for (var key in 对象名) {
 * 如果你想获取 直接key
 * 如果你想获取值 对象名[key]
 *  
 * }
 * 
 */

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


// for (var key in luPengWen) {
//   console.log(key + "=" + luPengWen[key]);
// } 


// 总结: 1.如何遍历对象
        //  2. 如何在遍历的时候获取key
        //  3. 如何在遍历的时候 获取key对应的值