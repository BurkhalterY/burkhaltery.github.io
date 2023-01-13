<template>
  <div class="flex flex-col gap-4 pt-6 md:grid md:grid-cols-3 md:flex-row">
    <div
      v-for="(item, i) of items"
      class="mx-auto"
      :class="i < 3 ? meta[i].class : ''"
    >
      <span class="relative mx-auto">
        <span
          v-if="i < 3"
          class="absolute flex items-center justify-center w-12 h-12 text-2xl font-bold rounded-full -top-2 left-26 text-black/40"
          :style="`background-color: #${meta[i].color};`"
        >
          {{ meta[i].position }}
        </span>
      </span>
      <img
        :src="`/images/${item.image}`"
        :alt="item.name"
        class="object-cover w-64 rounded-t"
        :class="square ? 'h-64' : 'h-96'"
      />
      <div class="w-64 bg-white rounded-b" :class="i < 3 ? meta[i].height : ''">
        <h3 class="p-1 text-lg text-center">
          {{ item.name }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
  square: Boolean,
})

const meta = [
  {
    position: 1,
    class: "md:mt-0 md:-order-1",
    height: "md:h-40",
    color: "c9b037",
  },
  {
    position: 2,
    class: "md:mt-16 md:-order-2",
    height: "md:h-24",
    color: "d7d7d7",
  },
  {
    position: 3,
    class: "md:mt-32 md:-order-1",
    height: "md:h-8",
    color: "ad8a56",
  },
]
</script>
