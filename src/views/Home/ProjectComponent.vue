<script setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/20/solid"

const props = defineProps({
  project: Object,
  sequence: Number,
})
</script>

<template>
  <div class="my-16 card bg-slate-50">
    <img
      :src="`/images/projects/${project.image}`"
      :alt="project.name"
      :title="project.name"
      class="md:hidden"
    />
    <div class="flex gap-8">
      <div class="card-body">
        <h4 class="card-title">{{ project.name }}</h4>
        <p class="card-text">{{ project.description }}</p>
        <ul class="px-3">
          <li v-for="link in project.links" :key="link.name">
            <a :href="link.url" target="_blank">
              {{ link.name }}
              <ArrowTopRightOnSquareIcon class="inline w-4" />
            </a>
          </li>
        </ul>
        <div class="flex justify-center gap-5 p-5 md:justify-start">
          <img
            v-for="skill in project.skills"
            :key="skill.name"
            :src="`/images/skills/${skill.icon}`"
            :alt="skill.name"
            :title="skill.name"
            class="w-8 border"
          />
        </div>
      </div>
      <img
        :src="`/images/projects/${project.image}`"
        :alt="project.name"
        :title="project.name"
        class="hidden md:h-48 md:w-48 md:m-3 md:block lg:h-64 lg:w-64 lg:m-0"
        :class="{ 'order-first': sequence % 2 != 0 }"
      />
    </div>
  </div>
</template>
