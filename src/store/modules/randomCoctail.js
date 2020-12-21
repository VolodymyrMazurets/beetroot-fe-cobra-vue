import { httpSevice } from "../../http";
import { randomCoctaiConstats } from "../constants";

const state = () => ({
  coctail: {},
});
const mutations = {
  [randomCoctaiConstats.CHANGE_RANDOM_COCTAIL](state, payload) {
    state.coctail = { ...payload };
  },
};
const actions = {
  [randomCoctaiConstats.FETCH_RANDOM_COCTAIL]: async ({ commit }) => {
    try {
      const data = await httpSevice.getRandomCoctail();
      if (data) {
        commit(randomCoctaiConstats.CHANGE_RANDOM_COCTAIL, data.drinks[0]);
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
