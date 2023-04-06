<template>
  <div class="p-5 bg-white rounded">
    <div class="grid grid-cols-5 gap-5">
      <div class="sm:col-span-2">
        <img class="rounded" :class="pp.class" :src="`/images/pp/${pp.path}`" />
      </div>
      <div class="col-span-4 font-mono sm:col-span-3">
        <h1 class="text-3xl">Yannis Burkhalter</h1>
        <table class="w-full">
          <tr>
            <td>{{ t("age") }}</td>
            <td>{{ t("age_value") }}</td>
          </tr>
          <tr>
            <td>{{ t("job") }}</td>
            <td>{{ t("job_value") }}</td>
          </tr>
          <tr>
            <td>{{ t("occupation") }}</td>
            <td>{{ t("occupation_value") }}</td>
          </tr>
          <tr>
            <td>{{ t("location") }}</td>
            <td>{{ t("location_value") }}</td>
          </tr>
          <tr>
            <td>{{ t("email") }}</td>
            <td>
              <a href="mailto:yannis@burkhalter.dev">yannis@burkhalter.dev</a>
            </td>
          </tr>
          <tr>
            <td>{{ t("discord") }}</td>
            <td>aestetica#9521</td>
          </tr>
          <tr>
            <td>{{ t("language") }}</td>
            <td>🇫🇷 🇬🇧</td>
          </tr>
          <tr>
            <td>{{ t("status") }}</td>
            <td>
              <a href="https://tinder.com/@YBU" target="_blank">{{ t("status_value") }}</a>
            </td>
          </tr>
          <tr>
            <td>{{ t("favorite_browser") }}</td>
            <td>{{ t("favorite_browser_value") }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"

const { t } = useI18n({
  messages: {
    fr: {
      age: "Âge",
      age_value: "20 ans",
      job: "Travail",
      job_value: "Open Net Sàrl",
      occupation: "Profession",
      occupation_value: "Informaticien, développeur",
      location: "Ville",
      location_value: "Vevey, Suisse",
      email: "E-mail",
      discord: "Discord",
      language: "Langue",
      status: "Statut",
      status_value: "Célibataire",
      favorite_browser: "Navigateur préféré",
      favorite_browser_value: "Firefox",
    },
    en: {
      age: "Age",
      age_value: "20 years old",
      job: "Job",
      job_value: "Open Net Sàrl",
      occupation: "Occupation",
      occupation_value: "Developer",
      location: "Location",
      location_value: "Vevey, Switzerland",
      email: "E-mail",
      discord: "Discord",
      language: "Language",
      status: "Status",
      status_value: "Single",
      favorite_browser: "Favorite browser",
      favorite_browser_value: "Firefox",
    },
  },
})

const pp = Math.random() <= 0.95 ? {class="w-64", path: "aestetica.png"} : {class="w-48", path: "MadScientist.png"}
</script>
