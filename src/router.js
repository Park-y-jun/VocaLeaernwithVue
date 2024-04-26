import { createRouter, createWebHistory } from "vue-router";

import store from  './store/index'
import SignIn from "./pages/SignIn.vue";
import SignUp from "./pages/SignUp.vue";
import MainPage from "./pages/MainPage.vue";
import VocaLearn from "./pages/VocaLearn.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/sign-in", component: SignIn, name: "signin" },
    { path: "/sign-up", component: SignUp, name: "signup" },
    { path: "/home", component: MainPage, meta: { headerType: "main" } },
    { path: "/voca-learn", component: VocaLearn, meta: { headerType: "sub" } },
  ],
});

router.beforeEach((to, from, next) => {
  
  const isLoggedIn = store.getters.loginState;
  if((to.name === 'signin' || to.name === 'signup') && isLoggedIn) {
    next({ path: "/home" });
  } else {
     next();
  }

})

export default router;