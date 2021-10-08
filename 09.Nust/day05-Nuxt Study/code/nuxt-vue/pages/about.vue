<template>
  <div>
    <title>{{ topic.title }}</title>
    <div v-html="topic.content"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ query, app }) {
    const {
      data: { data: topic }
    } = await app.$api.getTopicsDetail(`/topic/${query.id}`);
    // console.log(data);
    return {
      topic
    };
  }
};
</script>

<style></style>
