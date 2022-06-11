<template>
  <div class="">
    <h2 class="text-2xl text-center my-4 px-2 py-1 bg-white rounded">
      La musique que j'écoute
    </h2>
    <div class="flex gap-x-4 gap-y-12 pt-6 flex-col md:flex-row">
      <div v-for="(artist, i) of artists" class="mx-auto" :class="artist.class">
        <span class="relative mx-auto">
          <span
            class="absolute -top-2 left-20 rounded-full w-12 h-12 flex justify-center items-center font-bold text-2xl text-black/40"
            :style="`background-color: #${artist.color};`"
          >
            {{ artist.position }}
          </span>
        </span>
        <img
          :src="`/images/music/${artist.image}`"
          :alt="artist.name"
          class="rounded-t w-52"
        />
        <div class="bg-white rounded-b w-52" :class="artist.height">
          <h3 class="text-lg text-center">
            {{ artist.name }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const artists = [
  {
    position: 1,
    name: "Renaud",
    image: "renaud.jpg",
    class: "md:mt-0 md:order-2",
    height: "md:h-40",
    color: "c9b037",
  },
  {
    position: 2,
    name: "Jul",
    image: "jul.jpg",
    class: "md:mt-16 md:order-1",
    height: "md:h-24",
    color: "d7d7d7",
  },
  {
    position: 3,
    name: "Louise Attaque",
    image: "louise-attaque.jpg",
    class: "md:mt-32 md:order-3",
    height: "md:h-8",
    color: "ad8a56",
  },
]
</script>
