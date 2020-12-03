import { findIndex } from "lodash";
const state = () => ({
  cart: [],
});
const mutations = {
  changeCartState(state, payload) {
    state.cart = [...state.cart, payload];
  },
  increaseItem(payload) {
    state.cart = { ...payload };
  },
  clearCart(state) {
    state.cart = [];
  },
};
const actions = {
  addItemToCart: async ({ commit, state }, payload) => {
    const isUnique = findIndex(state.cart, ["id", payload.id]);
    if (isUnique === -1) {
      const item = { ...payload, qty: 1 };
      commit("changeCartState", item);
    } else {
      const shallowCopy = [...state.cart];
      shallowCopy[isUnique].qty += 1;
      commit("increaseItem", shallowCopy);
    }
  },
  clearCartState: async ({ commit }) => {
    commit("clearCart");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

// _.findIndex(users, (e) => e.id);
