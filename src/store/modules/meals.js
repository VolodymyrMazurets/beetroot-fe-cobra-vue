import { httpSevice } from '../../http';
import { message } from 'ant-design-vue';

const state = () => ({
  meals: {},
  recipe: {},
  loading: false,
  error: false,
});
const mutations = {
  mealsReques(state) {
    state.loading = true;
    state.error = false;
  },
  mealsSuccess(state) {
    state.loading = false;
    state.error = false;
  },
  mealsFailure(state) {
    state.loading = false;
    state.error = true;
  },
  mealsUpdate(state, payload) {
    state.meals = { ...payload };
  },
  recipeUpdate(state, payload) {
    state.recipe = { ...payload };
  },
};
const actions = {
  getMealsByQuery: async (
    { commit },
    { query = '', number = 10, offset = 0 },
  ) => {
    commit('mealsReques');
    const result = await httpSevice.getComplexSearchMeals(
      query,
      number,
      offset,
    );
    if (result) {
      commit('mealsSuccess');
      commit('mealsUpdate', result);
    } else {
      commit('mealsFailure');
      message.error(result);
    }
  },
  getRecipeById: async ({ commit }, payload) => {
    commit('mealsReques');
    const result = await httpSevice.getRecipeById(payload);
    if (result) {
      commit('mealsSuccess');
      commit('recipeUpdate', result);
    } else {
      commit('mealsFailure');
      message.error(result);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
