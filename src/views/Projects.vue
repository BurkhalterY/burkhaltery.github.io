<template>
  <div>
    <h2 class="text-2xl text-center my-4 px-2 py-1 bg-white rounded">
      {{ t("some_projects") }}
    </h2>
    <div
      class="my-5 p-5 bg-white rounded grid grid-cols-5 gap-5"
      v-for="(project, i) in projects"
    >
      <div class="col-span-3" :class="{ 'order-1': i % 2 == 0 }">
        <h3 class="text-2xl">{{ project.name[locale] }}</h3>
        <div class="mt-1">
          <img
            v-for="skill of project.skills"
            :src="`/images/skills/${skill.icon}`"
            :alt="skill.name"
            :title="skill.name"
            class="object-contain align-text-bottom inline w-6 h-6 mx-px"
          />
        </div>
        <p class="max-w-sm text-justify">{{ project.description[locale] }}</p>
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
import { useI18n } from "vue-i18n"
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

const { t, locale } = useI18n({
  messages: {
    fr: {
      some_projects: "Quelques projets",
    },
    en: {
      some_projects: "Some projects",
    },
  },
})

const projects = [
  {
    name: {
      fr: "epsic.burkhalter.dev",
      en: "epsic.burkhalter.dev",
    },
    image: "projects/prog-normalux.png",
    link: "https://epsic.burkhalter.dev",
    skills: [vueJs],
    dateRange: "janv. 2019 - juil. 2022",
    description: {
      fr: "Un site qui reprend et réexplique les modules d'informatique que j'ai vu en première année dans le but d'aider mes camarades. Depuis, chaque classe de première année l'utilise.",
      en: "A website with the content of many of our first year of apprenticeship courses at EPSIC. Firstly made with CodeIgniter in PHP, then with Angular, and finally with Vue.js.",
    },
  },
  {
    name: {
      fr: "Bataille navale",
      en: "Battleship",
    },
    image: "projects/bataille-navale.png",
    link: "https://github.com/BurkhalterY/EPSIC_Bataille_Navale/releases",
    skills: [cSharp],
    dateRange: "nov. 2019",
    description: {
      fr: "Jeu réalisé dans le cadre de l'EPSIC. C'est un jeu de bataille navale classique avec quelques fonctionnalités supplémentaires telles que des sonars et des bombes nucléaires.",
      en: "A fully fonctional battleship game with a lot of additional features like «\xa0sonars\xa0» and «\xa0nuclear bombs\xa0».",
    },
  },
  {
    name: {
      fr: "Use Your Cheats",
      en: "Use Your Cheats",
    },
    image: "projects/use-your-cheats.png",
    link: "https://github.com/BurkhalterY/UseYourCheats/releases",
    skills: [androidStudio, java, javascript],
    dateRange: "août 2019",
    description: {
      fr: "Petite application Android qui exploite une faille du jeu Use Your Words. Cela permet de connaître la house answer et de voter pour soi-même.",
      en: "A little Android application that exploit a fault on the Use Your Words backend. That's allow you to vote for yourself and know which is the house answer.",
    },
  },
  {
    name: {
      fr: "Normalux.ch",
      en: "Normalux.ch",
    },
    image: "projects/normalux.png",
    link: "https://www.normalux.ch",
    skills: [codeIgniter, php, mySql],
    dateRange: "janv. 2018",
    description: {
      fr: "Un site de jeu dans lequel il faut reproduire un dessin en 45 secondes selon un modèle (similaire à Pokedraw.net qui est maintenant down). Il y a plusieurs modes de jeu.",
      en: "A drawing website where you have to reproduce a model in only 45″. There are a lot of game modes and explore the gallery may be very funny!",
    },
  },
]
</script>
