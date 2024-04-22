import { createApp } from 'vue'

import router from './router'
import App from './App.vue'
import BaseFormVue from './components/ui/BaseForm.vue';
import BaseButton from "./components/ui/BaseButton.vue";


const app = createApp(App);

app.use(router);

app.component("base-form", BaseFormVue);
app.component("base-button", BaseButton);

app.mount('#app')
