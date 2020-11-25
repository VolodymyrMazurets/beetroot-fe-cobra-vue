import Vue from "vue";
import Vuex from "vuex";
import { randomCoctail } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    randomCoctail,
  },
});
