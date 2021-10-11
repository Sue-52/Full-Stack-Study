<template>
  <div>
    <h3>Typescript 实现计算器</h3>
    <div>{{ count }}</div>
    <button @click="increase">增加</button>
    <button @click="decrease">减少</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class PageIndex extends Vue {
  count: number = 100;

  increase() {
    this.count++;
  }
  decrease() {
    this.count--;
  }
}
</script>

<style></style>
