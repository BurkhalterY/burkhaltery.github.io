<template>
  <div>
    <div class="flex gap-5 justify-center">
      <router-link
        :to="{ name: 'Music' }"
        class="bg-white rounded px-10 pt-5 text-center"
      >
        <div class="text-5xl">🎵</div>
        <div class="my-2">Musique</div>
      </router-link>
      <router-link
        :to="{ name: 'Anime' }"
        class="bg-white rounded px-10 pt-5 text-center"
      >
        <div class="text-5xl">🎌</div>
        <div class="my-2">Anime</div>
      </router-link>
    </div>
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
