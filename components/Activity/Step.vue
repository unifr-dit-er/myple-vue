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
    <StepFamilies v-if="step.families.length" :families="step.families" />
    <div v-html="step.content" class="prose max-w-none mb-8"></div>
    <StepAnnexes v-if="step.annexes.length" :annexes="step.annexes" />
    <StepResources v-if="step.resources.length" :resources="step.resources" />
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