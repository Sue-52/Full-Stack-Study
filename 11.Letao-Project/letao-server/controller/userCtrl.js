const {
  registerModel,
  isRegisterModel,
  loginModel,
} = require("../model/userModel");
// 引入 joi 表单校验工具
const Joi = require("joi");
// 引入加密工具
const { encipherment } = require("../utils/encipherment");
const { secret } = require("../config");

//#region 创建注册路由
module.exports.registerCtrl = async (ctx) => {
  const { username, password, mobile } = ctx.request.body;
  // console.log(username, password, mobile);
  //#region 表单参数校验
  const schema = Joi.object({
    username: Joi.string().min(4).max(20).required(),
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{6,20}$/)
      .required(),
    repeat_password: Joi.ref("password"),
    mobile: Joi.string().pattern(
      /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
    ),
  });

  const verify = schema.validate({ username, password, mobile });

  if (verify.error) {
    ctx.body = {
      code: 0,
      msg: verify.error.details[0].message,
    };
    return;
  }
  //#endregion

  //#region 检查用户是否注册
  const user = await isRegisterModel(username);
  if (user[0]) {
    ctx.body = {
      code: 0,
      msg: "用户已注册！",
    };
    return;
  }
  //#endregion
  await registerModel(username, encipherment(password + secret), mobile);
  ctx.body = {
    code: 200,
    msg: `注册成功`,
  };
};
//#endregion

//#region 创建登录
module.exports.loginCtrl = async (ctx) => {
  const { username, password } = ctx.request.body;

  const result = await loginModel(username, encipherment(password + secret));

  if (result[0]) {
    ctx.body = {
      code: 200,
      msg: "登陆成功",
    };
  } else {
    ctx.body = {
      code: 0,
      msg: "登陆失败，请检查用户名和密码",
    };
  }
};
//#endregion
