<script setup>
  import { NLayout } from 'naive-ui'
</script>

<template>
  <n-layout position="absolute">
    <AppHeader />
    <n-layout position="absolute" style="top: 88px">
      <NuxtPage />
    </n-layout>
  </n-layout>
</template>
