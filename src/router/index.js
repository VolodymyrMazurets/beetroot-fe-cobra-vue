import {routesNames, routesPath} from './routes'

import Home from '../views/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

const Coctails = () => import(/* webpackChunkName: "coctails" */ '../views/Coctails.vue');
const Coctail = () => import(/* webpackChunkName: "coctails" */ '../views/Coctail.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: routesPath.home,
    name: routesNames.home,
    component: Home
  },
  {
    path: routesPath.coctails,
    name: routesNames.coctails,
    component: Coctails,
  },
  {
    path: routesPath.coctail,
    name: routesNames.coctail,
    component: Coctail,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
