<template>
  <div class="loading" v-if="isLoading">
    <h1>正在加载😀......</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    startLoading() {
      this.isLoading = true;
    },
    endLoading() {
      this.isLoading = false;
    }
  }
};
</script>

<style>
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
