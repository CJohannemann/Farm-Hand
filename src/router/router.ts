import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../components/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
