<script setup lang="ts">
const store = useTrainingsStore()
</script>

<template>
  <div class="min-h-screen bg-base-300 py-32">
    <div class="max-w-5xl mx-auto px-2">
      <div class="flex mb-4 items-center">
        <IconSchoolLarge />
        <h2 class="text-4xl font-bold leading-normal ml-3">{{ $t('training') }}</h2>
      </div>

      <div v-for="training in store.trainings" :key="training.id" class="collapse collapse-arrow bg-base-200 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title">
          <div class="text-xl font-medium">{{ training.title }}</div>
          <div class="badge badge-outline mr-2">{{ training.semester }}</div>
          <div class="badge badge-outline">{{ training.format }}</div>
        </div>
        <div class="collapse-content">
          <div v-html="training.description" class="mb-4"></div>
          <div class="text-right">
            <a :href="training.url" class="btn btn-accent btn-sm"><IconExternalLink /> Accéder à la formation</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
