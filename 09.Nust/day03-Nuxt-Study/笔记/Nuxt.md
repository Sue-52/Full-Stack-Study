## Nuxt day03

### 嵌套路由

在布局组件中我们使用 `<Nuxt />` 占位符来展示路由的切换，

但是在页面组件中我们使用`<NuxtChild />` 占位符来展示嵌套路由的页面

并且再写嵌套路由是，必须以其父组件为名创建出一个文件夹并在其中写如子组件

【操作】案例：

**layouts/default.vue**

~~~vue
<template>
  <div>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home page</nuxt-link></li>
        <li><nuxt-link to="/parent">parent page</nuxt-link></li>
        <!-- <li>
          <span :class="{ active: flag }" @click="goTo('/', 1)">Home</span>
        </li>
        <li>
          <span :class="{ active: !flag }" @click="goTo('/parent', 2)"
            >parent</span
          >
        </li> -->
      </ul>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  methods: {
    //#region JS切换
    goTo(path, num) {
      this.flag = true;
      if (this.flag && num == 1) {
        this.$router.push({ path });
      } else {
        this.flag = false;
        this.$router.push({ path });
      }
    }
    //#endregion
  }
};
</script>

<style>

</style>

~~~

**pages/parent.vue**

~~~vue
<template>
  <div>
    <h1>Parent Page</h1>
    <nav>
      <ul>
        <li><nuxt-link to="/parent/child1">child1</nuxt-link></li>
        <li><nuxt-link to="/parent/child2">child2</nuxt-link></li>
      </ul>
    </nav>
    <main>
      <NuxtChild />
    </main>
  </div>
</template>

<script>
export default {};
</script>
~~~

**pages/parent/index.vue**

~~~vue
<template>
  <div>
    请点击
  </div>
</template>

<script>
export default {};
</script>

<style></style>
~~~

**pages/parent/child1.vue**

~~~vue
<template>
  <div>
    <h3>child1</h3>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
~~~

**pages/parent/child2.vue**

~~~vue
<template>
  <div>
    <h3>child2</h3>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
~~~

### 过渡/动画

在使用过渡时，其自带相当于vue的过渡相同：

![Transition Diagram](https://cn.vuejs.org/images/transition.png)

只不过在 NuxtJs 中 v- 被改成了 page-

~~~css
.page-enter,.page-enter-active
.page-leave-active,.page-leave-to
~~~

并且在我们使用动画时，需要在所在页面中使用 `transition:"动画名"`

其`动画名`来代替page进行操作

【操作】案例：

**layouts/default.vue**

~~~vue
<template>
  <div>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home page</nuxt-link></li>
        <li><nuxt-link to="/parent">parent page</nuxt-link></li>
        <li><nuxt-link to="/bounce">bounce page</nuxt-link></li>
      </ul>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
};
</script>

<style>

.page-enter,
.page-leave-to {
  opacity: 0;
}
.page-enter-active,
.page-leave-active {
  transition: opacity, 0.5s;
}

.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  animation: bounce-out 0.8s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

nav a {
  color: inherit;
  text-decoration: none;
}

a.nuxt-link-exact-active {
  color: #00c58e;
}

main {
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}

nav {
  padding: 0 1rem;
}
</style>

~~~

**pages/bounce.vue**

~~~vue
<template>
  <div>
    Bounce Page
  </div>
</template>

<script>
export default {
  transition: "bounce"
};
</script>

<style></style>
~~~

### 中间件

在使用自定义中间件时，我们需要定义一个 middleware 的文件夹由于收录所有的自定义中间件

1. 全局使用：只需在 nuxt.config.js 文件中进行配置

~~~js
  // 配置全局中间件;页面刷新时运行在服务端和路由切换都会执行运行在客户端
  router: {
    middleware: "auth"
  }
~~~

2. 布局组件使用：只需在布局页面中单独调用即可

~~~js
middleware: "auth"
~~~

3. 页面组件使用：同上

### 插件

在使用自定义插件时，必须创建出 plugins 的文件夹用于收录自定义插件

1. 全局使用：只需在 nuxt.config.js 文件中进行配置

~~~js
  plugins: [
    // "~/plugins/test.js", // 默认插件，会在客户端和服务端初始化时运行一次，刷新时运行一次
  ],
~~~

2. 客户端使用：配置

~~~js
  plugins: [
    { src: "~/plugins/test.js", mode: "client" } // 设置客户端运行
  ],
~~~

或者在命名时加上 `xxx.client.js`

3. 服务端使用：配置

~~~js
  plugins: [
    { src: "~/plugins/test.js", mode: "server" } // 设置服务端运行
  ],
~~~

或者在命名时加上 `xxx.server.js`