const Router = require("koa-router");

// 创建实例
const router = new Router();

// 导入
const homeRouter = require("./homeRouter");
const aboutRouter = require("./aboutRouter");

// 挂载
router.use(homeRouter.routes(), homeRouter.allowedMethods());
router.use(aboutRouter.routes(), aboutRouter.allowedMethods());

// 导出
module.exports = router;
