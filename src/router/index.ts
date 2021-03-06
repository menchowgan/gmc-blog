import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue")
  }, {
    path: "/article-info",
    name: "ArticleInfo",
    component: () => import("../views/article-info/index.vue")
  }, {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/admin/index.vue")
  }, {
    path: "/creation",
    name: "Creation",
    component: () => import("../views/creation/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
