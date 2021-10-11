<template>
  <div>
    <div v-if="!$store.state.auth">
      <h1>首页</h1>
      请登录：<nuxt-link to="/login">Login</nuxt-link>
    </div>
    <div v-else>
      已登录，可以进入：<nuxt-liink to="/my">我的首页</nuxt-liink>
      <button @click="logout">推出登录</button>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  methods: {
    logout() {
      setTimeout(() => {
        this.$store.commit("UpdateAuth", "");
        Cookie.set("auth", "");
      }, 1000);
    }
  }
};
</script>
