import { createI18n } from "vue-i18n"

export const SUPPORT_LOCALES = ["en", "fr"]

export const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
})

export function setI18nLanguage(locale) {
  i18n.global.locale = locale
  document.querySelector("html").setAttribute("lang", locale)
}
