<template>
  <div class="flex flex-col gap-4 pt-6 md:grid md:grid-cols-12">
    <div
      v-for="(item, i) of items"
      class="mx-auto"
      :class="[
        i < 3 ? meta[i].class : '',
        i >= 3 ? 'col-span-3' : 'col-span-4',
      ]"
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
        :class="i >= 3 ? 'md:w-48' : ''"
      />
      <div
        class="w-64 bg-white rounded-b"
        :class="[i < 3 ? meta[i].height : '', i >= 3 ? 'md:w-48' : '']"
      >
        <h3 class="p-1 text-lg text-center" :class="{ 'md:text-sm': i >= 3 }">
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
