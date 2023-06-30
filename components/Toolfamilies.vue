<script setup lang="ts">
defineProps<{
  toolFamilies: ToolFamily[]
}>()
const store = useFamiliesStore()
</script>

<template>
  <div class="alert my-4">
    <div class="flex">
      <IconTools class="shrink-0 mr-2" />
      <div>
        Familles d'outils concernées :
        <NuxtLink v-for="family in toolFamilies" :to="`/tools/`" @click="store.setActive(family.id)" class="link link-primary mr-2">
          {{ family.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>