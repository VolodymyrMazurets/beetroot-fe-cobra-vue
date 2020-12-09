import { films, littleStore, randomCoctail } from "./modules";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    lightTheme: null,
  },
  mutations: {
    changeTheme(state, payload) {
      state.lightTheme = payload;
    },
  },
  actions: {},
  modules: {
    randomCoctail,
    littleStore,
    films,
  },
});
