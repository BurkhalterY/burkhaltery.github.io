<script setup>
const props = defineProps({
  item: Object,
})
</script>

<template>
  <div class="card bg-slate-50">
    <div class="flex gap-8">
      <div class="card-body">
        <img
          :src="`/images/schools/${item.image}`"
          :alt="item.school"
          :title="item.school"
          class="h-8 float-right !m-0"
        />
        <h4 class="card-title">{{ item.certificate }}</h4>
        <span class="card-text">
          {{ item.school }}<br />
          {{ item.start }} - {{ item.end }}
        </span>
        <div class="flex justify-center gap-5 p-5 md:justify-start">
          <img
            v-for="skill in item.skills"
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
