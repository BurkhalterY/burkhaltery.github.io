<script setup>
const contacts = [
  {
    name: "E-mail",
    profile: "yannis@burkhalter.dev",
    icon: "email.png",
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
  <div class="p-4 bg-white rounded">
    <div class="flex gap-4">
      <div class="sm:col-span-2">
        <img class="w-64 rounded" src="/images/pp/aestetica.webp" />
      </div>
      <div class="col-span-4 font-mono sm:col-span-3">
        <h1 class="text-3xl mx-8">Yannis Burkhalter</h1>
        <table class="w-full text-lg">
          <tr>
            <td>Developer</td>
            <td>at Open Net Sàrl</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>🇨🇭</td>
          </tr>
          <tr>
            <td>Languages</td>
            <td>🇫🇷 🇬🇧</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <a href="mailto:yannis@burkhalter.dev">yannis@burkhalter.dev</a>
            </td>
          </tr>
          <tr>
            <td>Discord</td>
            <td>
              <a href="https://discordapp.com/users/317230160124313610"
                >aestetica</a
              >
            </td>
          </tr>
          <tr>
            <td>Favorite browser</td>
            <td>Firefox</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="grid grid-cols-4 mt-4">
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
          class="object-contain w-20 h-20 mx-auto"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
table td {
  @apply pr-4;
}
</style>
