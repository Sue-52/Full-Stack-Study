## Nuxt

### NuxtServerInit

用于处理数据的持久化，因为 vuex 在实现数据共享后刷新页面，其共享的数据则会清空以至于数据无法持久保存。

使用 nuxtServerInit 调用它的时候会将页面的上下文对象作为第 2 个参数传给它

> 当我们想将服务端的一些数据传到客户端时，这个方法是灰常好用的

案例：使用 nuxtServerInit 使数据持久化 并且用户未登录则无法进入 my 的页面

> 使用插件 js-cookie 和 cookieparser

**pages/index.vue**

~~~vue
<template>
  <div>
    <div v-if="!$store.state.auth">
      <h1>首页</h1>
      请登录：<nuxt-link to="/login">Login</nuxt-link>
    </div>
    <div v-else>
      已登录，可以进入：<nuxt-liink to="/my">我的首页</nuxt-liink>
      <button @click="logout">推出登录</button>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  methods: {
    logout() {
      setTimeout(() => {
        this.$store.commit("UpdateAuth", "");
        Cookie.set("auth", "");
      }, 1000);
    }
  }
};
</script>
~~~


**pages/login.vue**

点击登录发送一个 cookie 到vuex
并将其设置到浏览器上

~~~vue
<template>
  <div>
    账号： <input type="text" name="" id="" /> 密码：
    <input type="password" name="" id="" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  methods: {
    login() {
      setTimeout(() => {
        const auth = "faefdxxfeaefz";
        this.$store.commit("UpdateAuth", auth);
        // 存储 cookie
        Cookie.set("auth", auth);
        this.$router.push("/my");
      }, 1000);
    }
  }
};
</script>
~~~

**pages/my.vue**

调用中间件

~~~vue
<template>
  <div>
    <h3>我的首页</h3>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: "auth"
};
</script>
~~~

**middleware/auth.js**

中间件用于重定向页面，在用户未登录无法跳转到别的页面

~~~js
export default ({ store, redirect }) => {
  if (!store.state.auth) {
    redirect("/");
  }
};
~~~

### Nuxt 中使用 typescript

在使用 `npx create-nuxt-app 项目名` 创建项目时，选择 typescript 即可

案例：计算器

**pages/index.vue**

需要安装包：

~~~js
npm install vue-property-decorator vue-class-component
~~~

~~~vue
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
~~~

### Nuxt 中使用 composition-api

只需安装相应的包即可

~~~js
npm install @vue/composition-api
~~~

将其注入到vue2实例上

**plugins/compositionApi.js**

~~~js
import Vue from 'vue';
import VueComposition  from '@vue/composition-api'

Vue.use(VueComposition);
~~~

**nuxt.config.js**

~~~js
  plugins: [
    '~/plugins/componsition-api'
  ],
~~~

**pages/index.vue**

~~~vue
<template>
  <div>
    <h1>count:{{ count }}</h1>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const count = ref(0);

    const increment = () => count.value++;
    const decrement = () => count.value--;

    return {
      count,
      increment,
      decrement,
    };
  },
});

</script>
~~~