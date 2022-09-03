<template>
  <div>
    <h2 class="text-2xl text-center my-4 px-2 py-1 bg-white rounded">
      Quelques projets
    </h2>
    <div
      class="my-5 p-5 bg-white rounded grid grid-cols-5 gap-5"
      v-for="(project, i) in projects"
    >
      <div class="col-span-3" :class="{ 'order-1': i % 2 == 0 }">
        <h3 class="text-2xl">{{ project.name }}</h3>
        <div class="mt-1">
          <img
            v-for="skill of project.skills"
            :src="`/images/skills/${skill.icon}`"
            :alt="skill.name"
            :title="skill.name"
            class="object-contain align-text-bottom inline w-6 h-6 mx-px"
          />
        </div>
        <p class="max-w-sm text-justify">{{ project.description }}</p>
      </div>
      <div class="col-span-2">
        <a target="_blank" :href="project.link">
          <img
            :src="`/images/${project.image}`"
            :alt="project.name"
            class="w-64 h-48 object-contain"
        /></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  androidStudio,
  cSharp,
  codeIgniter,
  java,
  javascript,
  mySql,
  php,
  vueJs,
} from "@/data/skills.json"

const projects = [
  {
    name: "epsic.burkhalter.dev",
    image: "projects/prog-normalux.png",
    link: "https://epsic.burkhalter.dev",
    skills: [vueJs],
    dateRange: "janv. 2019 - juil. 2022",
    description:
      "Un site qui reprend et réexplique les modules d'informatique que j'ai vu en première année dans le but d'aider mes camarades. Depuis, chaque classe de première année l'utilise.",
  },
  {
    name: "Bataille navale",
    image: "projects/bataille-navale.png",
    link: "https://github.com/BurkhalterY/EPSIC_Bataille_Navale/releases",
    skills: [cSharp],
    dateRange: "nov. 2019",
    description:
      "Jeu réalisé dans le cadre de l'EPSIC. C'est un jeu de bataille navale classique avec quelques fonctionnalités supplémentaires telles que des sonars et des bombes nucléaires.",
  },
  {
    name: "Use Your Cheats",
    image: "projects/use-your-cheats.png",
    link: "https://github.com/BurkhalterY/UseYourCheats/releases",
    skills: [androidStudio, java, javascript],
    dateRange: "août 2019",
    description:
      "Petite application Android qui exploite une faille du jeu Use Your Words. Cela permet de connaître la house answer et de voter pour soi-même.",
  },
  {
    name: "Normalux.ch",
    image: "projects/normalux.png",
    link: "https://www.normalux.ch",
    skills: [codeIgniter, php, mySql],
    dateRange: "janv. 2018",
    description:
      "Un site de jeu dans lequel il faut reproduire un dessin en 45s selon un modèle (similaire à Pokedraw.net qui est maintenant down). Il y a plusieurs modes de jeu.",
  },
]
</script>
