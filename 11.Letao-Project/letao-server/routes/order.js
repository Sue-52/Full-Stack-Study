const router = require("koa-router")();
const { orderCtrl } = require("../controller/orderCtrl");
//#region 支付订单
router.post("/order", orderCtrl);
//#endregion

module.exports = router;
