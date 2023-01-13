<template>
  <div>
    <div class="flex flex-col justify-center gap-5 sm:flex-row">
      <router-link
        :to="{ name: 'Music' }"
        class="px-10 pt-5 text-center bg-white rounded"
      >
        <div class="text-5xl">🎵</div>
        <div class="my-2">{{ t("music") }}</div>
      </router-link>
      <router-link
        :to="{ name: 'Anime' }"
        class="px-10 pt-5 text-center bg-white rounded"
      >
        <div class="text-5xl">🎌</div>
        <div class="my-2">{{ t("anime") }}</div>
      </router-link>
      <router-link
        :to="{ name: 'Gaming' }"
        class="px-10 pt-5 text-center bg-white rounded"
      >
        <div class="text-5xl">🕹</div>
        <div class="my-2">{{ t("gaming") }}</div>
      </router-link>
    </div>
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"

const { t } = useI18n({
  messages: {
    fr: {
      music: "Musique",
      anime: "Animes",
      gaming: "Jeux vidéo",
    },
    en: {
      music: "Music",
      anime: "Animes",
      gaming: "Gaming",
    },
  },
})
</script>
