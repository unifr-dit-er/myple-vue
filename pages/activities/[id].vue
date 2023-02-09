<script setup>
const { id } = useRoute().params
const lang = 'fr-FR'

const { data, pending, error } = await useAsyncGql('GetActivity', { id: id, lang: lang })
</script>

<template>
  <div class="min-h-screen bg-base-300 px-24 py-32">
    <div class="bg-base-200 fixed top-16 left-0 w-80 h-full px-4 py-8 shadow">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Sommaire</h2>
          <ul class="menu">
            <li v-for="step in data.activity?.steps" class="bordered">
              <a :href="`#${step.id}`">{{ dTranslate(step, 'title') }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ml-72 max-w-4xl">
      <LoadingIndicator v-if="pending" />
      <ErrorBox v-else-if="error">{{ error }}</ErrorBox>
      <article v-else-if="data?.activity">
        <h1 class="text-4xl font-bold">{{ dTranslate(data.activity, 'title') }}</h1>
        <Related />
        <p class="prose max-w-none" v-html="dTranslate(data.activity, 'content')"></p>
        <template v-for="step in data.activity.steps">
          <div class="divider"></div>
          <div :id="step.id">
            <h2 class="text-2xl font-bold">{{ dTranslate(step, 'title') }}</h2>
            <Related small />
            <div class="prose max-w-none" v-html="dTranslate(step, 'content')"></div>
          </div>
        </template>
      </article>
    </div>
  </div>
</template>