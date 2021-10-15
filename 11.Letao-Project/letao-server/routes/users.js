const router = require("koa-router")();

const { registerCtrl, loginCtrl } = require("../controller/userCtrl");

router.prefix("/user");

//#region 用户注册
router.post("/register", registerCtrl);
//#endregion

//#region 用户登录
router.post("/login", loginCtrl);
//#endregion

module.exports = router;
