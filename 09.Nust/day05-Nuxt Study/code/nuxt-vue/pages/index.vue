<template>
  <div>
    <h1>Home Page</h1>
    <ul>
      <li v-for="item in $store.state.list" :key="item.id">
        <nuxt-link :to="`/about?id=${item.id}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   // $nextTick 确保所有的dom元素和方法都加载完成后调用loading
  //   this.$nextTick(() => {
  //     // 调用全局配置的loading方法
  //     this.$nuxt.$loading.startLoading();
  //     // 设置异步的定时器模拟请求
  //     setTimeout(() => {
  //       this.$nuxt.$loading.endLoading();
  //     }, 5000);
  //   });
  // },
  head() {
    return {
      title: "other",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  async fetch() {
    const {
      data: { data: topics }
    } = await this.$api.getTopics("/topics");
    this.$store.commit("updateList", topics);
  }
};
</script>
