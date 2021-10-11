// 导入 koa
const Koa = require("koa");

// 调用koa构造函数，实例化 koa 实例
const app = new Koa();

// 给浏览器返回响应
app.use(async (ctx) => {
  // 获取 查询路由参数
  console.log(ctx.query);
  console.log(ctx.querystring);
  // 获取 路由参数

  ctx.body = "Hello World!!!";
});

// 监听端口
app.listen(3000, () => {
  console.log("Server is running in: http://localhost:3000");
});
