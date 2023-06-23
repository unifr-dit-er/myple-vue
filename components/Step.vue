<script setup lang="ts">
const props = defineProps<{
  step: Step
}>()

const target = ref(null)
useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    props.step.isActive = isIntersecting
  },
)
</script>

<template>
  <div class="divider mb-12"></div>
  <section :id="String(step.id)" ref="target">
    <h2 class="text-2xl font-bold mb-2">{{ step.title }}</h2>
    <Toolfamilies v-if="step.toolFamilies.length" :tool-families="step.toolFamilies" />
    <div v-html="step.content" class="prose max-w-none mb-8"></div>
    <Annex v-for="annex in step.annexes" :annex="annex" :key="annex.id" />
    <Resources v-if="step.resources.length" :resources="step.resources" />
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