import { createApp } from 'vue'
import App from './App.vue'
import router from './frontend/router/router'
import createRouter from './frontend/router/router.ts';
import PrimeVue from 'primevue/config';


createApp(App).use(router).use(createRouter).use(PrimeVue).mount('#app')