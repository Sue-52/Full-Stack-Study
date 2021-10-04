<template>
    <div class="home">
        <h3>Home Page -- 页面组件</h3>
        <div>
            <Goods />
        </div>
        <!-- <nuxt-link to="/about">跳转到about页面</nuxt-link> -->
        <ul>
            <li><nuxt-link to="/goods/100">goods/100</nuxt-link></li>
            <li><nuxt-link to="/goods/100/200">goods/100/200</nuxt-link></li>
        </ul>
        <ul>
            <li>
                <nuxt-link to="/searchId?cid=100">searchId/cid=100</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/searchId?cid=100&gid=200"
                    >searchId/cid=100&gid=200</nuxt-link
                >
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>
