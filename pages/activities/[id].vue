<script setup lang="ts">
const { id } = useRoute().params
const store = useActivityStore()
const isIntroActive = ref(true)

if (typeof id === 'string') {
  store.fetch(id)
}

const intro = ref(null)
useIntersectionObserver(
  intro,
  ([{ isIntersecting }]) => {
    isIntroActive.value = isIntersecting
  },
)
</script>

<template>
  <div class="min-h-screen bg-base-300 px-24 py-32">
    <div class="bg-base-200 hidden lg:block fixed top-16 left-0 w-80 h-full px-4 py-8 shadow">
      <Toc :title="store.title" :steps="store.steps" :is-intro-active="isIntroActive" />
    </div>
    <div class="lg:ml-72">
      <article class="max-w-5xl">
        <h1 class="inline-block text-3xl font-bold pt-3"><IconNotebookLarge class="inline w-8" /> {{ store.title }}</h1>
        <div class="divider"></div>
        <div ref="intro" class="prose max-w-none max-w-4xl" v-html="store.content"></div>
        <Step v-for="step in store.steps" :key="step.id" :step="step" />
      </article>
    </div>
  </div>
</template>