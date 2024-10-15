<script setup lang="ts">
import type { Activity } from "@/types/activity"

const apiProvider = useRuntimeConfig().public.apiProvider
const localePath = useLocalePath()
const { locale } = useI18n()

const { data: activities, error } = await useFetch<Activity[]>(`/api/${apiProvider}/activities`, {
  query: { lang: `${locale.value}-${locale.value.toUpperCase()}` }
})
</script>

<template>
  <div class="flex justify-center min-h-screen bg-base-300 py-24">
    <VError v-if="error" :code="error.statusCode" :message="error.statusMessage" />
    <div v-else-if="activities" class="max-w-screen-2xl px-2">
      <div class="flex mb-4 items-center">
        <IconBookLarge class="text-rose-500" />
        <h2 class="text-4xl font-bold leading-normal ml-3">{{ $t('activities') }}</h2>
      </div>
      <ul class="menu menu-lg bg-base-200 rounded-box">
        <li v-for="activity in activities">
          <NuxtLink :to="localePath(`/activities/${ activity.id}`)">
            <IconNotebook />
            {{ activity.title }}
            <span class="badge badge-sm ml-4 lg:ml-56">{{ activity.steps?.length }} {{ $t('activity_steps')}}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>