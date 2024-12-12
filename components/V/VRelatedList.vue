<script setup lang="ts">
defineProps<{
  title: string
  links?: { location: string, title: string, type: string }[]
}>()
</script>

<template>
  <div class="collapse collapse-arrow border-base-300 border bg-base-100">
    <input type="checkbox" />
    <div class="collapse-title font-medium">
      <IconResources class="inline mr-1" />
      {{ title }}
    </div>
    <div class="collapse-content">
      <ul class="menu menu-compact p-2">
        <li v-for="link in links">
          <a :href="link.location">
            <IconPdf v-if="link.type == 'pdf'" />
            <IconWww v-if="link.type == 'web'" />
            <IconVideo v-if="link.type == 'video'" />
            <IconBook v-if="link.type == 'book'" />
            {{ link.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>