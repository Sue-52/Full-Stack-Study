const { query } = require("../db/query");

//#region register 用户注册
module.exports.registerModel = async (username, password, mobile) => {
  var sql = `INSERT INTO USER (username, password, mobile) VALUES ("${username}","${password}","${mobile}")`;
  return await query(sql);
};
//#endregion

//#region register 检查用户
module.exports.isRegisterModel = async (username) => {
  var sql = "SELECT * FROM user WHERE username = ?";
  return await query(sql, [username]);
};
//#endregion

//#region login 用户登录
module.exports.loginModel = async (username, password) => {
  var sql = "SELECT * FROM user WHERE username = ? AND password = ?";
  return await query(sql, [username, password]);
};
//#endregion
