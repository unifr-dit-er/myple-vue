<script setup lang="ts">
defineProps<{
  title: string,
  steps: Step[],
  isIntroActive: boolean
}>()
</script>

<template>
  <ul class="menu">
    <Transition name="fade" mode="out-in">
      <li v-if="isIntroActive" class="menu-title">{{ $t('summary') }}</li>
      <li v-else class="menu-title">{{ title }}</li>
    </Transition>
    <li :class="{ 'border-primary': isIntroActive }" class="border-l-2">
      <NuxtLink :href="{ hash: ``, replace: true }" class="inline">
        Introduction
      </NuxtLink>
    </li>
    <li v-for="step in steps" :key="step.id" :class="{ 'border-primary': step.isActive }" class="border-l-2">
      <NuxtLink :href="{ hash: `#${step.id}`, replace: true }" class="inline">
        {{ step.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>