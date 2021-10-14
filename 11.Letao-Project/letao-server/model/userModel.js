const { query } = require("../db/query");

//#region register 用户注册
module.exports.registerModel = async (username, password, mobile) => {
  var sql = `INSERT INTO USER (username, password, mobile) VALUES ("${username}","${password}","${mobile}")`;
  return await query(sql);
};
//#endregion
