<template>
  <div>
    <h1>Main Page</h1>
    <!-- 1. 轮播图 -->
    <IndexBannerSwiper :swiperList="banner" />
    <!-- 2.宫格组件 -->
    <IndexGridList :girdlist="girdlist" />
    <!-- 3.活动组件 -->
    <IndexActive />
    <!-- 4.品牌组件 -->
    <IndexBrand />
    <!-- 5.运动专区 -->
    <IndexSports :sports="sports" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const {
      data: { msg: banner },
    } = await $axios.get("/banner");
    const {
      data: { msg: girdlist },
    } = await $axios.get("/girdlist");
    const {
      data: { msg: sports },
    } = await $axios.get("/sports");
    return {
      banner,
      girdlist,
      sports,
    };
  },
};
</script>
