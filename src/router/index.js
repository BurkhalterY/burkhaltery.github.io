import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/ProjectView.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/views/ProjectView.vue"),
  },
  {
    path: "/education",
    name: "Education",
    component: () => import("@/views/EducationView.vue"),
  },
]

export const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

export default router
