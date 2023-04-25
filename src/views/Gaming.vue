<template>
  <div>
    <h2 class="px-2 py-1 my-4 text-2xl text-center bg-white rounded">
      {{ t("my_favorite_games") }}
    </h2>
    <Ranking :items="games" />
  </div>
</template>

<script setup>
import Ranking from "@/components/Ranking.vue"
import { useI18n } from "vue-i18n"

const games = [
  {
    name: "Mario Kart 8 Deluxe",
    year: 2017,
    image: "gaming/mk8dx.webp",
  },
  {
    name: "Attack on Titan Tribute Game",
    year: 2014,
    image: "gaming/aottg.webp",
  },
  {
    name: "Portal 2",
    year: 2011,
    image: "gaming/portal2.webp",
  },
  {
    name: "Ultimate Chicken Horse",
    year: 2016,
    image: "gaming/chicken-horse.webp",
  },
  {
    name: "Super Paper Mario",
    year: 2007,
    image: "gaming/super-paper-mario.webp",
  },
  {
    name: "Mario & Luigi: Bowser's Inside Story",
    year: 2009,
    image: "gaming/ml-rpg3-bis.webp",
  },
]

const { t } = useI18n({
  messages: {
    fr: {
      my_favorite_games: "Mes jeux vidéo préférés",
    },
    en: {
      my_favorite_games: "My favorite video games",
    },
  },
})
</script>
