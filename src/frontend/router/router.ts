import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
import UserLandingPage from "../components/userDashboard/UserLandingPage.vue";
import NotFound from "../views/NotFound.vue";

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
    path: '/welcome/:id',
    name: 'UserLandingPage',
    component: UserLandingPage,
    props: true
  },
    //redirect
  {
    path:'/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
