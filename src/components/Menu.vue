<template>
  <nav class="w-full text-white">
    <ul>
      <li class="sm:inline-block m-3 sm:mx-1 text-center sm:float-right">
        <span class="p-1">Yannis Burkhalter &copy;</span>
      </li>
      <li v-for="item of menu" class="sm:inline-block m-3 sm:mx-1 text-center">
        <router-link
          :to="{ name: item.route }"
          class="p-1 rounded hover:bg-white hover:text-black"
          active-class="bg-white text-black"
        >
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const showFullMode = import.meta.env.VITE_SHOW_FULL_MODE === "true"
const menu = [
  {
    name: "Présentation",
    route: "Home",
  },
  {
    name: "Parcours",
    route: "Career",
  },
  {
    name: "Projets",
    route: "Projects",
  },
  ...(showFullMode
    ? [
        {
          name: "Musique",
          route: "Music",
        },
        {
          name: "Anime",
          route: "Anime",
        },
      ]
    : []),
  {
    name: "Réseaux sociaux",
    route: "Socials",
  },
]
</script>
