<script setup lang="ts">
import { NotebookIcon, ChevronDownIcon } from 'vue-tabler-icons'
import ACTIVITIES_QUERY from '@/graphql/activities.query.gql'

const lang = 'fr-FR'
const { result } = await useQuery(ACTIVITIES_QUERY, { lang })
</script>

<template v-if="result">
  <template v-if="result.activities">
    <a>
      <notebook-icon size="30" stroke-width="1.5" /> Activités
      <chevron-down-icon size="17" />
    </a>
    <ul class="p-2 bg-base-100">
      <li v-for="activity in result.activities">
        <NuxtLink :to="`/activities/${activity.id}`">
          {{  activity.translations[0].title }}
        </NuxtLink>
      </li>
    </ul>
  </template>
</template>