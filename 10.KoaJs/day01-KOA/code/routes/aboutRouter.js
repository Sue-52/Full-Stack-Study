const Router = require("koa-router");

const aboutRouter = new Router({
  // 路由标识符的前缀
  prefix: "/about",
});

aboutRouter.get("/", async (ctx, next) => {
  ctx.body = "About Page";
});

module.exports = aboutRouter;
