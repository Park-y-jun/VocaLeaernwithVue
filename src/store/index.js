import { createStore } from "vuex";
import axios from "axios";

import { handleAxiosError } from "../utils/errorHandler";
import deckModule from './modules/deck'
import isModule from './modules/is'

const url = import.meta.env.VITE_BASE_URL;

const store = createStore({
  modules: {
    deck: deckModule,
    is: isModule
  },
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
        commit("SET_USER", response.data.data);
        commit("SET_LOGIN_STATE", true);
        localStorage.setItem("accessToken", response.data.data.accessToken);
      } catch (error) {
        handleAxiosError(error);
      }
    },

    async register(_, payload) {
      try {
        await axios.post(`${url}/api/v2/user/sign-up`, payload);
      } catch (error) {
        handleAxiosError(error);
      }
    },

    checkLoginState({ commit }, _) {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        commit("SET_LOGIN_STATE", true);
      } else {
        commit("SET_LOGIN_STATE", false); 
      }
    },
    
    logout({ commit }, _) {
      localStorage.removeItem("accessToken");
      commit("SET_LOGIN_STATE", false);
      commit("SET_USER", null);
    }
  },
  getters: {
    loginState: (state) => {
      return state.loginState;
    },
    user: (state) => {
      return state.user;
    },
  },
});

export default store;
