import { createWebHistory, createRouter } from "vue-router"

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
  const locale = to.params.locale

  if (!["en", "fr"].includes(locale)) {
    if (navigator.language.startsWith("fr")) {
      return next("/fr")
    } else {
      return next("/en")
    }
  }

  document.querySelector("html").setAttribute("lang", locale)
  return next()
})

export default router
