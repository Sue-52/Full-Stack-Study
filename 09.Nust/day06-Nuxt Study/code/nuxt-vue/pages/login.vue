<template>
  <div>
    账号： <input type="text" name="" id="" /> 密码：
    <input type="password" name="" id="" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  methods: {
    login() {
      setTimeout(() => {
        const auth = "faefdxxfeaefz";
        this.$store.commit("UpdateAuth", auth);
        // 存储 cookie
        Cookie.set("auth", auth);
        this.$router.push("/my");
      }, 1000);
    }
  }
};
</script>

<style></style>
