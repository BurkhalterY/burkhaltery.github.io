<script setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/20/solid"

const props = defineProps({
  project: Object,
  sequence: Number,
})
</script>

<template>
  <div class="grid gap-5 sm:grid-cols-2">
    <div class="flex flex-col gap-5">
      <h2 class="text-3xl font-light text-center">{{ project.name }}</h2>
      <div class="flex justify-center gap-3">
        <img
          v-for="skill in project.skills"
          :key="skill.name"
          :src="`/images/skills/${skill.icon}`"
          :alt="skill.name"
          :title="skill.name"
          class="inline object-contain w-8 h-8 align-text-bottom"
        />
      </div>
      <p class="text-justify">{{ project.description }}</p>
      <img
        :src="`/images/projects/${project.image}`"
        :alt="project.name"
        :title="project.name"
        class="w-64 mx-auto sm:hidden"
      />
      <ul class="ml-3">
        <li v-for="link in project.links" :key="link.name">
          <a
            :href="link.url"
            target="_blank"
            class="text-sky-600 hover:text-sky-500"
          >
            <ArrowTopRightOnSquareIcon class="inline h-4" />
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
    <img
      :src="`/images/projects/${project.image}`"
      :alt="project.name"
      :title="project.name"
      class="hidden sm:block"
      :class="{ 'order-first': sequence % 2 != 0 }"
    />
  </div>
</template>
