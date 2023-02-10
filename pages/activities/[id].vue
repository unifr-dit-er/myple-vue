<script setup>
const { id } = useRoute().params
const lang = 'fr-FR'

const { data, pending, error } = await useAsyncGql('GetActivity', { id: id, lang: lang })
</script>

<template>
  <div class="min-h-screen bg-base-300 px-24 py-32">
    <div class="bg-base-200 fixed top-16 left-0 w-80 h-full px-4 py-8 shadow">
      <Toc title="Sommaire" :links="data.activity?.steps.map(step => ({
        href: step.id,
        label: dTranslate(step, 'title')
      }))" />
    </div>
    <div class="ml-72 max-w-4xl">
      <LoadingIndicator v-if="pending" />
      <ErrorBox v-else-if="error">{{ error }}</ErrorBox>
      <article v-else-if="data?.activity">
        <h1 class="text-4xl font-bold">{{ dTranslate(data.activity, 'title') }}</h1>
        <Related />
        <div class="prose max-w-none" v-html="dTranslate(data.activity, 'content')"></div>
        <section v-for="step in data.activity.steps">
          <div class="divider"></div>
          <h2 :id="step.id" class="text-2xl font-bold scroll-mt-24">{{ dTranslate(step, 'title') }}</h2>
          <Related small />
          <div class="prose max-w-none" v-html="dTranslate(step, 'content')"></div>
          <div v-if="step.annexes" class="mt-8">
            <Annex v-for="annex in step.annexes" :title="dTranslate(annex, 'title')" :content="dTranslate(annex, 'content')" />
          </div>
        </section>
      </article>
    </div>
  </div>
</template>