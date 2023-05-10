<template>
  <div class="px-8 pb-4 bg-white rounded">
    <h2 class="my-4 text-2xl text-center">{{ t("contact_me") }}</h2>
    <div class="grid grid-cols-2 gap-8">
      <a
        v-for="contact of contacts"
        target="_blank"
        :href="contact.link"
        class="text-center"
      >
        <img
          :src="`/images/socials/${contact.icon}`"
          :alt="contact.name"
          :title="contact.name"
          class="object-contain w-16 h-16 mx-auto"
        />
        <strong>{{ contact.profile }}</strong>
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

const contacts = [
  {
    name: "Discord",
    profile: "aestetica#9521",
    icon: "discord.svg",
    link: "https://discordapp.com/users/317230160124313610",
  },
  {
    name: "E-mail",
    profile: "yannis@burkhalter.dev",
    icon: "email.png",
    link: "mailto:yannis@burkhalter.dev",
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
