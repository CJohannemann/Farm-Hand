import { createApp } from 'vue'
import App from './App.vue'
import Vuelidate from '@vuelidate/core';
import router from './router/router'
import createRouter from './router/router.ts';
import PrimeVue from 'primevue/config';


createApp(App).use(router).use(Vuelidate).use(createRouter).use(PrimeVue).mount('#app')