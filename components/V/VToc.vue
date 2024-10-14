<script setup lang="ts">
interface Item {
  id: number;
  title: string;
  isActive: boolean;
}

defineProps<{
  title: string,
  items: Item[],
  isIntroActive: boolean
}>()
</script>

<template>
  <ul class="menu">
    <Transition name="fade" mode="out-in">
      <li v-if="isIntroActive" class="menu-title">{{ $t('summary') }}</li>
      <li v-else class="menu-title">{{ title }}</li>
    </Transition>
    <li :class="{ 'border-rose-500': isIntroActive }" class="border-l-2">
      <NuxtLink :href="{ hash: ``, replace: true }" class="inline">
        {{ $t('intro') }}
      </NuxtLink>
    </li>
    <li v-for="item in items" :key="item.id" :class="{ 'border-rose-500': item.isActive }" class="border-l-2">
      <NuxtLink :href="{ hash: `#${item.id}`, replace: true }" class="inline">
        {{ item.title }}
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