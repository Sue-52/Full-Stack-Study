const router = require("koa-router")();
const { sendsmsCtrl } = require("../controller/smsCtrl");

// 发送短信
router.post("/sendsms", sendsmsCtrl);

module.exports = router;
