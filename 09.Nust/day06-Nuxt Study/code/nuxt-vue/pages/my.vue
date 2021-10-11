<template>
  <div>
    <h3>我的首页</h3>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: "auth"
};
</script>

<style></style>
