const mysql = require("mysql");

// const { config } = require("../db/config");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "letao",
});

//TODO 第一步：封装链接mysql数据库的请求
module.exports.query = (sql, values) => {
  // 以 Promise 返回，这样可以以函数的形式调用并获取到其中的数据
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      // 根据sql语句查询，动态获取不同的sql语句用于连接
      connection.query(sql, values, function (error, results, fields) {
        // 连接上后拿到数据，释放连接
        connection.release();

        // 异常抛出
        if (error) throw reject(error);
        resolve(results);
      });
    });
  });
};
