// 1.1 导入 koa
const Koa = require("koa");
// 1.2 导入 router 中间件
const Router = require("koa-router");
// 3.1 导入外置路由
const routers = require("./routes");

// 1.3 调用koa构造函数，实例化 koa 实例
const app = new Koa();
// 2.1 生成路由实例
const router = new Router();
// 2.2 使用路由中间件：将路由挂载到 app 实例上
app.use(router.routes());

// 1.4 使用 app 调用 use 中间件
// 给浏览器返回响应；ctx --> 上下文
// app.use(async (ctx) => {
//   ctx.body = "Hello Koa!";
//   //   console.log(ctx);
// });

// 2.3 使用路由
// router.get("/login", async (ctx, next) => {
//   ctx.body = "使用路由：/";
// });
app.use(routers.routes(), routers.allowedMethods());

// 1.5 监听端口
app.listen(3000, () => {
  console.log("Server is running in: http://localhost:3000");
});
