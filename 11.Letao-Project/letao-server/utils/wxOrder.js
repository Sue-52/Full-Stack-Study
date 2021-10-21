const { randomNum } = require("./randomNum");
const crypto = require("crypto");
const { default: axios } = require("axios");
const xml = require("xml2js");
const { key } = require("../config");

//#region 生成32位以内的随机字符串,而且是不重复的
module.exports.getRandomStr = () => {
  // console.log("Letao" + randomNum(6) + new Date().getTime());
  return "Letao" + randomNum(6) + new Date().getTime();
};
//#endregion

//#region 生成商品订单号
module.exports.getTrade_no = () => {
  return this.getRandomStr() + randomNum(5);
};
//#endregion

//#region 生成签名算法
module.exports.createSign = (args) => {
  // 第一步，设所有发送或者接收到的数据为集合M，
  //  将集合M内非空参数值的参数按照参数名ASCII码从小到大排序（字典序），
  // 使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串stringA。
  // let stringA = '';
  // Object.keys(args).sort().forEach(key => {
  //     stringA += `${key} = ${args[key]}&`;
  // });
  // stringA += `key=${key}`;

  const stringA = Object.keys(args)
    .sort()
    .reduce((prev, next) => {
      return (prev += `${next}=${args[next]}&`);
    }, "")
    .concat(`key=${key}`);

  return crypto.createHash("MD5").update(stringA).digest("hex").toUpperCase();
};
//#endregion

//#region 微信下单
module.exports.orderHandle = (url, params) => {
  return new Promise(async (resolve, reject) => {
    const data = await axios({
      url,
      method: "POST",
      data: params,
    });
    // console.log(data, 'data');
    // resolve(data);
    xml.parseString(data.data, function (err, res) {
      const { return_code, result_code, return_msg } = res.xml;
      if (
        return_code == "SUCCESS" &&
        result_code == "SUCCESS" &&
        return_msg == "OK"
      ) {
        resolve(res.xml);
      } else {
        reject(res);
      }
    });
  });
};
//#endregion
