export const state = () => {
  return {
    list: []
  };
};

export const mutations = {
  updateList(state, payload) {
    state.list = payload;
  }
};
