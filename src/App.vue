<template>
  <div class="flex flex-col h-full min-h-screen">
    <Menu />
    <div class="flex items-center justify-center my-32 grow">
      <router-view v-slot="{ Component }">
        <transition mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <Background />
  </div>
</template>

<script setup>
import Background from "@/components/Background.vue"
import Menu from "@/components/Menu.vue"
</script>
