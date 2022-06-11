<template>
  <div class="bg-white rounded px-5 py-2 w-full max-w-6xl">
    <div id="timeline" style="height: 300px" />
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { Timeline } from "@knight-lab/timelinejs"
import "@knight-lab/timelinejs/dist/css/timeline.css"

const json = {
  events: [
    // Formations
    {
      text: { text: "Scolarité obligatoire, Vevey" },
      job: "",
      start_date: { year: 2006, month: 8, day: 1 },
      end_date: { year: 2017, month: 7, day: 31 },
    },
    {
      text: { text: "EPSIC, Lausanne" },
      job: "Informaticien CFC, orientation développement d'applications",
      start_date: { year: 2018, month: 8, day: 1 },
      end_date: { year: 2022, month: 7, day: 31 },
    },
    // Jobs
    {
      text: { text: "Orif, Pomy" },
      job: "Préapprentissage",
      start_date: { year: 2017, month: 8, day: 1 },
      end_date: { year: 2018, month: 7, day: 31 },
    },
    {
      text: { text: "Orif, Pomy" },
      job: "Apprenti informaticien développeur",
      start_date: { year: 2018, month: 8, day: 1 },
      end_date: { year: 2020, month: 12, day: 31 },
    },
    {
      text: { text: "Orif, Aigle" },
      job: "Apprenti informaticien développeur",
      start_date: { year: 2021, month: 1, day: 1 },
      end_date: { year: 2021, month: 7, day: 31 },
    },
    {
      text: { text: "Open Net Sàrl, Lausanne" },
      job: "Apprenti informaticien développeur",
      start_date: { year: 2021, month: 8, day: 1 },
      end_date: { year: 2022, month: 7, day: 31 },
    },
    // Stages
    {
      text: { text: "Creatis Informatique, Préverenges" },
      job: "Stage",
      start_date: { year: 2019, month: 1, day: 1 },
      end_date: { year: 2019, month: 6, day: 30 },
    },
    {
      text: { text: "Orif SIT, Préverenges" },
      job: "Stage",
      start_date: { year: 2020, month: 8, day: 1 },
      end_date: { year: 2020, month: 10, day: 14 }, // check
    },
    {
      text: { text: "Quicksite SA, Vevey" },
      job: "Stage",
      start_date: { year: 2020, month: 10, day: 15 }, // check
      end_date: { year: 2021, month: 7, day: 31 },
    },
  ],
}

onMounted(() => {
  const timeline = new Timeline("timeline", json, {
    font: "fuck is the best font",
    language: "fr",
    start_at_end: true,
  })
  console.log(timeline)
})
</script>
