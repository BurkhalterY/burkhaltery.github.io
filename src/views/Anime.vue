<template>
  <div>
    <h2 class="px-2 py-1 my-4 text-2xl text-center bg-white rounded">
      {{ t("my_favorite_animes") }}
    </h2>
    <Ranking :items="anime" />
  </div>
</template>

<script setup>
import Ranking from "@/components/Ranking.vue"
import { useI18n } from "vue-i18n"

const anime = [
  {
    name: "Super Mario Bros. Z",
    year: 2006,
    image: "anime/smbz.webp",
  },
  {
    name: "Lastman",
    year: 2016,
    image: "anime/lastman.webp",
  },
  {
    name: "Steins;Gate",
    year: 2011,
    image: "anime/steins-gate.webp",
  },
  {
    name: "Code Geass",
    year: 2006,
    image: "anime/code-geass.webp",
  },
  {
    name: "The Promised Neverland",
    year: 2019,
    image: "anime/tpn.webp",
  },
  {
    name: "Mob Psycho 100",
    year: 2016,
    image: "anime/mob-psycho-100.webp",
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
