<template>
  <div>
    <h2 class="px-2 py-1 my-4 text-2xl text-center bg-white rounded">
      {{ t("music_i_listen_to") }}
    </h2>
    <Ranking :items="artists" />
  </div>
</template>

<script setup>
import Ranking from "@/components/Ranking.vue"
import { useI18n } from "vue-i18n"

const artists = [
  {
    name: "Renaud",
    image: "music/renaud.jpg",
  },
  {
    name: "Jul",
    image: "music/jul.jpg",
  },
  {
    name: "Louise Attaque",
    image: "music/louise-attaque.jpg",
  },
  {
    name: "Benab",
    image: "music/benab.jpg",
  },
  /*{
    name: "Stromae",
    image: "music/stromae.jpg",
  },
  {
    name: "Johnny Hallyday",
    image: "music/johnny-hallyday.jpg",
  },
  {
    name: "Hatsune Miku",
    image: "music/hatsune-miku.jpg",
  },*/
  {
    name: "Alex le R",
    image: "music/alex-le-r.jpg",
  },
]

const { t } = useI18n({
  messages: {
    fr: {
      music_i_listen_to: "La musique que j'écoute",
    },
    en: {
      music_i_listen_to: "Music I listen to",
    },
  },
})
</script>
