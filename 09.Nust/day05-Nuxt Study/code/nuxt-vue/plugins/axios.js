import axios from "axios";

export default (context, inject) => {
  axios.defaults.baseURL = "https://cnodejs.org/api/v1";
  inject("api", {
    getTopics(path) {
      return axios.get(path);
    },
    getTopicsDetail(path) {
      return axios.get(path);
    }
  });
};
