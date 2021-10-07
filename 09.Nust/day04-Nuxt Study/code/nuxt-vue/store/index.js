// state 定义数据
export const state = () => {
  return {
    count: 0
  };
};

// 定义 mutations 同步方法
export const mutations = {
  increase(state, payload) {
    state.count += payload;
  },
  changeNum(state, payload) {
    state.count = payload;
  }
};

// 定义 actions 异步方法
export const actions = {
  asyncIncrease({ commit }, payload) {
    setTimeout(() => {
      // 因为一部无法直接进行修改数值，所以现需要调用同步方法进行操作
      commit("increase", payload);
    }, 1000);
  }
};
