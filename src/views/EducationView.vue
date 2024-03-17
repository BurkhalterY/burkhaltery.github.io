<script setup>
import School from "@/views/Home/SchoolComponent.vue"

const schools = [
  {
    school: "ETML - École technique, École des métiers de Lausanne",
    start: 2022,
    end: 2024,
    certificate:
      "Vocational Baccalaureate (VB), Engineering, Architecture, Life Sciences",
    image: "etml.svg",
  },
  {
    school: "EPSIC - École Professionnelle",
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
]
</script>

<template>
  <div>
    <div v-for="(school, i) in schools" :key="i">
      <School :school="school" :sequence="i" />
    </div>
  </div>
</template>
