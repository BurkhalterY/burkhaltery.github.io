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
        <p class="mt-2.5 text-justify whitespace-pre-line">
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
      fr: "Pain au chocolat ou chocolatine ?",
      en: null,
    },
    answer: {
      fr: "Pain au chocolat. Mais je n'aime pas cette question, aucune originalité !",
      en: null,
    },
  },
  {
    question: {
      fr: "Quelle est ta boisson préférée ?",
      en: "What's your favorite drink?",
    },
    answer: {
      fr: "L'eau, sans hésitation ! Mais pas froide, plutôt à température ambiante.",
      en: "Water for sure! But not cold water, only temperate water.",
    },
  },
  {
    question: {
      fr: "Quel serait le smartphone parfait selon toi ?",
      en: null,
    },
    answer: {
      fr: `- Android
- Bouton Home (impératif)
- Boutons volumes à gauche et power à droite
- 64 Go de stockage ou plus
- Résolution standard 720x1280 (largement suffisant vu la taille de l'écran)
- La caméra selfie hors de l'écran
- Bords de l'écran droits → pas de pixels perdus
- USB-C, 5G
- Batterie accessible et interchangeable`,
      en: null,
    },
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
  },
  {
    question: {
      fr: "Si on te donnait CHF 500.- supplémentaires chaque mois que tu ne pouvais dépenser que dans un seul domaine, quel serait ce domaine ? (L'argent non dépensé disparaît)",
      en: null,
    },
    answer: {
      fr: "Dans les jeux vidéo car on trouve toujours de belles pièces que je ne me permettrais pas d'acheter même si j'en avais les moyens. Mais si cet argent disparaît s'il n'est pas dépensé, cela me donne une bonne raison de les acheter.",
      en: null,
    },
  },
]
</script>
