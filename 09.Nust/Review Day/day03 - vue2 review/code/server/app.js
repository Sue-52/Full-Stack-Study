const express = require("express");

const app = express();

// 跨域请求设置
app.use((req, res, next) => {
  //设置请求头
  res.set({
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Max-Age": 1728000,
    "Access-Control-Allow-Origin": req.headers.origin || "*",
    "Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
    "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
    "Content-Type": "application/json; charset=utf-8",
  });
  req.method === "OPTIONS" ? res.status(204).end() : next();
});

app.get("/api/getInfo",(req,res)=>{
  let data = {
    name:"sue",
    age:22,
    gender:"male",
    email:"1219243948@qq.com"
  }
  res.status(200).send(data)
})

app.listen(3000,()=>{
  console.log("Server start at：http://localhost:3000")
})