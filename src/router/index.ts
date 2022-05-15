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
    path: "/article-edit",
    name: "ArticleEdit",
    component: () => import("../views/article-edit/index.vue")
  }, {
    path: "/creation",
    name: "Creation",
    component: () => import("../views/creation/index.vue")
  }, {
    path: "/admin",
    redirect: "/article-edit"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
