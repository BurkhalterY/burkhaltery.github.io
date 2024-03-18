<script setup>
const props = defineProps({
  item: Object,
})
</script>

<template>
  <div class="card bg-slate-50">
    <div class="flex gap-8">
      <div class="card-body">
        <img
          :src="`/images/companies/${item.image}`"
          :alt="item.school"
          :title="item.school"
          class="w-48 h-8 object-contain object-right float-right !m-0 !mb-2"
        />
        <h4 class="card-title">{{ item.certificate }}</h4>
        <span class="card-text">
          {{ item.school }}<br />{{ item.start }}
          <component v-if="item.end">- {{ item.end }}</component>
        </span>
        <ul v-if="item.links" class="px-3 mt-3">
          <li v-for="link in item.links" :key="link.name">
            <a :href="link.url" target="_blank">
              {{ link.name }}
              <ArrowTopRightOnSquareIcon class="inline w-4" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
