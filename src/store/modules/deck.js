import axios from "axios"

import { handleAxiosError } from "../../utils/errorHandler"
const url = import.meta.env.VITE_BASE_URL;

export default {
  namespaced: true,
  state() {
    return {
      decks: [],
    }
  },
  mutations: {
    SET_DECKS(state, payload) {
      state.decks = payload
    }
  },
  actions: {
   async newDeck(_, payload) {
    const token = localStorage.getItem("accessToken"); 
    try {
      await axios.post(`${url}/api/v2/list`, payload,
        { 
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        }
      );
    } catch(error) {
      handleAxiosError(error);
    }
   },

   async fetchDecks({ commit }, userId) {
    const token = localStorage.getItem("accessToken");
    try {
     const decks = await axios.get(`${url}/api/v2/list/user_id/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });     
      commit("SET_DECKS", decks.data.data);
    } catch(error) {
      handleAxiosError(error);
    }
   }
  },
  getters: {
    decks: (state) => {
      return state.decks;
    }
  }
}

//https://wrtn.ai/chat/u/65d591e80c06023ae70af73a/c/661569320b45829743a93612?type=u