<script setup lang="ts">
defineProps<{
  toolFamilies: ToolFamily[]
}>()
</script>

<template>
  <div class="alert my-4">
    <div class="flex">
      <IconTools class="shrink-0 mr-2" />
      <div>
        Familles d'outils concernées :
        <a v-for="family in toolFamilies" class="link link-primary mr-2">
          {{ family.title }}
        </a>
      </div>
    </div>
  </div>
</template>