<script setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/20/solid"

const props = defineProps({
  item: Object,
})
</script>

<template>
  <div class="card bg-slate-50">
    <img
      v-if="item.type == 'project'"
      :src="`/images/${item.image}`"
      :alt="item.name"
      :title="item.name"
      class="sm:hidden"
    />
    <div class="flex gap-8">
      <img
        v-if="item.type == 'project'"
        :src="`/images/${item.image}`"
        :alt="item.name"
        :title="item.name"
        class="hidden sm:m-0 sm:block sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
      />
      <div class="card-body relative flex flex-col gap-y-2">
        <div class="flex flex-col md:flex-row justify-between gap-y-2">
          <img
            v-if="item.type != 'project'"
            :src="`/images/${item.image}`"
            :alt="item.school || item.name"
            :title="item.school || item.name"
            class="w-48 h-8 object-contain self-center md:align-top md:object-right !m-0 md:order-last"
          />
          <h4 class="!mb-0 flex flex-col sm:flex-row gap-x-5">
            {{ item.name }}
            <span class="text-base align-middle">{{ item.location }}</span>
          </h4>
        </div>
        <div>
          <div>{{ item.school || item.title }}</div>
          <div>
            {{ item.start || item.year }}
            <template v-if="item.end && item.end != item.start">
              - {{ item.end }}
            </template>
          </div>
          <div class="text-sm">{{ item.description }}</div>
        </div>
        <ul v-if="item.links" class="px-3">
          <li v-for="link in item.links" :key="link.name">
            <a :href="link.url" target="_blank">
              {{ link.name }}
              <img
                v-if="link.url.endsWith('.pdf')"
                src="/images/icons/pdf.svg"
                alt="PDF icon"
                class="inline h-4 py-0.5"
              />
              <ArrowTopRightOnSquareIcon v-else class="inline h-4" />
            </a>
          </li>
        </ul>
        <div
          v-if="item.skills"
          class="flex justify-center gap-5 px-8 md:justify-start"
        >
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
