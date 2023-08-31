<script setup lang="ts">
const store = useActivityStore()
const isIntroActive = ref(true)
const { id: idParams } = useRoute().params
const id = typeof idParams === 'string' ? Number(idParams) : Number(idParams[0])
store.fetch(id)

const intro = ref(null)
useIntersectionObserver(
intro,
([{ isIntersecting }]) => {
  isIntroActive.value = isIntersecting
},
)
</script>

<template>
  <div v-if="store.activity" class="min-h-screen bg-base-300 py-32">
    <div>
      <div>
        <div class="bg-base-200 hidden lg:block fixed top-32 left-4 w-80 p-4 shadow">
          <ActivityToc :title="store.activity.title" :steps="store.activity.steps || []" :is-intro-active="isIntroActive" />
        </div>
      </div>
      <div class="max-w-5xl lg:ml-96 p-4">
        <article class="">
          <h1 class="inline-block text-3xl font-bold pt-3"><IconNotebookLarge class="inline w-8" /> {{ store.activity.title }}</h1>
          <div class="divider"></div>
          <div ref="intro" class="prose max-w-none max-w-4xl" v-html="store.activity.content"></div>
          <ActivityStep v-for="step in store.activity.steps" :key="step.id" :step="step" />
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(iframe) {
  @apply max-w-full;
  @apply max-h-96;
}
</style>