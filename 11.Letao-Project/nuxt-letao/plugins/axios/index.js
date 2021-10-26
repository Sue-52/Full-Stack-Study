import { httpcode } from "./httpcode";
import { Toast } from "vant";
export default function({ $axios, store, redirect }, inject) {
  // 请求拦截
  $axios.onRequest(config => {
    // Token 设置
    if (store.state.token) {
      // 设置请求头
      $axios.setHeader("Authorization", `Bearer ${store.state.token}`);
    }
    // console.log("Making request to " + config.url);
    return config;
  });
  // 响应拦截
  $axios.onResponse(res => {
    // 判断相应状态，并是由vant的提示发送信息
    const { status, msg } = res.data;
    if (status !== 200) {
      Toast(msg);
    }
  });
  // 错误拦截
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    Toast(httpcode[code]);
    if (code === 404) {
      redirect("/404");
    } else if (code == 401) {
      redirect("/my/login");
    }
  });
  // 注册插件：封装请求方法
  const requestParams = {};
  // 便利请求方法
  ["$get", "$post", "$put", "$delete"].forEach(method => {
    // 以 key:function(){} 方式放入到 requestParams中
    requestParams[method] = function(url, data) {
      return $axios[method](url, data);
    };
  });
  inject("request", requestParams);
}
