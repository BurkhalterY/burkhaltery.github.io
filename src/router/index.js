import { createWebHistory, createRouter } from "vue-router"
import { setI18nLanguage, SUPPORT_LOCALES } from "@/i18n"

const routes = [
  {
    path: "/:locale?",
    name: "HOME",
    component: () => import("@/views/HomeView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const paramsLocale = to.params.locale

  if (!SUPPORT_LOCALES.includes(paramsLocale)) {
    if (navigator.language.startsWith("fr")) {
      return next("/fr")
    } else {
      return next("/en")
    }
  }

  setI18nLanguage(paramsLocale)
  return next()
})

export default router
