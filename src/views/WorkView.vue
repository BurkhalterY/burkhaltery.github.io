<script setup>
import Work from "@/views/Home/WorkComponent.vue"

const works = [
  {
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
]
</script>

<template>
  <div>
    <div v-for="(work, i) in works" :key="i">
      <Work :work="work" :sequence="i" />
    </div>
  </div>
</template>
