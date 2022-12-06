<script setup>
  import { NLayout } from 'naive-ui'
</script>

<template>
  <n-layout position="absolute">
    <AppHeader />
    <n-layout position="absolute" style="top: 88px">
      <slot />
    </n-layout>
  </n-layout>
</template>
