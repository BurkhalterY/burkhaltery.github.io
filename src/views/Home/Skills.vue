<template>
  <div class="bg-white rounded px-5 py-2">
    <h2 class="text-center my-2 text-2xl">Compétences</h2>
    <div class="flex justify-center">
      <div class="bg-white rounded m-3 p-3">
        <div class="grid grid-cols-4 gap-6">
          <div
            v-for="skill of skills"
            v-html="skill.svg"
            class="fill-current w-16 mx-auto"
            :style="`color: #${skill.hex};`"
            :title="skill.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
