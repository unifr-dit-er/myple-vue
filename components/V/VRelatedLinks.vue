<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  color: string
  links?: { location: string, title: string }[]
}>()
</script>

<template>
  <div class="alert my-4 bg-base-100">
    <div class="flex">
      <IconTools v-if="icon === 'tools'" class="shrink-0 mr-2" :class="color" />
      <div>
        {{ title }} :
        <NuxtLink v-for="link in links" :to="link.location" class="link mr-2" :class="color">
          {{ link.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>