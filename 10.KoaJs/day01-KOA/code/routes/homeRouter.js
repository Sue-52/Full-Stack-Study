const Router = require("koa-router");

const homeRouter = new Router({
  // 路由标识符的前缀
  prefix: "/home",
});

homeRouter.get("/", async (ctx, next) => {
  ctx.body = "Home Page";
});

module.exports = homeRouter;
