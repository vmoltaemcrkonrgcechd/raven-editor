import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import UniversalPage from "@/pages/UniversalPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: UniversalPage,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
