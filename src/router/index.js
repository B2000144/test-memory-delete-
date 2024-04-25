import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/admin",
    name: "admin.home",
    component: () => import("../components/admin/AdminHome.vue"),
  },
  {
    path: "/admin/add",
    name: "admin.add",
    component: () => import("../components/admin/Add.vue"),
  },
  {
    path: "/admin/edit",
    name: "admin.edit",
    component: () => import("../components/admin/Edit.vue"),
  },
  {
    path: "/user/borrow",
    name: "form.borrow",
    component: () => import("../components/user/borrow/form.vue"),
  },
  {
    path: "/user/thanks",
    name: "thank",
    component: () => import("../components/user/borrow/thank.vue"),
  },
  {
    path: "/user/intro",
    name: "intro",
    component: () => import("../components/user/body/intro.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
