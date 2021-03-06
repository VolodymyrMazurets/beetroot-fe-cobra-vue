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

const FilmDetails = () =>
  import(/* webpackChunkName: "filmDetails" */ "../views/FilmDetails.vue");

const Contacts = () =>
  import(/* webpackChunkName: "contacts" */ "../views/Contacts.vue");

const Meals = () =>
import(/* webpackChunkName: "meals" */ "../views/Meals/Meals.vue");

const MealsDetails = () =>
import(/* webpackChunkName: "mealsDetails" */ "../views/Meals/MealsDetails.vue");

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
  {
    path: routesPath.filmDetails,
    name: routesNames.filmDetails,
    component: FilmDetails,
  },
  {
    path: routesPath.contacts,
    name: routesNames.contacts,
    component: Contacts,
  },
  {
    path: routesPath.meals,
    name: routesNames.meals,
    component: Meals,
  },
  {
    path: routesPath.mealsDetails,
    name: routesNames.mealsDetails,
    component: MealsDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
