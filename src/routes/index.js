import { createRouter, createWebHashHistory } from "vue-router";
import HomeReport from "../views/home-report.vue";
import CreateReport from "../views/create-report.vue";

const routes = [
  { path: "/", name: "Home", component: HomeReport },
  { path: "/create", name: "Create", component: CreateReport },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
