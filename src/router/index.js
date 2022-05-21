import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

export default router
