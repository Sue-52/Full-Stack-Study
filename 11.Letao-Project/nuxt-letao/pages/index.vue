<template>
  <div>
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
  async asyncData({ $api }) {
    const { msg: banner } = await $api.IndexBanner();
    const { msg: girdlist } = await $api.IndexGirdlist();
    const { msg: sports } = await $api.IndexSports();
    return {
      banner,
      girdlist,
      sports,
    };
  },
};
</script>
