<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, required: false }
})
</script>

<template>
  <h1 class="text-4xl font-bold mb-5">{{ props.title }}</h1>
  <p class="prose max-w-none" v-html="props.content"></p>
</template>