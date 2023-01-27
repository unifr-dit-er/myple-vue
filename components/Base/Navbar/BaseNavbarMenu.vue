<script setup lang="ts">
import { ToolsIcon, SchoolIcon } from 'vue-tabler-icons'
</script>

<template>
  <ul class="menu menu-horizontal px-1">
    <li tabindex="0">
      <BaseNavbarMenuActivities />
    </li>
    <li>
      <NuxtLink to="/tools">
        <tools-icon size="30" stroke-width="1.5" /> Outils
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/training">
        <school-icon size="30" stroke-width="1.5" /> Formations
      </NuxtLink>
    </li>
  </ul>
</template>