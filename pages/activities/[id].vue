<script setup lang="ts">
import type { Activity, ActivityStep } from "@/types/activity"

const { id } = useRoute().params
const apiProvider = useRuntimeConfig().public.apiProvider
const { locale } = useI18n()

const { data: activity, error, pending } = await useFetch<Activity>(`/api/${apiProvider}/activities/${id}`, {
  query: { lang: `${locale.value}-${locale.value.toUpperCase()}` }
})

const introRef = ref(null)
const introVisibility = useElementVisibility(introRef)

const tocItems = computed(() => {
  return activity.value?.steps?.map((step: ActivityStep, index: number) => { 
    return { 
      id: step.id, 
      title: step.title || 'Undefined', 
      isActive: false
    } 
  }) || []
})
</script>

<template>
  <div v-if="activity" class="min-h-screen bg-base-300 py-32">
    <div>
      <div class="bg-base-200 hidden lg:block fixed top-32 left-4 w-80 p-4 shadow">
        <VToc :title="activity.title" :items="tocItems" :is-intro-active="introVisibility" />
      </div>
    </div>
    <div class="max-w-5xl lg:ml-96 p-4">
      <article class="">
        <h1 class="inline-block text-3xl font-bold py-6 mb-5 w-full border-b-2 border-neutral-400">
          <IconNotebookLarge class="inline w-8 text-rose-500" /> {{ activity.title }}
        </h1>
        <div class="bg-base-200 p-6 m-4">
          <section id="intro" ref="introRef">
            <div v-html="activity.description" class="prose max-w-none"></div>
          </section>
        </div>
        <div v-for="step in activity.steps" :key="step.id" class="bg-base-200 p-6 m-4">
          <ActivityStep :step="step" />
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
:deep(iframe) {
  @apply max-w-full;
  @apply max-h-96;
}
</style>