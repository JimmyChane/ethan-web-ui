import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/HomePage.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/pages/AboutPage.vue"),
    },
    {
      path: "/story",
      name: "story",
      component: () => import("@/pages/StoryPage.vue"),
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("@/pages/GalleryPage.vue"),
    },
    { path: "/:pathMatch(.*)*", redirect: { name: "home" } },
  ],
});
