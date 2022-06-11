<template>
  <div class="bg-white rounded px-8 pb-4">
    <h2 class="text-2xl text-center my-4">Me retrouver</h2>
    <div class="grid grid-cols-3 gap-8">
      <a v-for="social of socials" target="_blank" :href="social.link">
        <img
          :src="`/icons/socials/${social.icon}`"
          :alt="social.name"
          :title="social.name"
          class="object-contain w-16 h-16"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
const socials = [
  {
    name: "GitHub",
    icon: "github.svg",
    link: "https://github.com/BurkhalterY/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin.svg",
    link: "https://www.linkedin.com/in/yannis-burkhalter/",
  },
  {
    name: "Discord",
    icon: "discord.svg",
    link: "https://discord.gg/z67yZjh",
  },
  {
    name: "YouTube",
    icon: "youtube.svg",
    link: "https://www.youtube.com/channel/UCbv1uNvn53SHwSSY19luZvQ",
  },
  {
    name: "Instagram",
    icon: "instagram.svg",
    link: "https://www.instagram.com/yannis_burkhalter/",
  },
  {
    name: "Twitter",
    icon: "twitter.svg",
    link: "https://twitter.com/DevVenere",
  },
]
</script>
