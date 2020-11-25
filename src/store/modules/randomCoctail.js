import { httpSevice } from "../../http";

const state = () => ({
  coctail: {},
});
const mutations = {
  changeRandomCoctail(state, payload) {
    state.coctail = { ...payload };
  },
};
const actions = {
  fetchRandomCoctail: async ({ commit }) => {
    try {
      const data = await httpSevice.getRandomCoctail();
      if (data) {
        commit("changeRandomCoctail", data.drinks[0]);
      }
    } catch (error) {
      console.error(error);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
