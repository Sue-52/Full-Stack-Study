<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { verify } from "~/utils";
import { Toast } from "vant";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations("updateToken"),
    async onSubmit(values) {
      const msg = verify.username(this.username) || verify.password(this.password);
      if (msg) return Toast(msg);
      console.log("submit", values);
      // 1.校验通过
      // const { code, token } = await this.$api.Login(values);
      const data = await this.$api.Login(values);
      console.log(data);
      if (code == 200) {
        // 存储token--localstorage
        this.updateToken(token);
      }
    },
  },
};
</script>

<style></style>
