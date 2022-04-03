import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/project/:id",
    name: "ProjectPage",
    component: () => import("../views/ProjectPage.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/PageNotFound.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "404",
  },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 68,
      };
    } else if (to.path == "/") {
      return { behavior: "smooth", top: 0 };
    } else {
      return { top: 0 };
    }
  },
  history: createWebHistory(),
  routes,
});

export default router;
