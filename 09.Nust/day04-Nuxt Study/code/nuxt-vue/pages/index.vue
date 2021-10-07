<template>
  <div>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />

    <h1>Vuex 状态管理</h1>
    <h3>{{ count }}</h3>
    <h3>{{ this.$store.state.todoList.list }}</h3>
    <button @click="increase(10)">同步增加</button>
    <button @click="asyncIncrease(20)">异步增加</button>
    <button @click="add">显示随机数</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    // count() {
    //   return this.$store.state.count;
    // }
    ...mapState(["count"])
  },
  methods: {
    // increase(num) {
    //   this.$store.commit("increase", num);
    // },
    ...mapMutations(["increase"]),
    // asyncIncrease(num) {
    //   this.$store.dispatch("asyncIncrease", num);
    // }
    ...mapActions(["asyncIncrease"]),
    add() {
      const randmon = this.randomNum(0, 100);

      // 修改count值
      this.$store.commit("changeNum", randmon);
      // 添加到list
      this.$store.commit("todoList/changeList", randmon);
    },

    randomNum(min, max) {
      //  Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
};
</script>
