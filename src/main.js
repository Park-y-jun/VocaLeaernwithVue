import { createApp } from 'vue'

import router from './router'
import App from './App.vue'

import BasicForm from "./components/ui/BasicForm.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import NavButton from "./components/ui/NavButton.vue";
import store from './store/index'


const app = createApp(App);

app.use(router);
app.use(store);

app.component("basic-form", BasicForm);
app.component("base-button", BaseButton);
app.component("nav-button", NavButton);

app.mount('#app')

