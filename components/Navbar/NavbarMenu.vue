<script setup lang="ts">
import { ToolsIcon, SchoolIcon, NotebookIcon, ChevronDownIcon } from 'vue-tabler-icons'

const lang = 'fr-FR'
const { data } = await useAsyncGql('GetActivities', { lang: lang })
</script>

<template>
  <ul class="menu menu-horizontal px-1">
    <li tabindex="0">
      <a>
        <notebook-icon size="30" stroke-width="1.5" /> Activités
        <chevron-down-icon size="17" />
      </a>
      <ul class="p-2 bg-base-100">
        <li v-for ="activity in data?.activities">
          <NuxtLink :to="`/activities/${activity.id}`">
            {{ activity.translations?.[0]?.title }}
          </NuxtLink>
        </li>
      </ul>
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