<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  content: { type: String, default: '' }
})
</script>

<template>
  <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-200 rounded-box">
    <div class="collapse-title font-medium">
      {{ title }}
    </div>
    <div class="collapse-content">
      <div class="prose max-w-none" v-html="content"></div>
    </div>
  </div>
</template>