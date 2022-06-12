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
    name: "Musique",
    route: "Music",
  },

  {
    name: "Réseaux sociaux",
    route: "Socials",
  },
]
</script>
