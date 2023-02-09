<script setup lang="ts">
const props = defineProps({
  step: { type: Object, required: true }
})
const title = dTranslate(props.step, 'title')
const description = dTranslate(props.step, 'content')
</script>

<template>
  <div class="divider"></div>
  <div :id="step.id">
    <h2 class="text-2xl font-bold mb-3">{{ title }}</h2>
    <div class="prose max-w-none" v-html="description"></div>
  </div>
</template>