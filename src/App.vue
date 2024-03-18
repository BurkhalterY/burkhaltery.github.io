<script setup>
import Me from "@/views/Home/MeComponent.vue"
import Project from "@/views/Home/ProjectComponent.vue"
import School from "@/views/Home/SchoolComponent.vue"
import Work from "@/views/Home/WorkComponent.vue"
import { reactive } from "vue"

const components = {
  work: Work,
  school: School,
  project: Project,
}
const actives = reactive({
  work: true,
  school: true,
  project: true,
})

const items = [
  {
    type: "work",
    company: "Open Net Sàrl",
    title: "Odoo Developer",
    start: 2021,
    end: "Today",
    location: "Lausanne, Suisse",
    skills: [
      { name: "Odoo", icon: "odoo.svg" },
      { name: "Python", icon: "python.svg" },
      { name: "Vue.js", icon: "vuejs.svg" },
    ],
    image: "open-net.png",
  },
  {
    type: "school",
    school: "ETML - École technique, École des métiers de Lausanne",
    start: 2022,
    end: 2024,
    certificate:
      "Vocational Baccalaureate (VB), Engineering, Architecture, Life Sciences",
    image: "etml.svg",
  },
  {
    type: "project",
    name: "etml.burkhalter.dev",
    description:
      'The "digitized" version of my diary from ETML, synchronized for the happiness of all my classmates.',
    year: 2023,
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
    type: "school",
    school: "EPSIC - École Professionnelle Lausanne",
    start: 2018,
    end: 2022,
    certificate:
      "Federal VET Diploma, Information Technologist, Specialism Application Development",
    skills: [
      { name: "Java", icon: "java.svg" },
      { name: "C#", icon: "csharp.svg" },
      { name: "Angular", icon: "angular.svg" },
    ],
    image: "epsic.svg",
  },
  {
    type: "work",
    company: "Orif",
    title: "Apprentice Developer",
    start: 2017,
    end: 2021,
    location: "Pomy, Aigle, Suisse",
    skills: [
      { name: "Java", icon: "java.svg" },
      { name: "PHP", icon: "php.svg" },
      { name: "CodeIgniter", icon: "codeigniter.svg" },
    ],
    image: "orif.jpg",
  },
  {
    type: "project",
    name: "Battleship",
    description:
      'A fully functional battleship game with numerous additional features like "sonars" and "nuclear bombs".',
    year: 2019,
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
    type: "project",
    name: "Use Your Cheats",
    description:
      "A small Android application that exploits a security vulnerability in the Use Your Words backend. It allows you to vote for yourself and identify the house answer.",
    year: 2019,
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
    type: "project",
    name: "epsic.burkhalter.dev",
    description:
      "A website designed for my former classmates. It includes summaries of some of our first-year apprenticeship courses at EPSIC.",
    year: 2018,
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
    type: "project",
    name: "Normalux.ch",
    description:
      "A drawing mini-game where you have to replicate a model in just 45 seconds. It has many modes and exploring the gallery can be very funny!",
    year: 2018,
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
  <div class="container paper">
    <Me />
    <div class="flex flex-col md:flex-row m-5 gap-5 text-center">
      <button
        @click="actives.project = !actives.project"
        class="paper-btn btn-block !mb-0"
        :class="!actives.project ? 'btn-primary disabled' : 'btn-secondary'"
      >
        Projects
      </button>
      <button
        @click="actives.work = !actives.work"
        class="paper-btn btn-block !mb-0"
        :class="!actives.work ? 'btn-primary disabled' : 'btn-secondary'"
      >
        Work Experiences
      </button>
      <button
        @click="actives.school = !actives.school"
        class="paper-btn btn-block !mb-0"
        :class="!actives.school ? 'btn-primary disabled' : 'btn-secondary'"
      >
        Education
      </button>
    </div>
    <TransitionGroup name="fade">
      <div
        v-for="(item, i) in items.filter((x) => actives[x.type])"
        :key="item"
        class="w-full"
      >
        <component
          :is="components[item.type]"
          :item="item"
          class="my-16 w-full"
        />
      </div>
    </TransitionGroup>
    <div class="mb-4 text-center md:mb-0">
      &copy; {{ new Date().getFullYear() }} Yannis Burkhalter
    </div>
  </div>
</template>
