<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>

<template>
  <div tabindex="0" class="collapse collapse-arrow border-base-300 border bg-base-100">
    <div class="collapse-title font-medium">
      {{ title }}
    </div>
    <div class="collapse-content">
      <div class="prose max-w-none" v-html="content"></div>
    </div>
  </div>
</template>