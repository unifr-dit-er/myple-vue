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
  <div>
    <VError v-if="error" :code="error.statusCode" :message="error.statusMessage" />
    <div v-else-if="activities" class="min-h-screen bg-base-300 py-32">
      <div class="max-w-screen-xl mx-auto px-2">
        <div class="flex mb-4 items-center">
          <IconBookLarge class="text-rose-500" />
          <h2 class="text-4xl font-bold leading-normal ml-3">{{ $t('activities') }}</h2>
        </div>
        <ul class="menu menu-lg bg-base-200 rounded-box">
          <li v-for="activity in activities">
            <NuxtLink :to="localePath(`/activities/${ activity.id}`)">
              <IconNotebook />
              {{ activity.title }}
              <span class="badge badge-sm">{{ activity.steps?.length }} {{ $t('activity_steps')}}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>