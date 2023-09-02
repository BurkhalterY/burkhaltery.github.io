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
  <div>
    <img
      src="https://avatars.githubusercontent.com/u/33062656"
      class="float-right rounded max-h-20 sm:max-h-24"
    />
    <div class="mb-2 ml-0 sm:text-center sm:mx-auto w-max">
      <h1 class="text-4xl tracking-wide sm:text-6xl">
        <span>Yannis</span>
      </h1>
      <p class="mt-2 text-sm font-semibold text-gray-900">
        <span>Full Stack Developer</span>
      </p>
    </div>
    <div
      v-for="info in infos"
      :key="info.name"
      class="grid grid-cols-3 gap-4 py-2 my-4"
    >
      <dt class="font-light text-gray-900">
        {{ info.name }}
      </dt>
      <dd class="text-lg font-light text-gray-700">
        <a
          v-if="info.url"
          :href="info.url"
          target="_blank"
          class="text-sky-600 hover:text-sky-500"
        >
          {{ info.value }}
        </a>
        <template v-else>{{ info.value }}</template>
      </dd>
    </div>
    <div class="grid grid-cols-4 mt-4">
      <a
        v-for="contact in contacts"
        :key="contact.name"
        :href="contact.link"
        target="_blank"
      >
        <img
          :src="`/images/socials/${contact.icon}`"
          :alt="contact.name"
          :title="contact.profile"
          class="h-6 mx-auto"
        />
      </a>
    </div>
  </div>
</template>
