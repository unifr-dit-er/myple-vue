<script setup lang="ts">
defineProps<{
  annex: Annex
}>()

const contentDiv = ref<HTMLElement | null>(null)

// we all hate iframes
onMounted(async () => {
  const iframe = contentDiv.value?.querySelector('iframe')
  if (iframe) {
    iframe.style.width = '100%'
    iframe.style.height = '500px'
  }
})
</script>

<template>
  <div class="collapse collapse-plus border border-base-300 bg-base-200">
    <input type="checkbox" />
    <div class="collapse-title font-medium">
      {{ annex.title }}
    </div>
    <div class="collapse-content">
      <div ref="contentDiv" class="prose max-w-none" v-html="annex.content"></div>
    </div>
  </div>
</template>