<script setup lang="ts">
defineProps<{
  tool: Tool
}>()
</script>

<template>
  <ul class="menu bg-base-100 rounded-box mx-4 mb-4">
    <li v-if="tool.url">
      <a :href="tool.url"><IconExternalLink /> {{ $t('official_website') }}</a>
    </li>
    <li v-if="tool.urlAlternativeto">
      <a :href="tool.urlAlternativeto"><IconRobot /> AlternativeTo</a>
    </li>
    <li v-if="tool.urlUnifr">
      <a :href="tool.urlUnifr"><IconHomeShield /> UniFr</a>
    </li>
    <li v-if="tool.urlUsi">
      <a :href="tool.urlUsi"><IconHomeShield /> USI</a>
    </li>
  </ul>
</template>