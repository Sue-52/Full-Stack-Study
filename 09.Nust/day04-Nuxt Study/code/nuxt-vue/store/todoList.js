export const state = () => {
  return {
    list: [10, 20, 30, 40, 50]
  };
};

export const mutations = {
  changeList(state, payload) {
    state.list.push(payload);
  }
};
