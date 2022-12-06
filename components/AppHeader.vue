<script setup>
  import { NLayoutHeader } from 'naive-ui'
</script>

<template>
  <n-layout-header class="app-header" bordered position="absolute">
    <AppHeaderTitle />
    <AppHeaderMenu />
  </n-layout-header>
</template>

<style lang="sass" scoped>
.app-header
  height: 88px
  padding: 24px
  display: flex
</style>