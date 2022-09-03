import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/career",
    name: "Career",
    component: () => import("@/views/Career.vue"),
  },
  {
    path: "/skills",
    name: "Skills",
    component: () => import("@/views/Skills.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/views/Projects.vue"),
  },
  {
    path: "/hobbies",
    name: "Hobbies",
    component: () => import("@/views/Hobbies.vue"),
    children: [
      {
        path: "music",
        name: "Music",
        component: () => import("@/views/Music.vue"),
      },
      {
        path: "anime",
        name: "Anime",
        component: () => import("@/views/Anime.vue"),
      },
    ],
  },

  {
    path: "/socials",
    name: "Socials",
    component: () => import("@/views/Socials.vue"),
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

export default router
