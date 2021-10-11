const cookieperser = require("cookieparser");

export const state = () => {
  return {
    auth: ""
  };
};

export const mutations = {
  UpdateAuth(state, payload) {
    state.auth = payload;
  }
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    // console.log(context);
    // console.log(app);
    // console.log(commit);
    // console.log("---------");
    // console.log(req);
    // 将cookie的字符串转换为 对象
    let auth = "";

    if (req.headers.cookie) {
      let parser = cookieperser.parse(req.headers.cookie);
      auth = parser.auth;
    }
    commit("UpdateAuth", auth);
  }
};
