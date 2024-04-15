import { createRouter, createWebHistory } from "vue-router";

import AuthLayout from './pages/AuthLayout.vue'
import MainPage from "./pages/MainPage.vue";
import VocaLearn from "./pages/VocaLearn.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/auth", component: AuthLayout },
    { path: "/home", component: MainPage },
    { path: "/voca-learn", component: VocaLearn },
  ],
});

export default router;