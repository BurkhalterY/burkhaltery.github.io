<template>
  <div class="max-w-3xl px-10 py-5 bg-white rounded">
    <table>
      <template v-for="(group, index) of experiences">
        <tr>
          <td colspan="5">
            <h2
              class="text-2xl text-center uppercase"
              :class="{ 'mt-5': index }"
            >
              {{ group.name[locale] }}
            </h2>
          </td>
        </tr>
        <template v-for="company of group.companies">
          <tr>
            <td colspan="5">
              <h3 class="mt-5 mb-1 text-xl">
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
                <span v-else class="mr-2 text-xs">{{ t("today") }}</span>
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
                    class="inline object-contain w-6 h-6 mx-px align-text-bottom"
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
    name: {
      fr: "Expériences professionnelles",
      en: "Work Experience",
    },
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
            skills: [
              { name: "Odoo", icon: "odoo.svg" },
              { name: "Python", icon: "python.svg" },
              { name: "Vue 3", icon: "vuejs.svg" },
              { name: "Ubuntu", icon: "ubuntu.svg" },
            ],
          },
          {
            job: {
              fr: "Apprenti informaticien",
              en: "IT apprentice",
            },
            start: 2021,
            end: 2022,
            description: {
              fr: "Dernière année d'apprentissage effectuée chez Open Net, intégrateur Odoo.",
              en: "I did my last year of apprenticeship at Open Net, Odoo integrator.",
            },
            skills: [],
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
            start: 2017,
            end: 2021,
            description: {
              fr: "Apprentissage en informatique, orienté développement d'applications, commencé à l'Orif, durant lequel j'ai pu effectuer plusieurs stages en entreprise.",
              en: "I start my apprenticeship at Orif, with somes stages on many others companies.",
            },
            skills: [
              { name: "PHP", icon: "php.svg" },
              { name: "SQL", icon: "mysql.svg" },
              { name: "CodeIgniter", icon: "codeigniter.svg" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: {
      fr: "Formation",
      en: "Education",
    },
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
              fr: "Informaticien CFC, orienté développement d'applications",
              en: "Federal VET Diploma, Application Development",
            },
            start: 2018,
            end: 2022,
            description: {
              fr: "Apprentissage de 4 ans, terminée avec mention bien.",
              en: "4-year apprenticeship, finish with a «\xa0good\xa0» mention.",
            },
            skills: [
              { name: "Java", icon: "java.svg" },
              { name: "C#", icon: "csharp.svg" },
              { name: "Angular", icon: "angular.svg" },
            ],
          },
        ],
      },
    ],
  },
]
</script>
