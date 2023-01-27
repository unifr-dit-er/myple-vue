<script setup lang="ts">
import ACTIVITY_QUERY from '@/graphql/activity.query.gql'

const { id } = useRoute().params
const lang = 'fr-FR'
const { result, loading, error } = useQuery(ACTIVITY_QUERY, { id, lang })
</script>

<template>
  <div class="min-h-screen bg-base-300 px-24 py-32">
    <div class="bg-base-200 fixed top-16 left-0 w-80 h-full px-4 py-8 shadow">
      <!-- <ActivityToc activeId="1" :steps="steps" /> -->
      TOC
    </div>
    <div class="ml-72 max-w-4xl">
      <LoadingIndicator v-if="loading"></LoadingIndicator>
      <ErrorBox v-else-if="error">{{ error }}</ErrorBox>
      <div v-else-if="result">
        <article v-if="result.activity">
          <ActivityHeader
            :title="result.activity.translations[0].title"
            :content="result.activity.translations[0].content"
          />
          <ActivityStep v-for="(step, index) in result.activity.steps"
            :index="index"
            :key="step.id"
            :id="step.id"
            :title="step.translations[0].title"
            :content="step.translations[0].content"
          />
        </article>
        <div v-else>
          <ActivityHeader title="Activity Not Found" />
        </div>
      </div>
    </div>
  </div>
</template>