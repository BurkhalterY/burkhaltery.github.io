<script setup>
const infos = [
  {
    name: "Country",
    value: "🇨🇭",
  },
  {
    name: "Languages",
    value: "🇫🇷 / 🇬🇧",
  },
  {
    name: "Email",
    value: "yannis@burkhalter.dev",
    url: "mailto:yannis@burkhalter.dev",
  },
  {
    name: "Discord",
    url: "https://discordapp.com/users/317230160124313610",
    value: "aestetica",
  },
  {
    name: "Favorite browser",
    value: "Firefox",
  },
]

const contacts = [
  {
    name: "Email",
    profile: "yannis@burkhalter.dev",
    icon: "thunderbird.svg",
    link: "mailto:yannis@burkhalter.dev",
  },
  {
    name: "Discord",
    profile: "aestetica",
    icon: "discord.svg",
    link: "https://discordapp.com/users/317230160124313610",
  },
  {
    name: "GitHub",
    profile: "BurkhalterY",
    icon: "github.svg",
    link: "https://github.com/BurkhalterY/",
  },
  {
    name: "LinkedIn",
    profile: "/in/yannis-burkhalter",
    icon: "linkedin.svg",
    link: "https://www.linkedin.com/in/yannis-burkhalter/",
  },
]
</script>

<template>
  <div class="grid gap-4 md:gap-8 md:grid-cols-2">
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/33062656"
        class="w-24 mx-auto mt-8 md:w-64"
      />
    </div>
    <div class="text-center md:text-start">
      <h1 class="my-0">Yannis</h1>
      <h2 class="text-2xl">Full Stack Developer</h2>
      <ul class="p-4">
        <li v-for="info in infos" :key="info.name" class="py-1">
          <span>
            {{ info.name }} :
            <a v-if="info.url" :href="info.url" target="_blank">
              {{ info.value }}
            </a>
            <template v-else>{{ info.value }}</template>
          </span>
        </li>
      </ul>
      <div class="flex justify-center gap-5">
        <a
          v-for="contact in contacts"
          :key="contact.name"
          :href="contact.link"
          target="_blank"
          class="inline-block"
        >
          <img
            :src="`/images/socials/${contact.icon}`"
            :alt="contact.name"
            :title="contact.profile"
            class="w-8 transition-transform no-border hover:scale-110"
          />
        </a>
      </div>
    </div>
  </div>
</template>
