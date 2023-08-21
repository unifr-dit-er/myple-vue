<script setup lang="ts">
const localePath = useLocalePath()
const store = useMiscStore()

function closeMenu() {
  const menu = document.getElementById('activities-menu');
  if (menu) {
    menu.removeAttribute('open')
  }
}
</script>

<template>
  <li v-for="activity in store.activities" :key="activity.id">
    <NuxtLink :to="localePath(`/activities/${activity.id}`)" @click="closeMenu()">
      {{ activity.title }}
    </NuxtLink>
  </li>
</template>