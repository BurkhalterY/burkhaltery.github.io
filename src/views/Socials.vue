<template>
  <div class="px-8 pb-4 bg-white rounded">
    <h2 class="my-4 text-2xl text-center">{{ t("contact_me") }}</h2>
    <div class="grid grid-cols-3 gap-8">
      <a v-for="social of socials" target="_blank" :href="social.link" :class="social.classes">
        <img
          :src="`/images/socials/${social.icon}`"
          :alt="social.name"
          :title="social.name"
          class="object-contain w-16 h-16"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"

const { t } = useI18n({
  messages: {
    fr: {
      contact_me: "Me retrouver",
    },
    en: {
      contact_me: "Contact me",
    },
  },
})

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
  {
    name: "Buy Me A Coffee",
    icon: "buymeacoffee.png",
    link: "https://www.buymeacoffee.com/aestetica",
    classes: "col-span-3 -mt-4",
  },
]
</script>
