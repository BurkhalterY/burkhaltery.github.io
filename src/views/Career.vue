<template>
  <div class="bg-white rounded px-10 py-5 max-w-3xl">
    <table>
      <template v-for="(group, index) of experiences">
        <tr>
          <td colspan="5">
            <h2 class="text-2xl text-center" :class="{ 'mt-5': index }">
              {{ group.name[locale] }}
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
                <span v-else class="text-xs mr-2">{{ t("today") }}</span>
              </td>
              <td>{{ place.job[locale] }}</td>
            </tr>
            <tr>
              <td colspan="3" />
              <td>
                <div class="text-sm italic">
                  {{ place.description[locale] }}
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
    <span class="text-xs">{{ t("sending_documents_on_request") }}</span>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"
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
  powerShell,
  python,
  tailwind,
  ubuntu,
  vueJs,
} from "@/data/skills.json"

const { t, locale } = useI18n({
  messages: {
    fr: {
      today: "Aujourd'hui",
      sending_documents_on_request: "Envoie de documents sur demande",
    },
    en: {
      today: "Today",
      sending_documents_on_request: "Sending documents on request",
    },
  },
})

const experiences = [
  {
    name: "Expériences professionnelles",
    companies: [
      {
        name: "Open Net Sàrl",
        location: "Lausanne",
        places: [
          {
            job: {
              fr: "Développeur Odoo",
              en: "Odoo developer",
            },
            start: 2022,
            end: false,
            description: {
              fr: "Customisation Odoo et développement Vue.js.",
              en: "Odoo customization & Vue.js.",
            },
            skills: [],
          },
          {
            job: {
              fr: "Apprenti informaticien",
              en: "IT apprentice",
            },
            start: 2021,
            end: 2022,
            description: {
              fr: "Dernière année d'apprentissage chez Open Net, intégrateur Odoo.",
              en: "I have finished my apprenticeship at Open Net, Odoo integrator.",
            },
            skills: [odoo, python, vueJs, tailwind, ubuntu],
          },
        ],
      },
      {
        name: "Orif",
        location: "Pomy, Aigle",
        places: [
          {
            job: {
              fr: "Apprenti informaticien",
              en: "IT apprentice",
            },
            start: 2018,
            end: 2021,
            description: {
              fr: "Apprentissage en informatique, orienté développement d'applications. J'ai, entre autres, participé au développement d'un gestionnaire de stock en PHP avec le framework CodeIgniter.",
              en: "I have did the 3 first years of my apprenticeship at Orif, with somes stages on many others companies.",
            },
            skills: [bootstrap, php, mySql, codeIgniter],
          },
          {
            job: {
              fr: "Préformation",
              en: "Pre-training",
            },
            start: 2017,
            end: 2018,
            description: {
              fr: "Préformation d'un an au sein de la section informatique de Pomy.",
              en: "Before starting my apprenticeship, I have did a pre-training at Orif where I have learned the IT and development basics.",
            },
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
            job: {
              fr: "Maturité Professionnelle, technique, architecture et sciences de la vie",
              en: "Vocational Baccalaureate, Engineering, Architecture, Life Sciences",
            },
            start: 2022,
            end: 2024,
            description: {
              fr: "Dans le but d'accéder à une HES ou à l'EPFL, à définir.",
              en: "For accessing EPFL or another High School.",
            },
            skills: [],
          },
        ],
      },
      {
        name: "EPSIC",
        location: "Lausanne",
        places: [
          {
            job: {
              fr: "CFC informaticien, développement d'applications",
              en: "Federal VET Diploma, Application Development",
            },
            start: 2018,
            end: 2022,
            description: {
              fr: "Formation de 4 ans, terminée avec mention bien.",
              en: "4 year apprenticeship, finish with a « good » mention.",
            },
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
            job: {
              fr: "Stage de développeur PHP",
              en: "PHP developer stage",
            },
            start: 2020,
            end: 2021,
            description: {
              fr: "Stage de 9 mois chez Quicksite, agence web, chez qui j'ai développé une interface de traduction pour Laravel.",
              en: "9 months stage at Quicksite, where I have developed an translation interface with Laravel.",
            },
            skills: [php, laravel],
          },
        ],
      },
      {
        name: "Orif SIT",
        location: "Préverenges",
        places: [
          {
            job: {
              fr: "Stage de développeur C#",
              en: "C# developer stage",
            },
            start: 2020,
            end: 2020,
            description: {
              fr: "Stage de 2 mois au SIT de l'Orif où j'étais chargé de développer un logiciel interne.",
              en: "2 months stage at Orif SIT, where I have developed an internal software in C# and PowerShell.",
            },
            skills: [cSharp, powerShell],
          },
        ],
      },
      {
        name: "Creatis Informatique",
        location: "Préverenges",
        places: [
          {
            job: {
              fr: "Stage de développeur Android",
              en: "Android developer stage",
            },
            start: 2019,
            end: 2019,
            description: {
              fr: "Stage de 5 mois durant lequel j'ai participé au développement d'applications Android avec Java et Kotlin.",
              en: "5 months stage at Creatis, where I have ported iOS applications to Android.",
            },
            skills: [android, java, kotlin, androidStudio],
          },
        ],
      },
    ],
  },
]
</script>
