<template>
  <div class="text-center">
    <h2 class="bg-white rounded px-10 py-5 mb-3 text-2xl inline-block">
      Compétences
    </h2>
    <div class="flex">
      <div v-for="category of categories" class="bg-white rounded m-3 p-3">
        <h3 class="text-xl">{{ category.name }}</h3>
        <div v-for="skill of category.skills">
          <img
            :src="`/skills/${skill.icon}`"
            :alt="skill.name"
            :title="skill.name"
            class="w-16 h-16 object-contain mx-auto my-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    name: "Web frontend",
    skills: [
      { name: "HTML 5", icon: "html.svg", level: 5 },
      { name: "CSS 3", icon: "css.svg", level: 4 },
      { name: "JavaScript", icon: "js.svg", level: 4 },
      { name: "Bootstrap", icon: "bootstrap.svg", level: 4.5 },
      { name: "Tailwind", icon: "tailwind.svg", level: 4.5 },
      { name: "Vue.js", icon: "vue.svg", level: 4 },
      { name: "Angular", icon: "angular.svg", level: 3.5 },
    ],
  },
  {
    name: "Web backend",
    skills: [
      { name: "PHP", icon: "php.svg", level: 4 },
      { name: "MySQL", icon: "mysql.svg", level: 4.5 },
      { name: "CodeIgniter", icon: "ci.svg", level: 4.5 },
    ],
  },
]
</script>
