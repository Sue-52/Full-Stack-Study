const router = require("koa-router")();
const {
  orderCtrl,
  notifyCtrl,
  orderNotifyCtrl,
} = require("../controller/orderCtrl");
//#region 支付订单
router.post("/order", orderCtrl);
//#endregion

//#region 微信下单路由
router.post("/pay/notify", notifyCtrl);
//#endregion

//#region 微信支付通知
router.post("/orderNotify", orderNotifyCtrl);
//#endregion

module.exports = router;
