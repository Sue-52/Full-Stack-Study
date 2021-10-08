## Nuxt 笔记

### Loading 初始加载设置

`loading` 属性为您提供了禁用特定页面上的默认加载进度条的选项。

**components/loadingBar.vue**

用于设置加载页面用来显示

~~~vue
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
~~~

**nuxt.config.js 全局配置loading属性**

~~~js
  // 全局配置 loading 加载页面
  loading: "~/components/loadingBar.vue"
~~~

**pages/index.vue 用来显示加载页面**

~~~vue
<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    // $nextTick 确保所有的dom元素和方法都加载完成后调用loading
    this.$nextTick(() => {
      // 调用全局配置的loading方法
      this.$nuxt.$loading.startLoading();
      // 设置异步的定时器模拟请求
      setTimeout(() => {
        this.$nuxt.$loading.endLoading();
      }, 5000);
    });
  }
};
</script>
~~~

效果图：
![loading 加载](./img/loading.gif)

### Head 配置

TDK：（Title、Description、Keywords）

head的配置主要用于配置页面的 `头部标签(Head)` 和 `html 属性`
便于搜索引擎的 SEO

**pages/index.vue 在页面中配置**

~~~vue
<script>
export default {
  head() {
    return {
    // 标题
      title: "other",
      meta: [
        {
        // 描述
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
}
</script>
~~~

**nuxt.config.js 全局配置TDK**

~~~js
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-vue",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "不知道描述啥" },
      { hid: "Keywords", name: "Keywords", content: "Home Page" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
~~~

### Fetch

fetch 方法用于在渲染页面前填充应用的状态树（store）数据， 与 asyncData 方法类似，不同的是它不会设置组件的数据。

如果页面组件设置了 fetch 方法，它会在组件每次加载前被调用（在服务端或切换至目标路由之前）。

fetch 方法的第一个参数是页面组件的上下文对象 context，我们可以用 fetch 方法来获取数据填充应用的状态树。为了让获取过程可以异步，你需要返回一个 Promise，Nuxt.js 会等这个 promise 完成后再渲染组件。

**plugins/axios.js 配置路由**

~~~js
import axios from "axios";

export default (context, inject) => {
  axios.defaults.baseURL = "https://cnodejs.org/api/v1";
  inject("api", {
    getTopics(path) {
      return axios.get(path);
    }
  });
};
~~~

**nuxt.config.js 全局配置**

~~~js
  plugins: ["~/plugins/axios.js"],
~~~

**store/index.js vuex配置**

~~~js
export const state = () => {
  return {
    list: []
  };
};

export const mutations = {
  updateList(state, payload) {
    state.list = payload;
  }
};
~~~

**pages/index.vue 使用**

~~~js
  async fetch() {
    const {
      data: { data: topics }
    } = await this.$api.getTopics("/topics");
    this.$store.commit("updateList", topics);
  }
~~~

~~~html
    <ul>
      <li v-for="item in $store.state.list" :key="item.id">
        <a href="#">{{ item.title }}</a>
      </li>
    </ul>
~~~

数据分vuex中公共数据还有页面中的数据， 对于接口返回的数据处理，存放到vuex中就使用fetch， 否则就是asyncData

fetch 只能在data上先声明变量， 在fetch中完成data上数据的修改，  最适合做掉接口，拿数据，存vuex