export default {
  namespaced: true,
  state() {
    return {
      isDeckForm: false,
    };
  },
  mutations: {
    SET_IS_DECK_FORM(state, payload) {
      state.isDeckForm = payload;
    },
  },
  actions: {
    toggleDeckForm({ commit }, payload) {
      commit("SET_IS_DECK_FORM", payload);
    },
  },
  getters: {
    isDeckForm: (state) => {
      return state.isDeckForm;
    },
  },
};
