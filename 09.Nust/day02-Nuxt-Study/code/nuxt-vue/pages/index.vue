<template lang="pug">
    <div class="home">
        //- <h1>{{ msg }}</h1> 
        //- <h1>{{ name }}</h1>
        //- <ul>
        //-     <li v-for="item in content" :key="item.id">{{ item.title }}</li>
        //- </ul> 
        //- <div>
        //-     <h1>首页</h1>
        //-     <div v-if="rendering == 'server'">
        //-         <p>
        //-             页面渲染在 <strong>{{ rendering }}</strong>
        //-         </p>
        //-         <p>
        //-             页面刷新后渲染在 <strong>{{ rendering }}</strong>
        //-         </p>
        //-     </div>
        //-     <p v-if="rendering == 'client'">页面跳转后渲染在{{ rendering }}</p>
        //-     <h3>刷新页面后再看效果</h3>
        //-     <nuxt-link to="/about">跳转到关于页面后再看效果</nuxt-link>
        //- </div> 
    div
        h1 芜湖
        p This is using by Pug

        <h1>Home 首页 👏</h1>
        <h2>Home 首页 👏</h2>
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
    // async asyncData(context) {
    //     // console.log(context);
    //     const {
    //         data: { data: content }
    //     } = await axios.get("https://cnodejs.org/api/v1/topics");
    //     // console.log(data);
    //     return {
    //         content,
    //         rendering: process.server ? "server" : "client"
    //     };
    // }
    //#endregion
};
</script>
<style lang="scss"></style>
