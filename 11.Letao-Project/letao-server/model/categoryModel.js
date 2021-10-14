const { query } = require("../db/query");

// TODO 第四步-将操作数据的方法放入到里面并将数据 return 出去

//#region  一级分类
module.exports.firstCategoryModel = async () => {
  var sql = "SELECT * FROM category";
  return await query(sql);
};
//#endregion

//#region  二级分类
module.exports.secondCategoryModel = async (id) => {
  // 之后修改的话要改成 categoryId 用于关联一级分类
  var sql = "SELECT * FROM brand WHERE brand.categoryId = ?";
  return await query(sql, [id]);
};
//#endregion
