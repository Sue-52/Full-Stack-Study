<template>
  <div>
    <button @click="getData">按钮</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      data: null,
    };
  },
  methods: {
    getData() {
      // 全局使用挂在的axios
      this.$axios({
        url:"/api/getInfo",
        method:"GET"
      }).then((res)=>{
        console.log(res)
      })
    },  
  },
};
</script>

<style scoped>
</style>