import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/ex01",
    component: () => import("../views/answer/Ex01.vue"),
  },
  {
    path: "/ex02",
    component: () => import("../views/answer/Ex02.vue"),
  },
  {
    path: "/ex03",
    component: () => import("../views/answer/Ex03.vue"),
  },
  {
    path: "/ex04",
    component: () => import("../views/answer/Ex04.vue"),
  },
  {
    path: "/ex05",
    component: () => import("../views/answer/Ex05.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
