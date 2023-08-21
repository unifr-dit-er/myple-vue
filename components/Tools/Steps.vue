<script setup lang="ts">
defineProps<{
  tool: Tool
}>()
const localePath = useLocalePath()
</script>

<template>
  <ul v-if="tool.steps?.length" class="menu bg-base-100 rounded-box mx-4">
    <li class="menu-title">{{ $t('related_activities') }}</li>
    <li v-for="step in tool.steps" :key="step.id">
      <NuxtLink :to="localePath({ name: 'activities-id', params: { id: step.activity.toString() }, hash: `#${step.id}` })" class="block flex">
        <div class="w-6"><IconNotebook /></div>
        {{ step.title }}
      </NuxtLink>
    </li>
  </ul>
</template>