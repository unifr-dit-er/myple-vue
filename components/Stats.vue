<script setup lang="ts">
interface Stats {
  activities: number
  tools: number
  trainings: number
}

const localePath = useLocalePath()
const apiProvider = useRuntimeConfig().public.apiProvider

const { data: stats, error } = await useFetch<Stats>(`/api/${apiProvider}/stats`, {})
</script>

<template>
  <div v-if="stats" class="stats stats-vertical text-center w-full lg:stats-horizontal lg:text-left lg:w-auto shadow ">
    <div class="stat">
      <div class="stat-title">{{ $t('activities') }}</div>
      <div class="stat-value text-rose-500 underline mb-2">
        <NuxtLink :to="localePath('/activities')">{{ stats.activities }}</NuxtLink>
      </div>
      <div class="stat-desc">{{ $t('activities_info') }}</div>
    </div>

    <div class="stat">
      <div class="stat-title">{{ $t('tools') }}</div>
      <div class="stat-value text-indigo-500 underline mb-2">
        <NuxtLink :to="localePath('/tools')">{{ stats.tools }}</NuxtLink>
      </div>
      <div class="stat-desc">{{ $t('tools_info') }}</div>
    </div>

    <div class="stat">
      <div class="stat-title">{{ $t('training') }}</div>
      <div class="stat-value text-teal-500 underline mb-2">
        <NuxtLink :to="localePath('/trainings')">{{ stats.trainings }}</NuxtLink>
      </div>
      <div class="stat-desc">{{ $t('training_info') }}</div>
    </div>

  </div>
</template>