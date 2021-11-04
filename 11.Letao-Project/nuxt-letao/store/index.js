export const state = () => {
  return {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiYWRtaW4xMjMiLCJwYXNzd29yZCI6IjEyMzQ1NjcifSwiaWF0IjoxNjM1NDA0NTYxLCJleHAiOjE2MzU0MDgxNjF9.M_nUV6nW5TsnDQWT4hd2RPUUDOvGT6-2wnsgsh6e6R8",
    userInfo: {}
  };
};
export const mutations = {
  // 修改用户信息数据
  updateUserInfo(state, payload) {
    state.userinfo = payload;
  },
  updateToken(state, payload) {
    state.token = payload;
  }
};
export const action = {};
