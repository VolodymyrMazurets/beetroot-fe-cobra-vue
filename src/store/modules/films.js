import { httpSevice } from "../../http";
import { map } from "lodash";
import { message } from "ant-design-vue";

const state = () => ({
  films: [],
  totalResults: null,
  loading: false,
  error: false,
});
const mutations = {
  filmsRequest(state) {
    state.loading = true;
    state.error = false;
  },
  filmsSuccess(state) {
    state.loading = false;
    state.error = false;
  },
  filmsFailure(state) {
    state.loading = false;
    state.error = true;
  },
  filmsUpdate(state, payload) {
    state.films = [...payload.films];
    state.totalResults = payload.totalResults;
  },
};
const actions = {
  getFilmsByQuery: async ({ commit }, { query, page }) => {
    commit("filmsRequest");
    const result = await httpSevice.getFilmsByQuery(query, page);
    if (result?.Response === "True") {
      commit("filmsSuccess");
      // const mapedData = (result?.Search || []).map((e, idx) => {
      //   return { ...e, test: idx };
      // });
      const mapedData = map(result?.Search, (e, idx) => {
        return { ...e, indexOf: idx };
      });

      commit("filmsUpdate", {
        films: mapedData,
        totalResults: result?.totalResults,
      });
    } else {
      commit("filmsFailure");
      message.error(result?.Error);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
