<template>
  <div class="max-w-3xl px-10 py-5 bg-white rounded">
    <h2 class="mb-5 text-2xl text-center">Mes compétences</h2>
    <div v-for="category of categories">
      <h3 class="mt-5 mb-1 text-xl">{{ category.name }} :</h3>
      <div class="flex flex-wrap gap-5">
        <div v-for="skill of category.skills">
          <img
            :src="`/images/skills/${skill.icon}`"
            :alt="skill.shortName || skill.name"
            :title="skill.shortName || skill.name"
            class="object-contain w-20 h-20"
          />
          <div class="mx-auto text-center max-w-min">
            {{ skill.shortName || skill.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  access,
  android,
  bootstrap,
  cli,
  cSharp,
  css,
  excel,
  git,
  html,
  java,
  javascript,
  jQuery,
  mySql,
  paintDotNet,
  php,
  powerPoint,
  premierePro,
  publisher,
  python,
  tailwind,
  ubuntu,
  vba,
  vueJs,
  windows,
  word,
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
