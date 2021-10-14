const router = require("koa-router")();

const { registerCtrl } = require("../controller/userCtrl");

router.prefix("/user");

//#region 用户注册
router.get("/register", registerCtrl);
//#endregion

module.exports = router;
