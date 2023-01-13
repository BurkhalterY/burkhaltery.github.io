<template>
  <div>
    <h2 class="px-2 py-1 my-4 text-2xl text-center bg-white rounded">
      {{ t("my_favorite_animes") }}
    </h2>
    <Ranking :items="anime" />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"
import Ranking from "@/components/Ranking.vue"

const anime = [
  {
    name: "Lastman",
    year: 2016,
    image: "anime/lastman.jpg",
  },
  {
    name: "Steins;Gate",
    year: 2011,
    image: "anime/steins-gate.jpg",
  },
  {
    name: "The Promised Neverland",
    year: 2019,
    image: "anime/tpn.jpg",
  },
  {
    name: "Code Geass",
    year: 2006,
    image: "anime/code-geass.jpg",
  },
  {
    name: "Mob Psycho 100",
    year: 2016,
    image: "anime/mob-psycho-100.jpg",
  },
  {
    name: "Sword Art Online",
    year: 2012,
    image: "anime/sao.jpg",
  },
]

const { t } = useI18n({
  messages: {
    fr: {
      my_favorite_animes: "Mes animes préférés",
    },
    en: {
      my_favorite_animes: "My favorite animes",
    },
  },
})
</script>
