import { createRouter, createWebHistory } from "vue-router";

import SignIn from "./pages/SignIn.vue";
import SignUp from "./pages/SignUp.vue";
import MainPage from "./pages/MainPage.vue";
import VocaLearn from "./pages/VocaLearn.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/sign-in", component: SignIn },
    { path: "/sign-up", component: SignUp },
    { path: "/home", component: MainPage, meta: { headerType: "main" } },
    { path: "/voca-learn", component: VocaLearn, meta: { headerType: "sub" } },
  ],
});

export default router;