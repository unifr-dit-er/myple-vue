<script setup lang="ts">
const localePath = useLocalePath()
const store = useMiscStore()
</script>

<template>
  <li v-for="activity in store.activities" :key="activity.id">
    <NuxtLink :to="localePath(`/activities/${activity.id}`)">
      {{ activity.title }}
    </NuxtLink>
  </li>
</template>