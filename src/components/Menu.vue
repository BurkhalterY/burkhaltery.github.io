<template>
  <Menu as="nav" class="w-full text-white p-1">
    <span class="hidden md:inline-block m-1 p-1 text-center float-right">
      Yannis Burkhalter &copy;
    </span>
    <template v-for="item of menu">
      <template v-if="item.submenu">
        <MenuButton
          as="span"
          class="block md:inline-block m-1 text-center p-1 rounded hover:bg-white hover:text-black"
        >
          <button>
            {{ item.name }}
          </button>
        </MenuButton>
        <MenuItems as="span">
          <template v-for="subitem of item.submenu">
            <MenuItem>
              <router-link
                :to="{ name: subitem.route }"
                class="block md:inline-block m-1 text-center p-1 rounded hover:bg-white hover:text-black"
                active-class="bg-white text-black"
              >
                {{ subitem.name }}
              </router-link>
            </MenuItem>
          </template>
        </MenuItems>
      </template>
      <MenuItem v-else>
        <router-link
          :to="{ name: item.route }"
          class="block md:inline-block m-1 text-center p-1 rounded hover:bg-white hover:text-black"
          active-class="bg-white text-black"
        >
          {{ item.name }}
        </router-link>
      </MenuItem>
    </template>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue"

const showFullMode = import.meta.env.VITE_SHOW_FULL_MODE === "true"
const menu = [
  {
    name: "Présentation",
    route: "Home",
  },
  {
    name: "Parcours",
    route: "Career",
  },
  {
    name: "Projets",
    route: "Projects",
  },
  ...(showFullMode
    ? [
        {
          name: "Hobbies",
          submenu: [
            {
              name: "Musique",
              route: "Music",
            },
            {
              name: "Anime",
              route: "Anime",
            },
          ],
        },
      ]
    : []),
  {
    name: "Réseaux sociaux",
    route: "Socials",
  },
]
</script>
