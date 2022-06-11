<template>
  <div class="grow flex justify-center items-center my-16" v-for="item of list">
    <component :is="item" />
  </div>
</template>

<script setup>
import Intro from "./Intro.vue"
import Career from "./Career.vue"
import Hobbies from "./Hobbies.vue"

const list = [Intro, Career]
</script>
