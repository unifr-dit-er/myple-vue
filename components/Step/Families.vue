<script setup lang="ts">
defineProps<{
  families: Family[]
}>()
const store = useFamiliesStore()
const localePath = useLocalePath()
</script>

<template>
  <div class="alert my-4">
    <div class="flex">
      <IconTools class="shrink-0 mr-2" />
      <div>
        {{ $t('related_families') }} :
        <NuxtLink v-for="family in families" :to="localePath(`/tools/`)" @click="store.setActive(family.id)" class="link link-primary mr-2">
          {{ family.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>