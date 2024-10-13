import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../components/login/Login.vue";
import User from "../components/model/User.ts";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/createUser',
    name: 'Create User',
    component: User
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
