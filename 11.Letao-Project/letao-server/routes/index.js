const router = require("koa-router")();
const { girdList, Banner, Sports } = require("../controller/index");

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
  });
});

// 1. girdList - 宫格数据
router.get("/girdlist", girdList);

// 2. banner - 轮播图
router.get("/banner", Banner);

// 3. sportPart - 运动专区
router.get("/sports", Sports);

module.exports = router;
