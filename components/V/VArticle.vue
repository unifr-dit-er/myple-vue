<script setup lang="ts">
defineProps<{
  title: string,
  introduction?: string,
  toc?: { id: string, title: string }[],
}>()

const isIntroActive = ref(true)
const sectionsVisibility = reactive<{ [key: string]: boolean }>({})
</script>

<template>
  <article class="flex m-1">
    <div v-if="toc" id="article-toc" class="w-80 mr-6 relative hidden lg:block">
      <div class="bg-base-200 sticky top-32 left-0 shadow w-80 p-4">
        <VToc :title="title" :is-intro-active="isIntroActive" :items="toc.map((item: any) => ({ id: item.id, title: item.title, isActive: sectionsVisibility[item.id] }))" />
      </div>
    </div>
    <div id="article-content">
      <h1 class="text-3xl font-bold">
        <IconNotebookLarge class="inline w-8 text-rose-500" /> {{ title }}
      </h1>
      <div class="divider"></div>
      <VArticleSection id="intro" :content="introduction" v-model="isIntroActive" />
      <slot :sectionsVisibility="sectionsVisibility"></slot>
    </div>
  </article>
</template>