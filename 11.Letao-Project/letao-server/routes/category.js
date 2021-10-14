const router = require("koa-router")();

const {
  firstCategoryCrl,
  secondCategoryCrl,
} = require("../controller/categoryCtrl");

// TODO 第二步-开发接口并将请求数据操作放入 controller文件中

//#region 一级分类接口开发
router.get("/firstCategory", firstCategoryCrl);
//#endregion

//#region 二级分类接口开发
router.get("/secondCategory", secondCategoryCrl);
//#endregion

module.exports = router;
