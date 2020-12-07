import { routesNames, routesPath } from "./routes";

import Home from "../views/Home.vue";
import Vue from "vue";
import VueRouter from "vue-router";

const Coctails = () =>
  import(/* webpackChunkName: "coctails" */ "../views/Coctails.vue");
const Coctail = () =>
  import(/* webpackChunkName: "coctails" */ "../views/Coctail.vue");
const Components = () =>
  import(/* webpackChunkName: "components" */ "../views/Components.vue");

const LittleShop = () =>
  import(/* webpackChunkName: "littleShop" */ "../views/LittleShop.vue");

const Films = () =>
  import(/* webpackChunkName: "films" */ "../views/Films.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: routesPath.home,
    name: routesNames.home,
    component: Home,
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
  },
  {
    path: routesPath.components,
    name: routesNames.components,
    component: Components,
  },
  {
    path: routesPath.littleShop,
    name: routesNames.littleShop,
    component: LittleShop,
  },
  {
    path: routesPath.films,
    name: routesNames.films,
    component: Films,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
