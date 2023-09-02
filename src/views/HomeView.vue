<script setup>
import Me from "@/views/Home/MeComponent.vue"
import Project from "@/views/Home/ProjectComponent.vue"

const projects = [
  {
    name: "etml.burkhalter.dev",
    description:
      'The "digitized" version of my diary at ETML, synchronized for the happiness of all my classmates.',
    skills: [
      { name: "Vue.js", icon: "vuejs.svg" },
      { name: "Python", icon: "python.svg" },
      { name: "GraphQL", icon: "graphql.svg" },
    ],
    image: "etml-burkhalter-dev.png",
    links: [
      {
        name: "etml.burkhalter.dev",
        url: "https://etml.burkhalter.dev/",
      },
      {
        name: "Frontend repository",
        url: "https://github.com/BurkhalterY/etml.burkhalter.dev",
      },
      {
        name: "Backend repository",
        url: "https://github.com/BurkhalterY/api.etml.burkhalter.dev",
      },
    ],
  },
  {
    name: "Battleship",
    description:
      'A fully functional battleship game with a lot of additional features like "sonars" and "nuclear bombs".',
    skills: [{ name: "C#", icon: "csharp.svg" }],
    image: "battleship.png",
    links: [
      {
        name: "Repository",
        url: "https://github.com/BurkhalterY/EPSIC_Bataille_Navale",
      },
      {
        name: "Direct download",
        url: "https://github.com/BurkhalterY/EPSIC_Bataille_Navale/releases/download/v1.2-beta/EPSIC_Bataille_Navale.exe",
      },
    ],
  },
  {
    name: "Use Your Cheats",
    description:
      "A small Android application exploiting a flaw on the Use Your Words backend. It's allow you to vote for yourself and know which is the house answer.",
    skills: [
      { name: "Android", icon: "android.svg" },
      { name: "Java", icon: "java.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
    ],
    image: "use-your-cheats.png",
    links: [
      {
        name: "Repository",
        url: "https://github.com/BurkhalterY/UseYourCheats",
      },
      {
        name: "Direct download (APK)",
        url: "https://github.com/BurkhalterY/UseYourCheats/releases/download/1.1/use-your-words-1.1.apk",
      },
    ],
  },
  {
    name: "epsic.burkhalter.dev",
    description:
      "A website intended for my former classmates. It contents summary of some our first year of apprenticeship courses at EPSIC.",
    skills: [{ name: "Vue.js", icon: "vuejs.svg" }],
    image: "epsic-burkhalter-dev.png",
    links: [
      {
        name: "epsic.burkhalter.dev",
        url: "https://epsic.burkhalter.dev",
      },
    ],
  },
  {
    name: "Normalux.ch",
    description:
      'A drawing mini game. You have to reproduce a model in only 45". There are a lot of modes, and exploring the gallery may be very funny!',
    skills: [
      { name: "PHP", icon: "php.svg" },
      { name: "CodeIgniter", icon: "codeigniter.svg" },
    ],
    image: "normalux.png",
    links: [{ name: "www.normalux.ch", url: "https://www.normalux.ch/" }],
  },
]
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full max-w-2xl gap-1 sm:gap-40 sm:my-40"
  >
    <div class="w-full overflow-hidden bg-white shadow sm:rounded-lg">
      <Me class="px-4 py-5 sm:p-6" />
    </div>
    <div
      v-for="(project, i) in projects"
      :key="i"
      class="w-full overflow-hidden bg-white shadow sm:rounded-lg"
    >
      <Project :project="project" :sequence="i" class="px-4 py-5 sm:p-6" />
    </div>
    <div class="w-full overflow-hidden bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 text-xs text-center text-gray-600 sm:p-6">
        &copy; {{ new Date().getFullYear() }} Yannis Burkhalter
      </div>
    </div>
  </div>
</template>
