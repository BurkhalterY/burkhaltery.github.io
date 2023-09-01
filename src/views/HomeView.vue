<script setup>
import Me from "@/views/Home/MeComponent.vue"
import Project from "@/views/Home/ProjectComponent.vue"

const projects = [
  {
    name: "etml.burkhalter.dev",
    description:
      "A website with the content of many of our first year of apprenticeship courses at EPSIC. Firstly made with CodeIgniter in PHP, then with Angular, and finally with Vue.js.",
    skills: [{ name: "Vue.js", icon: "vuejs.svg" }],
    image: "prog-normalux.webp",
    links: [
      {
        name: "etml.burkhalter.dev",
        url: "https://etml.burkhalter.dev/",
      },
      {
        name: "Frontend repo",
        url: "https://github.com/BurkhalterY/etml.burkhalter.dev",
      },
      {
        name: "Backend repo",
        url: "https://github.com/BurkhalterY/api.etml.burkhalter.dev",
      },
    ],
  },
  {
    name: "epsic.burkhalter.dev",
    description:
      "A website with the content of many of our first year of apprenticeship courses at EPSIC. Firstly made with CodeIgniter in PHP, then with Angular, and finally with Vue.js.",
    skills: [{ name: "Vue.js", icon: "vuejs.svg" }],
    image: "prog-normalux.webp",
    links: [
      {
        name: "epsic.burkhalter.dev",
        url: "https://epsic.burkhalter.dev",
      },
    ],
  },
  {
    name: "Battleship",
    description:
      "A fully fonctional battleship game with a lot of additional features like «\xa0sonars\xa0» and «\xa0nuclear bombs\xa0».",
    skills: [{ name: "C#", icon: "csharp.svg" }],
    image: "bataille-navale.webp",
    links: [
      {
        name: "Repo",
        url: "https://github.com/BurkhalterY/EPSIC_Bataille_Navale",
      },
    ],
  },
  {
    name: "Use Your Cheats",
    description:
      "A little Android application that exploit a fault on the Use Your Words backend. That's allow you to vote for yourself and know which is the house answer.",
    skills: [
      { name: "Android", icon: "android.svg" },
      { name: "Java", icon: "java.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
    ],
    image: "use-your-cheats.webp",
    links: [
      {
        name: "Repo",
        url: "https://github.com/BurkhalterY/UseYourCheats",
      },
    ],
  },
  {
    name: "Normalux.ch",
    description:
      'A drawing website where you have to reproduce a model in only 45". There are a lot of game modes and explore the gallery may be very funny!',
    skills: [
      { name: "CodeIgniter", icon: "codeigniter.svg" },
      { name: "PHP", icon: "php.svg" },
      { name: "SQL", icon: "mysql.svg" },
    ],
    image: "normalux.webp",
    links: [{ name: "normalux.ch", url: "https://www.normalux.ch/" }],
  },
]
</script>

<template>
  <div
    class="my-40 flex flex-col gap-40 justify-center items-center w-full max-w-2xl"
  >
    <div class="overflow-hidden rounded-lg bg-white shadow w-full">
      <Me class="px-4 py-5 sm:p-6" />
    </div>
    <div
      v-for="(project, i) in projects"
      :key="i"
      class="overflow-hidden rounded-lg bg-white shadow w-full"
    >
      <Project :project="project" :sequence="i" class="px-4 py-5 sm:p-6" />
    </div>
  </div>
</template>
