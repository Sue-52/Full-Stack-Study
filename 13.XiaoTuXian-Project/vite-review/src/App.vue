<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="errorMsg">{{ errorMsg }}</div>
    <ul v-else-if="data && data.length > 0">
      <li v-for="item in data" :key="item.id">{{ item.title }}</li>
    </ul>
    <div v-else>暂无数据</div>
    <!-- 获取 DOM 对象 -->
    <!-- TelePort 组件的使用 -->
    <!-- 使组件可以在任意的地方使用且样式不被改变 -->
    <!-- <teleport to="#modal">
      <Modal></Modal>
    </teleport> -->
    <!-- 使用 provide，inject函数 -->
    <B />
    <!-- 动画transition -->
    <transition>
      <h1 v-if="show">Hello World!!!</h1>
    </transition>
    <button @click="show = !show">Button</button>
  </div>
</template>

<script>
import B from "./components/B.vue";
import Modal from "./components/Modal.vue";
import axios from "axios";
import { ref, provide } from "vue";
export default {
  name: "App",
  setup() {
    const { data, loading, errorMsg } = useList();
    const Person = ref({ name: "zs", age: 22, gender: "男" });
    provide("Person", Person);
    const show = ref(false);
    return {
      data,
      loading,
      errorMsg,
      show,
    };
  },
  components: {
    Modal,
    B,
  },
};

function useList() {
  const data = ref();
  const loading = ref(false);
  const errorMsg = ref();
  (async function getData() {
    loading.value = true;
    try {
      let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(response);
      data.value = response.data;
    } catch (error) {
      errorMsg.value = error.message;
    }
    loading.value = false;
  })();
  return {
    data,
    loading,
    errorMsg,
  };
}
</script>

<style>
.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: opacity 4s ease-in;
}
.v-leave-from {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: opacity 4s ease-out;
}
</style>
