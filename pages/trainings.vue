<script setup lang="ts">
import type { Training } from "@/types/training"

const apiProvider = useRuntimeConfig().public.apiProvider
const { locale } = useI18n()

const { data: trainings, error } = await useFetch<Training[]>(`/api/${apiProvider}/trainings`, {
  query: { lang: `${locale.value}-${locale.value.toUpperCase()}` }
})
</script>

<template>
  <div class="flex justify-center min-h-screen bg-base-300 py-24">
    <VError v-if="error" :code="error.statusCode" :message="error.statusMessage" />
    <div v-else-if="trainings">
      <div class="max-w-screen-2xl mx-auto px-2">
        <div class="flex mb-4 items-center">
          <IconSchoolLarge class="text-teal-500" />
          <h2 class="text-4xl font-bold leading-normal ml-3">{{ $t('training') }}</h2>
        </div>

        <div class="grid lg:grid-cols-3 gap-4">
          <div v-for="training in trainings" :key="training.id" class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">{{ training.title }}</h2>
              <div class="card-actions items-center my-2">
                <div class="badge badge-lg bg-teal-500 text-white font-semibold">{{ training.institution }}</div>
                <div class="badge badge-ghost">{{ training.modality }}</div>
                <div class="badge badge-ghost">{{ training.duration }}</div>
                <div class="badge badge-ghost">{{ training.semester }}</div>
                <div class="badge badge-ghost">{{ training.languages.join(', ') }}</div>
              </div>
              <div class="my-2" v-html="training.description"></div>
              <p><strong>{{ $t('availability') }}</strong> : {{ training.availability.join(', ') }}</p>
              <div class="card-actions justify-end items-center mt-2">
                <a :href="training.url" class="btn btn-sm"><IconExternalLink /> {{ $t('training_access') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
