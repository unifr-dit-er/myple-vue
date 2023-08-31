<script setup lang="ts">
defineProps<{
  annexes: Annex[]
}>()
</script>

<template>
  <div v-for="annex in annexes" class="collapse collapse-plus border border-base-300 bg-base-200">
    <input type="checkbox" />
    <div class="collapse-title font-medium">
      {{ annex.title }}
    </div>
    <div class="collapse-content">
      <div class="prose max-w-none" v-html="annex.content"></div>
    </div>
  </div>
</template>