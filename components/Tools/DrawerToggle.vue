<script setup lang="ts">
const store = useToolStore()
</script>

<template>
  <input id="tools-drawer" type="checkbox" class="drawer-toggle" v-model="store.drawer" />
</template>
