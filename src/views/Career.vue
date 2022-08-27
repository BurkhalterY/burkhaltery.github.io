<template>
  <div class="bg-white rounded px-10 py-5 max-w-3xl">
    <table>
      <template v-for="(group, index) of experiences">
        <tr>
          <td colspan="5">
            <h2 class="text-2xl text-center" :class="{ 'mt-5': index }">
              {{ group.name }}
            </h2>
          </td>
        </tr>
        <template v-for="company of group.companies">
          <tr>
            <td colspan="5">
              <h3 class="text-xl mt-5 mb-1">
                {{ company.name }},
                <span class="text-lg">{{ company.location }}</span>
              </h3>
            </td>
          </tr>
          <template v-for="place of company.places" class="pl-5">
            <tr>
              <td :colspan="place.start != place.end ? 1 : 3">
                {{ place.start }}
              </td>
              <td v-if="place.start != place.end">-</td>
              <td v-if="place.start != place.end">
                <span v-if="place.end">{{ place.end }}</span>
                <span v-else class="text-xs mr-2">Aujourd'hui</span>
              </td>
              <td>{{ place.job }}</td>
            </tr>
            <tr>
              <td colspan="3" />
              <td>
                <div class="text-sm italic">
                  {{ place.description }}
                </div>
                <div class="mt-1 mb-3">
                  <img
                    v-for="skill of place.skills"
                    :src="`/images/skills/${skill.icon}`"
                    :alt="skill.name"
                    :title="skill.name"
                    class="object-contain align-text-bottom inline w-6 h-6 mx-px"
                  />
                </div>
              </td>
            </tr>
          </template>
        </template>
      </template>
    </table>
    <span class="text-xs">Envoie de documents sur demande</span>
  </div>
</template>

<script setup>
import {
  android,
  androidStudio,
  angular,
  bootstrap,
  cSharp,
  codeIgniter,
  css,
  html,
  java,
  javascript,
  justBasic,
  kotlin,
  laravel,
  mySql,
  odoo,
  php,
  python,
  tailwind,
  ubuntu,
  vueJs,
} from "@/data/skills.json"

const experiences = [
  {
    name: "Expériences professionnelles",
    companies: [
      {
        name: "Open Net Sàrl",
        location: "Lausanne",
        places: [
          {
            job: "Développeur Odoo",
            start: 2022,
            end: false,
            description: "Customisation Odoo et développement Vue.js.",
            skills: [],
          },
          {
            job: "Apprenti informaticien",
            start: 2021,
            end: 2022,
            description:
              "Dernière année d'apprentissage chez Open Net, intégrateur Odoo.",
            skills: [odoo, python, vueJs, tailwind, ubuntu],
          },
        ],
      },
      {
        name: "Orif",
        location: "Pomy, Aigle",
        places: [
          {
            job: "Apprenti informaticien",
            start: 2018,
            end: 2021,
            description:
              "Apprentissage en informatique, orienté développement d'applications. J'ai, entre autres, participé au développement d'un gestionnaire de stock en PHP avec le framework CodeIgniter.",
            skills: [bootstrap, php, mySql, codeIgniter],
          },
          {
            job: "Préformation",
            start: 2017,
            end: 2018,
            description:
              "Préformation d'un an au sein de la section informatique de Pomy.",
            skills: [html, css, javascript, justBasic],
          },
        ],
      },
    ],
  },
  {
    name: "Formation",
    companies: [
      {
        name: "ETML",
        location: "Lausanne",
        places: [
          {
            job: "Maturité Professionnelle technique, architecture et sciences de la vie",
            start: 2022,
            end: 2024,
            description: "Dans le but d'accéder à une HES ou à l'EPFL, à définir.",
            skills: [],
          },
        ],
      },
      {
        name: "EPSIC",
        location: "Lausanne",
        places: [
          {
            job: "Apprenti informaticien CFC, orientation développement d'applications",
            start: 2018,
            end: 2022,
            description: "Formation de 4 ans, terminée avec mention bien.",
            skills: [java, cSharp, angular],
          },
        ],
      },
    ],
  },
  {
    name: "Stages",
    companies: [
      {
        name: "Quicksite SA",
        location: "Vevey",
        places: [
          {
            job: "Stage de développeur PHP",
            start: 2020,
            end: 2021,
            description:
              "Stage de 9 mois chez Quicksite, agence web, chez qui j'ai développé une interface de traduction pour Laravel.",
            skills: [php, laravel],
          },
        ],
      },
      {
        name: "Orif SIT",
        location: "Préverenges",
        places: [
          {
            job: "Stage de développeur C#",
            start: 2020,
            end: 2020,
            description:
              "Stage de 2 mois au SIT de l'Orif où j'étais chargé de développer un logiciel interne.",
            skills: [cSharp],
          },
        ],
      },
      {
        name: "Creatis Informatique",
        location: "Préverenges",
        places: [
          {
            job: "Stage de développeur Android",
            start: 2019,
            end: 2019,
            description:
              "Stage de 5 mois durant lequel j'ai participé au développement d'applications Android avec Java et Kotlin.",
            skills: [android, java, kotlin, androidStudio],
          },
        ],
      },
    ],
  },
]
</script>
