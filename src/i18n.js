import { createI18n } from "vue-i18n"
import { useRoute, useRouter } from "vue-router"

export const SUPPORT_LOCALES = ["fr", "en"]

export const i18n = createI18n({
  legacy: false,
  locale: "fr",
  fallbackLocale: "en",
})

export function getLocale() {
  return i18n.global.locale.value
}

export function setI18nLanguage(locale) {
  i18n.global.locale.value = locale
  document.querySelector("html").setAttribute("lang", locale)
}
