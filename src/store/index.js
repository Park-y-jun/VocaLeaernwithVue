import { createStore } from "vuex";
import axios from "axios";

import { handleAxiosError } from "../utils/errorHandler";

const url = import.meta.env.VITE_BASE_URL;

const store = createStore({
  modules: {},
  state() {
    return {
      loginState: false,
      user: null,
    };
  },
  mutations: {
    SET_LOGIN_STATE(state, payload) {
      state.loginState = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await axios.post(`${url}/api/v2/user/sign-in`, payload);
        commit('SET_USER', response.data.data);
        commit('SET_LOGIN_STATE', true);
      } catch (error) {
        handleAxiosError(error);
      }
    },

    async register({ commit }, payload) {
      try {
        await axios.post(`${url}/api/v2/user/sign-up`, payload);
      } catch (error) {
        handleAxiosError(error);
      }
    },  
  },
  getters: {
    loginState: (state) =>
    { return state.loginState },
    user: (state) => 
    {
      return state.user;
    }
  },
});

export default store;
