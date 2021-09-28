import { createApp } from 'vue'
import App from './App.vue'

// bootstrap 样式引入
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App)

app.directive("focus",{
  mounted(el){
    el.focus()
  }
})

app.mount("#app");
