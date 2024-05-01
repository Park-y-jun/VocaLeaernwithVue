import axios from "axios";

import { handleAxiosError } from "../../utils/errorHandler";
const url = import.meta.env.VITE_BASE_URL;

export default {
  namespaced: true,
  state() {
    return {
      questions: [],
    };
  },
  mutations: {
    SET_QUESTIONS(state, payload) {
      state.questions = payload;
    },
  },
  actions: {
    async newQuestion(_, payload) {
      const token = localStorage.getItem("accessToken");
      try {
        await axios.post(`${url}/api/v2/word`, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        handleAxiosError(error);
      }
    },

    async fetchQuestion({ commit }, deckId) {
      const token = localStorage.getItem("accessToken");
      try {
        const questions = await axios.get(`${url}/api/v2/word/list_id/${deckId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("SET_QUESTIONS", questions.data.data);
      } catch (error) {
        handleAxiosError(error);
      }
    },

    async modifyDifficulty(_, payload) {
      const token = localStorage.getItem("accessToken");
      try {
        await axios.patch(
          `${url}/api/v2/word/list_id/${payload.deckId}/word_id/${payload.questionId}`,
          {
            difficulty: payload.difficulty,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        handleAxiosError(error);
      }
    },
  },
  getters: {
    questions: (state) => {
      return state.questions;
    },
  },
};