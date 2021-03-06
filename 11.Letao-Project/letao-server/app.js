const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const kowJWT = require("koa-jwt");
const { JWTsecret } = require("./config");
const xmlParser = require("koa-xml-body");
// 配置动态环境部署
require("dotenv").config();

// koa-jwt
// Custom 401 handling if you don't want to expose koa-jwt errors to users
// app.use(function (ctx, next) {
//   return next().catch((err) => {
//     if (401 == err.status) {
//       ctx.status = 401;
//       ctx.body = "Protected resource, use Authorization header to get access\n";
//     } else {
//       throw err;
//     }
//   });
// });
// set api without Token
// app.use(
//   kowJWT({ secret: JWTsecret }).unless({
//     path: [/^\/public/, /^\/user\/register/, /^\/user\/login/],
//   })
// );

app.use(xmlParser());

const index = require("./routes/index");
const users = require("./routes/users");
const category = require("./routes/category");
const sms = require("./routes/sms");
const order = require("./routes/order");

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(category.routes(), category.allowedMethods());
app.use(sms.routes(), sms.allowedMethods());
app.use(order.routes(), order.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
