<template>
  <div class="container">
    <!-- top -->
    <header>
      <van-nav-bar :title="title" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </header>
    <!-- content -->
    <main>
      <Nuxt />
    </main>
    <!-- footer -->
    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item name="index" to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item name="category" to="/category" icon="bag-o"
          >分类</van-tabbar-item
        >
        <van-tabbar-item name="cart" to="/cart" icon="shopping-cart-o"
          >购物车</van-tabbar-item
        >
        <van-tabbar-item name="my" to="/my" icon="friends-o">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: this.$route.name,
      title: "",
    };
  },
  methods: {
    //#region 页面刷新后切换路由且变更标题
    refreshHandle() {
      this.title = {
        index: "首页",
        category: "分类",
        cart: "购物车",
        my: "我的",
      }[this.$route.name];
    },
    //#endregion
  },
  mounted() {
    this.refreshHandle();
  },
  watch: {
    //   监听路由切换
    $route() {
      // console.log(this.$route);
      this.refreshHandle();
    },
  },
};
</script>

<style></style>
