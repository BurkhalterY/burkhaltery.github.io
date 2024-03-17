<script setup>
const props = defineProps({
  school: Object,
  sequence: Number,
})
</script>

<template>
  <div class="my-16 card bg-slate-50">
    <div class="flex gap-8">
      <div class="card-body">
        <img
          :src="`/images/schools/${school.image}`"
          :alt="school.school"
          :title="school.school"
          class="h-8 float-right !m-0"
        />
        <h4 class="card-title">{{ school.certificate }}</h4>
        <span class="card-text">
          {{ school.school }}<br />
          {{ school.start }} - {{ school.end }}
        </span>
        <div class="flex justify-center gap-5 p-5 md:justify-start">
          <img
            v-for="skill in school.skills"
            :key="skill.name"
            :src="`/images/skills/${skill.icon}`"
            :alt="skill.name"
            :title="skill.name"
            class="w-8 h-8 border"
          />
        </div>
      </div>
    </div>
  </div>
</template>
