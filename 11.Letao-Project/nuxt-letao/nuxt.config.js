export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-letao",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["vant/lib/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // vant 框架
    "~/plugins/vant.js",
    // axios 封装
    "~/plugins/axios",
    //  api 封装
    "~/plugins/axios/api"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // axios 全局使用
    "@nuxtjs/axios",
    // 代理
    "@nuxtjs/proxy"
  ],
  // 使用 NuxtJs 自带的代理进行跨域访问
  // 1. 前端跨域处理：只需在我们请求时能获取到数据；⭐
  // 2. 后端跨域处理：会导致所有的用户都可以请求到该数据
  axios: { proxy: true, prefix: "/api" },
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      pathRewrite: {
        "^/api": "/"
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // 修改服务，后台NodeJs服务为3000端口
  server: {
    ip: "localhost",
    port: 8080
  },
  loading: "~/components/Loading.vue"
};
