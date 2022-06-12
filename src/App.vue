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

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
