<template>
  <nav class="w-full text-white">
    <ul class="m-1">
      <li class="m-1 text-center sm:inline-block sm:float-right">
        <div class="p-1">Yannis Burkhalter &copy;</div>
      </li>
      <li class="m-1 text-center sm:inline-block sm:float-right">
        <router-link
          class="block p-1 uppercase"
          :to="{
            name: route.name,
            params: { locale: locale == 'fr' ? 'en' : 'fr' },
          }"
        >
          {{ locale }}
        </router-link>
      </li>
      <li v-for="item of menu" class="m-1 text-center sm:inline-block sm:mx-1">
        <router-link
          :to="{ name: item.route, params: { locale } }"
          class="block p-1 rounded hover:bg-white hover:text-black"
          active-class="text-black bg-white"
        >
          {{ t(item.name) }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router"
import { useI18n } from "vue-i18n"

const showFullMode = import.meta.env.VITE_SHOW_FULL_MODE === "true"

const route = useRoute()

const { t, locale } = useI18n({
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
