<script setup>
import Project from "@/views/Home/ProjectComponent.vue"

const projects = [
  {
    name: "etml.burkhalter.dev",
    description:
      'The "digitized" version of my diary from ETML, synchronized for the happiness of all my classmates.',
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
        name: "frontend repository",
        url: "https://github.com/BurkhalterY/etml.burkhalter.dev",
      },
      {
        name: "backend repository",
        url: "https://github.com/BurkhalterY/api.etml.burkhalter.dev",
      },
    ],
  },
  {
    name: "Battleship",
    description:
      'A fully functional battleship game with numerous additional features like "sonars" and "nuclear bombs".',
    skills: [{ name: "C#", icon: "csharp.svg" }],
    image: "battleship.png",
    links: [
      {
        name: "repository",
        url: "https://github.com/BurkhalterY/EPSIC_Bataille_Navale",
      },
      {
        name: "direct download",
        url: "https://github.com/BurkhalterY/EPSIC_Bataille_Navale/releases/download/v1.2-beta/EPSIC_Bataille_Navale.exe",
      },
    ],
  },
  {
    name: "Use Your Cheats",
    description:
      "A small Android application that exploits a security vulnerability in the Use Your Words backend. It allows you to vote for yourself and identify the house answer.",
    skills: [
      { name: "Android", icon: "android.svg" },
      { name: "Java", icon: "java.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
    ],
    image: "use-your-cheats.png",
    links: [
      {
        name: "repository",
        url: "https://github.com/BurkhalterY/UseYourCheats",
      },
      {
        name: "direct download (APK)",
        url: "https://github.com/BurkhalterY/UseYourCheats/releases/download/1.1/use-your-words-1.1.apk",
      },
    ],
  },
  {
    name: "epsic.burkhalter.dev",
    description:
      "A website designed for my former classmates. It includes summaries of some of our first-year apprenticeship courses at EPSIC.",
    skills: [{ name: "Vue.js", icon: "vuejs.svg" }],
    image: "epsic-burkhalter-dev.png",
    links: [
      {
        name: "epsic.burkhalter.dev",
        url: "https://epsic.burkhalter.dev",
      },
      {
        name: "repository",
        url: "https://github.com/BurkhalterY/epsic.burkhalter.dev",
      },
    ],
  },
  {
    name: "Normalux.ch",
    description:
      "A drawing mini-game where you have to replicate a model in just 45 seconds. It has many modes and exploring the gallery can be very funny!",
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
  <div>
    <div v-for="(project, i) in projects" :key="i">
      <Project :project="project" :sequence="i" />
    </div>
  </div>
</template>
