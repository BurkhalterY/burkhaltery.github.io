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
    image: "music/renaud.webp",
  },
  {
    name: "Benab",
    image: "music/benab.webp",
  },
  {
    name: "Louise Attaque",
    image: "music/louise-attaque.webp",
  },
  {
    name: "Jul",
    image: "music/jul.webp",
  },
  {
    name: "Alex le R",
    image: "music/alex-le-r.webp",
  },
  {
    name: "Spotify playlist",
    image: "music/spotify.webp",
    url: "https://open.spotify.com/playlist/1JEsoumeZooUqDdWwPTT1F",
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
