<template>
  <div class="min-h-screen h-full flex flex-col">
    <Menu />
    <div class="grow flex justify-center items-center my-32">
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
import Menu from "@/components/Menu.vue"
import Background from "@/components/Background.vue"
</script>
