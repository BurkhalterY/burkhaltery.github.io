<script setup>
import Item from "@/views/Home/ItemComponent.vue"
import Me from "@/views/Home/MeComponent.vue"
import { reactive } from "vue"

const actives = reactive({
  work: true,
  education: true,
  project: true,
})

const items = [
  {
    type: "work",
    name: "Open Net Sàrl",
    location: "Lausanne, Suisse",
    title: "Odoo Developer",
    start: 2021,
    end: "Today",
    image: "companies/open-net.png",
    skills: [
      { name: "Odoo", icon: "odoo.svg" },
      { name: "Python", icon: "python.svg" },
      { name: "Vue.js", icon: "vuejs.svg" },
    ],
  },
  {
    type: "education",
    name: "Vocational Baccalaureate (VB), Engineering, Architecture, Life Sciences",
    school: "ETML - École technique, École des métiers de Lausanne",
    start: 2022,
    end: 2024,
    image: "companies/etml.svg",
  },
  {
    type: "education",
    name: 'Workshop "Cryptocurrency for Integrators"',
    school: "Hodling SA",
    year: 2023,
    image: "companies/hodling.svg",
    links: [
      {
        name: "Certificate of completion",
        url: "/files/hodling/yb-hodling.pdf",
      },
    ],
  },
  {
    type: "education",
    name: "Blockchain Specialization",
    school: "University at Buffalo, Coursera",
    year: 2023,
    image: "companies/coursera.svg",
    links: [
      {
        name: "Blockchain Specialization",
        url: "/files/coursera/yb-coursera-blockchain.pdf",
      },
      {
        name: "Blockchain Basics",
        url: "/files/coursera/yb-coursera-bc1.pdf",
      },
      {
        name: "Smart Contracts",
        url: "/files/coursera/yb-coursera-bc2.pdf",
      },
      {
        name: "Decentralized Applications (Dapps)",
        url: "/files/coursera/yb-coursera-bc3.pdf",
      },
      {
        name: "Blockchain Platforms",
        url: "/files/coursera/yb-coursera-bc4.pdf",
      },
    ],
  },
  {
    type: "project",
    name: "etml.burkhalter.dev",
    description:
      'The "digitized" version of my diary from ETML, synchronized for the happiness of all my classmates.',
    year: 2023,
    image: "projects/etml-burkhalter-dev.png",
    skills: [
      { name: "Vue.js", icon: "vuejs.svg" },
      { name: "Python", icon: "python.svg" },
      { name: "GraphQL", icon: "graphql.svg" },
    ],
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
    type: "education",
    name: "Federal VET Diploma, Information Technologist, Specialism Application Development",
    school: "EPSIC - École Professionnelle Lausanne",
    start: 2018,
    end: 2022,
    image: "companies/epsic.svg",
    links: [
      {
        name: "Federal VET Diploma",
        url: "/files/epsic/yb-cfc.pdf",
      },
      {
        name: "Gradebook",
        url: "/files/epsic/yb-epsic-bulletin.pdf",
      },
    ],
  },
  {
    type: "work",
    name: "Orif",
    location: "Pomy, Aigle, Suisse",
    title: "Apprentice Developer",
    start: 2017,
    end: 2021,
    image: "companies/orif.jpg",
    skills: [
      { name: "Java", icon: "java.svg" },
      { name: "PHP", icon: "php.svg" },
      { name: "CodeIgniter", icon: "codeigniter.svg" },
    ],
  },
  {
    type: "project",
    name: "Battleship",
    description:
      'A fully functional battleship game with numerous additional features like "sonars" and "nuclear bombs".',
    year: 2019,
    image: "projects/battleship.png",
    skills: [{ name: "C#", icon: "csharp.svg" }],
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
    image: "projects/use-your-cheats.png",
    skills: [
      { name: "Android", icon: "android.svg" },
      { name: "Java", icon: "java.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
    ],
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
    image: "projects/epsic-burkhalter-dev.png",
    skills: [{ name: "Vue.js", icon: "vuejs.svg" }],
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
    image: "projects/normalux.png",
    skills: [
      { name: "PHP", icon: "php.svg" },
      { name: "CodeIgniter", icon: "codeigniter.svg" },
    ],
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
        @click="actives.education = !actives.education"
        class="paper-btn btn-block !mb-0"
        :class="!actives.education ? 'btn-primary disabled' : 'btn-secondary'"
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
        <Item :item="item" class="my-16 w-full" />
      </div>
    </TransitionGroup>
    <div class="mb-4 text-center md:mb-0">
      &copy; {{ new Date().getFullYear() }} Yannis Burkhalter
    </div>
  </div>
</template>
