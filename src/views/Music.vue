<template>
  <div>
    <h2 class="relative px-2 py-1 my-4 text-2xl text-center bg-white rounded">
      {{ t("music_i_listen_to") }}
      <a
        href="https://open.spotify.com/playlist/1JEsoumeZooUqDdWwPTT1F"
        target="_blank"
        class="absolute right-1"
      >
        <img
          src="/images/socials/spotify.svg"
          :alt="t('spotify_playlist')"
          :title="t('spotify_playlist')"
          class="object-contain w-8 h-8"
        />
      </a>
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
]

const { t } = useI18n({
  messages: {
    fr: {
      music_i_listen_to: "La musique que j'écoute",
      spotify_playlist: "Playlist Spotify",
    },
    en: {
      music_i_listen_to: "Music I listen to",
      spotify_playlist: "Spotify playlist",
    },
  },
})
</script>
