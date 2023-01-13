<template>
  <div class="w-full max-w-2xl">
    <h2 class="px-2 py-1 my-4 text-2xl text-center bg-white rounded">
      {{ t("faq") }}
    </h2>
    <template v-for="question in questions">
      <details
        class="w-full p-5 my-5 bg-white rounded"
        v-if="question.question[locale] && question.answer[locale]"
      >
        <summary class="text-xl cursor-pointer">
          {{ question.question[locale] }}
        </summary>
        <p class="text-justify">
          {{ question.answer[locale] }}
        </p>
      </details>
    </template>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"

const { t, locale } = useI18n({
  messages: {
    fr: {
      faq: "Foire aux questions",
    },
    en: {
      faq: "Frequently asked questions",
    },
  },
})

const questions = [
  {
    question: {
      fr: "Quelle est ta boisson préférée ?",
      en: "What's your favorite drink?",
    },
    answer: {
      fr: "L'eau, sans hésitation ! Mais pas froide, plutôt à température ambiante.",
      en: "Water for sure! But not cold water, only temperate water.",
    },
    show: false,
  },
  {
    question: {
      fr: "Es-tu un wesh-wesh ?",
      en: "Are you wesh-wesh?",
    },
    answer: {
      fr: "Je ne me considère pas comme un wesh-wesh, mais il est vrai que j'apprécie certains aspects de leur culture.",
      en: "I'm not wesh-wesh, but I like some points of their culture.",
    },
    show: false,
  },
  {
    question: {
      fr: "Que penses-tu d'Apple ?",
      en: null,
    },
    answer: {
      fr: "Tu sais à quoi ça sert, un manche à couilles ? À rien, un MÀC ne sert à rien.",
      en: null,
    },
    show: false,
  },
]
</script>
