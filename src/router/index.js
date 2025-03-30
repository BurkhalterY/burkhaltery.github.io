import { createWebHistory, createRouter } from "vue-router"

const routes = [
  {
    path: "/",
    name: "HOME",
    component: () => import("@/views/HomeView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
