<template>
  <div
    class="flex md:grid md:grid-cols-3 gap-x-4 gap-y-12 pt-6 flex-col md:flex-row"
  >
    <div
      v-for="(item, i) of items"
      class="mx-auto"
      :class="i < 3 ? meta[i].class : ''"
    >
      <span class="relative mx-auto">
        <span
          v-if="i < 3"
          class="absolute -top-2 left-26 rounded-full w-12 h-12 flex justify-center items-center font-bold text-2xl text-black/40"
          :style="`background-color: #${meta[i].color};`"
        >
          {{ meta[i].position }}
        </span>
      </span>
      <img
        :src="`/images/${item.image}`"
        :alt="item.name"
        class="rounded-t w-64 object-cover"
        :class="square ? 'h-64' : 'h-96'"
      />
      <div class="bg-white rounded-b w-64" :class="i < 3 ? meta[i].height : ''">
        <h3 class="text-lg text-center p-1">
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
