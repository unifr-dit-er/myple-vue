<script setup lang="ts">
import type { Activity, ActivityStep } from "@/types/activity"
import type { ToolFamily } from "@/types/tool"

const { id } = useRoute().params
const apiProvider = useRuntimeConfig().public.apiProvider
const { locale } = useI18n()
const lang = `${locale.value}-${locale.value.toUpperCase()}`
const localePath = useLocalePath()

const { data: activity, error, pending } = await useFetch<Activity>(`/api/${apiProvider}/activities/${id}`, {
  query: { lang }
})

const toc = computed(() => {
  return activity.value?.steps?.map((step: ActivityStep) => { 
    return { 
      id: String(step.id), 
      title: step.title || 'Undefined'
    } 
  }) || []
})

function mapToolFamilies(toolFamilies: ToolFamily[]) {
  return toolFamilies.map((family: ToolFamily) => ({
    location: localePath(`/tools/${family.slug}`),
    title: family.title
  }))
}

function mapResources(resources: Resource[]) {
  return resources.map((resource: Resource) => ({
    location: resource.url,
    title: `${resource.tutorial ? ' [TUTO]' : ''} ${resource.title} (${resource.author}, ${resource.date})`,
    type: resource.type
  }))
}
</script>

<template>
  <div class="flex justify-center min-h-screen bg-base-300 py-24">
    <VError v-if="error" :code="error.statusCode" :message="error.statusMessage" />
    <div v-else-if="activity" class="max-w-[1600px]">
      <VArticle :title="activity.title" :introduction="activity.description" :toc="toc" v-slot="{ sectionsVisibility }">
        <VArticleSection 
          v-for="step in activity.steps" 
          :key="step.id" 
          :id="String(step.id)" 
          :title="step.title" 
          :content="step.content" 
          v-model="sectionsVisibility[step.id]" 
        >
          <template #header>
            <VRelatedLinks v-if="step.toolFamilies?.length" :title="$t('related_families')" icon="tools" color="text-indigo-500" :links="mapToolFamilies(step.toolFamilies)" />
          </template>
          <template #footer>
            <VRelatedContent v-for="annex in step.annexes" :title="annex.title" :content="annex.content" />
            <VRelatedList v-if="step.resources?.length" :title="$t('related_resources')" :links="mapResources(step.resources)" />
          </template>
        </VArticleSection>
      </VArticle>
    </div>
  </div>
</template>