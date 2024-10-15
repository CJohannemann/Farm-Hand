import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
import UserLandingPage from "../components/userDashboard/UserLandingPage.vue";

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
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/welcome',
    name: 'UserLandingPage',
    component: UserLandingPage
  }

]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
