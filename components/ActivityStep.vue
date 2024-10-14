<script setup lang="ts">
import type { ActivityStep } from "@/types/activity"
import type { ToolFamily } from "@/types/tool"
import type { Resource } from "~/types/resource"

const localePath = useLocalePath()

const props = defineProps<{
  step: ActivityStep
}>()

const relatedLinks = computed(() => {
  return props.step.toolFamilies?.map((family: ToolFamily) => {
    return { 
      location: localePath(`/tools/${ family.slug }`), 
      title: family.title 
    }
  }) || []
})

const relatedList = computed(() => {
  return props.step.resources?.map((resource: Resource) => {
    return { 
      location: resource.url, 
      title: `${ resource.tutorial ? ' [TUTO]' : '' } ${ resource.title } (${ resource.author }, ${ resource.date })`,
      type: resource.type
    }
  }) || []
})
</script>

<template>
  <section :id="String(step.id)">
    <h2 class="text-2xl font-bold mb-6">
      {{ step.title }}
    </h2>
    <VRelatedLinks v-if="relatedLinks.length" :title="$t('related_families')" icon="tools" color="text-indigo-500" :links="relatedLinks" />
    <div v-html="step.content" class="prose max-w-none"></div>
    <div class="mt-12 mb-6">
      <VRelatedContent v-for="annex in step.annexes" :title="annex.title" :content="annex.content" />
      <VRelatedList v-if="relatedList.length" :title="$t('related_resources')" :links="relatedList" />
    </div>
  </section>
</template>

<style scoped>
h2:before {
  content:"";
  display:block;
  height:100px;
  margin-top:-100px;
  visibility:hidden;
}
</style>