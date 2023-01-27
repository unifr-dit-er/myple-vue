<script setup lang="ts">
const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true }
})
</script>

<template>
  <div class="divider"></div>
  <div :id="id">
    <h2 class="text-2xl font-bold mb-3">{{ title }}</h2>
    <div class="prose max-w-none" v-html="content"></div>
  </div>
</template>