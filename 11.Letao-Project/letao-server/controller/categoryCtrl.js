const {
  firstCategoryModel,
  secondCategoryModel,
} = require("../model/categoryModel");

// TODO 第三步-在控制层曾输出数据，并将操作数据的语句放入Model文件
//#region 一级路由
module.exports.firstCategoryCrl = async (ctx) => {
  // TODO 第五步-通过调用的方式获取到 model 中的数据
  const data = await firstCategoryModel();
  // console.log(data);
  // TODO 最后一步-将数据和状态码返回出去以便前台接收
  ctx.body = {
    code: 200,
    msg: data,
  };
};
//#endregion

//#region 二级级路由
module.exports.secondCategoryCrl = async (ctx) => {
  const { id } = ctx.request.query;
  // console.log(id);
  const data = await secondCategoryModel(id);
  // console.log(data);
  ctx.body = {
    code: 200,
    msg: data,
  };
};
//#endregion
