<script setup>
import Me from "@/views/Home/MeComponent.vue"
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <div class="container paper">
    <Me />
    <div class="flex m-5 gap-5 text-center">
      <RouterLink
        class="paper-btn btn-block"
        activeClass="btn-secondary"
        :to="{ name: 'Projects' }"
      >
        Projects
      </RouterLink>
      <RouterLink
        class="paper-btn btn-block"
        activeClass="btn-secondary"
        :to="{ name: 'Education' }"
      >
        Education
      </RouterLink>
    </div>
    <RouterView />
    <div class="mb-4 text-center md:mb-0">
      &copy; {{ new Date().getFullYear() }} Yannis Burkhalter
    </div>
  </div>
</template>
