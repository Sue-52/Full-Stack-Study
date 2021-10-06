## NuxtJs 笔记

### asyncData

NuxtJs自带的扩展函数，可以设置组件的数据之前能异步获取或处理数据

1. 只能在页面文件中使用（pages目录文件下）
2. 在获取页面初始化异步数据时使用

在使用 asyncData 时，获取到的数据会显示在页面的源代码中，有利于搜索引擎的 SEO

**特点：**

1. 通过 return 一个对象，对象中的数据可以直接引用到页面上
2. 能获取到很多不同的参数；如：query、params、route等
3. 其可以在服务端或路由更新前被调用
   - asyncData 函数默认在服务器段渲染
   - asnycData 函数在当前所在页面刷新后在服务端渲染
   - asyncData 函数在路由跳转时在客户端渲染

使用方式：

~~~vue
<template>
     <div class="home">
         <h1>{{ msg }}</h1>
     </div>
</template>

<script>
export default {
    asyncData () {
        return {
            msg:'hello nuxt.js'
        }
    }
}
</script>
~~~

**返回 Promise：**

~~~vue
<template lang="pug">
    <div class="home">
        <ul>
            <li v-for="item in content" :key="item.id">{{ item.title }}</li>
        </ul> 
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            name: "zs"
        };
    }
    //#region 接口测试
    async asyncData(context) {
        const {
            data: { data: content }
        } = await axios.get("https://cnodejs.org/api/v1/topics");
        // console.log(data);
        return {
            content,
        };
    }
    //#endregion
};
</script>
<style lang="scss"></style>
~~~

> nuxt.js 会等待该`Promise`被解析之后才会设置组件的数据，从而渲染组件.

**测试是否在客户端还是服务端：**

index.vue

~~~vue
<template lang="pug">
    <div class="home">
        <div>
            <h1>首页</h1>
            <div v-if="rendering == 'server'">
                <p>
                    页面渲染在 <strong>{{ rendering }}</strong>
                </p>
                <p>
                    页面刷新后渲染在 <strong>{{ rendering }}</strong>
                </p>
            </div>
            <p v-if="rendering == 'client'">页面跳转后渲染在{{ rendering }}</p>
            <h3>刷新页面后再看效果</h3>
            <nuxt-link to="/about">跳转到关于页面后再看效果</nuxt-link>
        </div> 
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            name: "zs"
        };
    }
    async asyncData() {
        return {
            rendering: process.server ? "server" : "client"
        };
    }
    //#endregion
};
</script>
<style lang="scss"></style>
~~~

about.vue

~~~vue
<template>
    <div class="about">
        <h1>关于页面</h1>
        <div v-if="rendering == 'server'">
            <p>
                页面渲染在 <strong>{{ rendering }}</strong>
            </p>
            <p>
                页面刷新后渲染在 <strong>{{ rendering }}</strong>
            </p>
        </div>
        <p v-if="rendering == 'client'">页面跳转后渲染在{{ rendering }}</p>
        <h3>刷新页面后再看效果</h3>
        <nuxt-link to="/">跳转到首页再看效果</nuxt-link>
    </div>
</template>

<script>
export default {
    asyncData() {
        return {
            rendering: process.server ? "server" : "client"
        };
    }
};
</script>
~~~

> asyncData函数在页面刷新或者路由跳转时都会触发，刷新在服务端触发，路由切换在客户端触发


### 资源文件

**1. 使用css/html预处理器**

#### less 

安装less：
~~~javascript
npm install less less-loader@7.3.0
~~~

安装@nuxtjs/style-resources：
~~~javascript
npm install -D @nuxtjs/style-resources
~~~

配置nuxt.config.js
~~~js
css: ['~/assets/less/base.less'],  // 基础样式
 buildModules: [
    '@nuxtjs/style-resources'
  ],
  // global style resources 配置全局less变量
  styleResources:{
     less:[ '~/assets/less/variables.less']
  },
~~~

#### scss

安装scss：
~~~js
npm install -D sass sass-loader@10 fibers
~~~

安装@nuxtjs/style-resources：
~~~javascript
npm install -D @nuxtjs/style-resources
~~~

配置nuxt.config.js：
~~~js
 css: [
    '~/assets/scss/base.scss'
  ],
 buildModules: [
    '@nuxtjs/style-resources'
  ],
  // global style resources
  styleResources:{
     scss:[
       '~/assets/scss/variables.scss'
     ]
  },
~~~

#### Pug

安装Pug：
~~~js
npm install -D pug pug-plain-loader
~~~

使用：

~~~vue
<template lang="pug">
  div
    h1 Hello Nuxters! 👋
    p This page uses less add scss
</template>
~~~

