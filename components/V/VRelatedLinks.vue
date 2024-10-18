<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  color: string
  links?: { location: string, title: string }[]
}>()
</script>

<template>
  <ul class="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box">
    <li v-for="link in links">
      <NuxtLink :to="link.location">
        <IconTools v-if="icon === 'tools'" :class="color" />{{ link.title }}
      </NuxtLink>
    </li>
  </ul>
</template>