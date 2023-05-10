import { getLocale, setI18nLanguage, SUPPORT_LOCALES } from "@/i18n"
import { createRouter, createWebHistory } from "vue-router"

const locale = getLocale()

const routes = [
  {
    path: "/:locale",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/:locale/career",
    name: "Career",
    component: () => import("@/views/Career.vue"),
  },
  {
    path: "/:locale/projects",
    name: "Projects",
    component: () => import("@/views/Projects.vue"),
  },
  {
    path: "/:locale/hobbies",
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
      {
        path: "gaming",
        name: "Gaming",
        component: () => import("@/views/Gaming.vue"),
      },
    ],
  },
  {
    path: "/:locale/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: () => `/${locale}`,
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const paramsLocale = to.params.locale

  if (!SUPPORT_LOCALES.includes(paramsLocale)) {
    return next(`/${locale.value}`)
  }

  setI18nLanguage(paramsLocale)

  return next()
})

export default router
