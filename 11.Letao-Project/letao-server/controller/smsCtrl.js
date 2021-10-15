const { smsCode } = require("../utils/smsCode");
const { randomNum } = require("../utils/randomNum");

module.exports.sendsmsCtrl = async (ctx) => {
  const { mobile } = ctx.request.body;
  const randomCode = randomNum(6);
  const result = smsCode(mobile, randomCode);

  if (result.Code == "OK") {
    ctx.body = {
      code: 200,
      msg: "验证码已发送！！！",
    };
  } else {
    ctx.body = {
      code: 0,
      msg: "验证码发送失败！！！",
    };
  }
};
