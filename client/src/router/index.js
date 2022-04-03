import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/project/:id',
    name: 'ProjectPage',
    component: () => import('../views/ProjectPage.vue'),
  },
  {
    path: "/404",
    name: "404",
    component: () => import('../views/PageNotFound.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "404"
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router