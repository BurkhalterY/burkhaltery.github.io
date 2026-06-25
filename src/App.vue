<script setup>
import Item from "@/views/Home/ItemComponent.vue"
import Me from "@/views/Home/MeComponent.vue"
import { reactive, ref } from "vue"
import items from "@/data/data.js"

const actives = reactive({
  project: true,
  work: true,
  education: true,
  certification: true,
})

const currentItem = ref(null)
</script>

<template>
  <div class="container paper">
    <Me />
    <div class="flex flex-col md:flex-row m-5 gap-5 text-center">
      <button
        @click="actives.project = !actives.project"
        class="paper-btn btn-block !mb-0"
        :class="!actives.project ? 'btn-primary disabled' : 'btn-secondary'"
      >
        Projects
      </button>
      <button
        @click="actives.work = !actives.work"
        class="paper-btn btn-block !mb-0"
        :class="!actives.work ? 'btn-primary disabled' : 'btn-secondary'"
      >
        Work Experiences
      </button>
      <button
        @click="actives.education = !actives.education"
        class="paper-btn btn-block !mb-0"
        :class="!actives.education ? 'btn-primary disabled' : 'btn-secondary'"
      >
        Education
      </button>
      <button
        @click="actives.certification = !actives.certification"
        class="paper-btn btn-block !mb-0"
        :class="!actives.certification ? 'btn-primary disabled' : 'btn-secondary'"
      >
        Certifications
      </button>
    </div>
    <TransitionGroup name="fade">
      <div
        v-for="(item, i) in items.filter((x) => actives[x.type])"
        :key="item"
        class="w-full"
      >
        <Item :item="item" class="my-16 w-full" @click="currentItem = item" />
      </div>
    </TransitionGroup>
    <div class="mb-4 text-center md:mb-0">
      &copy; {{ new Date().getFullYear() }} Yannis Burkhalter
    </div>
    <teleport to="body">
      <div
        v-if="currentItem"
        @click="currentItem = null"
        class="fixed inset-0 z-20 grid items-center justify-center px-4 py-8 overflow-y-auto bg-black bg-opacity-50"
      >
        <div @click.stop>
          <Item :item="currentItem" :popup="true" />
        </div>
      </div>
    </teleport>
  </div>
</template>
