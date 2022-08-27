<template>
  <div class="bg-white rounded px-10 py-5 max-w-3xl">
    <h2 class="text-2xl text-center mb-5">Mes compétences</h2>
    <div v-for="category of categories">
      <h3 class="text-xl mb-1 mt-5">{{ category.name }} :</h3>
      <div class="flex flex-wrap gap-5">
        <div v-for="skill of category.skills">
          <img
            :src="`/images/skills/${skill.icon}`"
            :alt="skill.shortName || skill.name"
            :title="skill.shortName || skill.name"
            class="object-contain w-20 h-20"
          />
          <div class="text-center mx-auto max-w-min">
            {{ skill.shortName || skill.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  html,
  css,
  javascript,
  vueJs,
  tailwind,
  bootstrap,
  jQuery,
  php,
  mySql,
  python,
  cSharp,
  java,
  word,
  excel,
  powerPoint,
  publisher,
  access,
  vba,
  windows,
  ubuntu,
  android,
  git,
  cli,
  paintDotNet,
  premierePro,
} from "@/data/skills.json"

const categories = [
  {
    name: "Frontend",
    skills: [html, css, javascript, vueJs, tailwind, bootstrap, jQuery],
  },
  {
    name: "Backend",
    skills: [php, mySql],
  },
  {
    name: "Languages divers",
    skills: [python, cSharp, java],
  },
  {
    name: "Microsoft Office",
    skills: [word, excel, powerPoint, publisher, access, vba],
  },
  {
    name: "Systèmes d'exploitations",
    skills: [windows, ubuntu, android],
  },
  {
    name: "Général",
    skills: [git, cli],
  },
  {
    name: "Image & vidéo",
    skills: [paintDotNet, premierePro],
  },
]
</script>
