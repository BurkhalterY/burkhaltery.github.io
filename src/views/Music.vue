<template>
  <div>
    <h2 class="text-2xl text-center my-4 px-2 py-1 bg-white rounded">
      {{ t("music_i_listen_to") }}
    </h2>
    <Ranking :items="artists" :square="true" />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"
import Ranking from "@/components/Ranking.vue"

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
  {
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
