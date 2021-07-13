// 多层条件判断 主要是为了 过滤不需要的因素

// 找到 咱们班 体重 低于100斤的女生


// 

var sex = "女";
var weight = 120;
// 先判断是不是女生  不是女生 直接就排除在外
if (sex == "女") {
  // 
  // 再判断是不是低于100斤
  if (weight <= 100) {
    console.log("真是一个苗条的女生");
  } else {
    console.log("你的身体真棒");
  }
} else {
  console.log("男生不算")
}