import { createApp } from 'vue'

import router from './router'
import App from './App.vue'

import BaseFormVue from './components/ui/BaseForm.vue';
import BaseButton from "./components/ui/BaseButton.vue";
import store from './store/index'


const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-form", BaseFormVue);
app.component("base-button", BaseButton);

app.mount('#app')

//https://wrtn.ai/chat/u/65d591e80c06023ae70af73a/c/661e0fee0f64761ff0340be0?type=u

//https://wrtn.ai/chat/u/65d591e80c06023ae70af73a/c/661569320b45829743a93612?type=u
