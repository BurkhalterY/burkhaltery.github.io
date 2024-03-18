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
          :src="`/images/companies/${item.image}`"
          :alt="item.comapny"
          :title="item.comapny"
          class="w-48 h-8 object-contain object-right float-right !m-0 !mb-2"
        />
        <h4 class="card-title">
          {{ item.company }}
          <span class="text-base ml-5">{{ item.location }}</span>
        </h4>
        <span class="card-text">
          {{ item.title }}<br />{{ item.start }}
          <component v-if="item.end">- {{ item.end }}</component>
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
