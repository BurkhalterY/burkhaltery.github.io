<script setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/20/solid"

const props = defineProps({
  item: Object,
})
</script>

<template>
  <div class="card bg-slate-50">
    <img
      :src="`/images/projects/${item.image}`"
      :alt="item.name"
      :title="item.name"
      class="md:hidden"
    />
    <div class="flex gap-8">
      <img
        :src="`/images/projects/${item.image}`"
        :alt="item.name"
        :title="item.name"
        class="hidden md:h-48 md:w-48 md:m-3 md:block lg:h-64 lg:w-64 lg:m-0"
      />
      <div class="card-body relative">
        <h4 class="card-title">{{ item.name }}</h4>
        <p class="card-text">{{ item.description }}</p>
        <ul class="px-3">
          <li v-for="link in item.links" :key="link.name">
            <a :href="link.url" target="_blank">
              {{ link.name }}
              <ArrowTopRightOnSquareIcon class="inline w-4" />
            </a>
          </li>
        </ul>
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
        <span class="absolute bottom-4 right-8">{{ item.year }}</span>
      </div>
    </div>
  </div>
</template>
