module.exports.randomNum = (len) => {
  let code = "";
  for (let i = 0; i < len; i++) {
    //  每次遍历 都会拼接随机整数
    code += this.getRandom(0, 9);
  }
  // 指定位数随机整数
  return code;
};

// 生成从min到max随机整数
module.exports.getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
