<script setup lang="ts">
const store = useFamiliesStore()
store.fetch()
</script>

<template>
  <div class="text-lg">
    <button
      @click="store.reset()"
      :class="{ 'btn-neutral': store.active == 0 }"
      class="btn btn-sm mr-2 mb-2">
      Tous
    </button>
    <button
      v-for="family in store.families"
      @click="store.setActive(family.id)"
      :class="{ 'btn-neutral': store.active == family.id }"
      class="btn btn-sm mr-2 mb-2">
      {{ family.title }}
    </button>
  </div>
</template>