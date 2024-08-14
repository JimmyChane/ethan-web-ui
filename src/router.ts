import type { Component } from "vue";
import { createRouter, createWebHistory } from "vue-router";

export interface Navigation {
  id: string;
  path: string;
  component: () => Component;
}

export const HOME: Navigation = {
  id: "home",
  path: "/",
  component: () => import("@/pages/PageHome.vue"),
};

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: HOME.path, name: HOME.id, component: HOME.component },
    { path: "/:pathMatch(.*)*", redirect: { name: "home" } },
  ],
});
