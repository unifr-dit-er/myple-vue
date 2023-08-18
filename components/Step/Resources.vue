<script setup lang="ts">
defineProps<{
  resources: Resource[]
}>()
</script>

<template>
  <div class="collapse collapse-plus border border-base-300 bg-base-200">
    <input type="checkbox" />
    <div class="collapse-title font-medium">
      <IconResources class="inline mr-1" /> {{ $t('related_resources') }}
    </div>
    <div class="collapse-content">
      <ul class="menu menu-compact p-2">
        <li v-for="resource in resources">
          <a :href="resource.url">
            <IconPdf v-if="resource.type == 'pdf'" />
            <IconWww v-if="resource.type == 'web'" />
            <IconVideo v-if="resource.type == 'video'" />
            <IconBook v-if="resource.type == 'book'" />
            <template v-if="resource.tutorial">[TUTO]</template>
            {{ resource.title }} ({{ resource.author }}, {{ resource.date }})
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>