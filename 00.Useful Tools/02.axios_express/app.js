// 导入 express
const express = require("express");
// 配置 log 日志文件
const log4js = require("log4js");
// 配置动态环境部署
require("dotenv").config();

// 创建express实例
const app = express();
const host = "localhost";
const port = "3000";

// 日志配置

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
