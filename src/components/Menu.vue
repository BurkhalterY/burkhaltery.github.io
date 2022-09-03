<template>
  <nav class="w-full text-white">
    <ul class="m-1">
      <li class="sm:inline-block m-1 text-center sm:float-right">
        <div class="p-1">Yannis Burkhalter &copy;</div>
      </li>
      <li class="sm:inline-block m-1 text-center sm:float-right">
        <button
          class="uppercase p-1"
          @click="locale = locale == 'fr' ? 'en' : 'fr'"
        >
          {{ locale }}
        </button>
      </li>
      <li v-for="item of menu" class="sm:inline-block m-1 sm:mx-1 text-center">
        <router-link
          :to="{ name: item.route }"
          class="block p-1 rounded hover:bg-white hover:text-black"
          active-class="bg-white text-black"
        >
          {{ t(item.name) }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useI18n } from "vue-i18n"

const showFullMode = import.meta.env.VITE_SHOW_FULL_MODE === "true"

const { t, locale } = useI18n({
  useScope: "global",
  messages: {
    fr: {
      introduction: "Présentation",
      career: "Parcours",
      projects: "Projets",
      hobbies: "Hobbies",
      social_networks: "Réseaux sociaux",
    },
    en: {
      introduction: "Introduction",
      career: "Career",
      projects: "Projects",
      hobbies: "Hobbies",
      social_networks: "Socials networks",
    },
  },
})

const menu = [
  {
    name: "introduction",
    route: "Home",
  },
  {
    name: "career",
    route: "Career",
  },
  {
    name: "projects",
    route: "Projects",
  },
  ...(showFullMode
    ? [
        {
          name: "hobbies",
          route: "Hobbies",
        },
      ]
    : []),
  {
    name: "social_networks",
    route: "Socials",
  },
]
</script>
