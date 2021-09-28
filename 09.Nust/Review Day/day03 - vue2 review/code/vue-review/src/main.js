import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import axios from "axios";
// 设置基准地址
axios.defaults.baseURL = "http://localhost:3000";
// 将axios挂载到vue原型上，使其可是全局使用
Vue.prototype.$axios = axios;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
