<script setup lang="ts">
defineProps<{
  title: string,
  isIntroActive: boolean,
  items: { id: string, title: string, isActive: boolean }[]
}>()
</script>

<template>
  <ul class="menu">
    <li class="menu-title">
      {{ isIntroActive ? $t('summary') : title }}
    </li>
    <li :class="{ 'border-rose-500': isIntroActive }" class="border-l-2">
      <NuxtLink :href="{ hash: ``, replace: true }" class="inline">
        {{ $t('intro') }}
      </NuxtLink>
    </li>
    <li v-for="(item, index) in items" :key="index" :class="{ 'border-rose-500': item.isActive }" class="border-l-2">
      <NuxtLink :href="{ hash: `#${item.id}`, replace: true }" class="inline">
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>