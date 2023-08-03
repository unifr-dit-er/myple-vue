<script setup lang="ts">
const store = useToolsStore()
</script>

<template>
  <div class="text-center">
    <div class="avatar mb-2">
      <div class="w-40 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
        <img :src="store.activeTool?.image" />
      </div>
    </div>
    <h3 class="text-2xl font-bold mb-2">
      {{ store.activeTool?.title }}
    </h3>
    <p v-html="store.activeTool?.description" class="mb-4"></p>
    <div class="mb-4">
      <div v-for="family in store.activeTool?.families" class="badge badge-outline mb-1 mr-2">{{ family.title }}</div>
      <div v-for="tag in store.activeTool?.tags" class="badge badge-outline mb-1 mr-2">{{ tag.title }}</div>
    </div>
    <ul class="menu bg-base-100 rounded-box mx-4 mb-4">
      <li v-if="store.activeTool?.url">
        <a :href="store.activeTool?.url"><IconExternalLink /> Site officiel</a>
      </li>
      <li v-if="store.activeTool?.urlAlternativeto">
        <a :href="store.activeTool?.urlAlternativeto"><IconRobot /> AlternativeTo</a>
      </li>
      <li v-if="store.activeTool?.urlUnifr">
        <a :href="store.activeTool?.urlUnifr"><IconHomeShield /> UniFr</a>
      </li>
      <li v-if="store.activeTool?.urlUsi">
        <a :href="store.activeTool?.urlUsi"><IconHomeShield /> USI</a>
      </li>
    </ul>
    <ul class="menu bg-base-100 rounded-box mx-4">
      <li class="menu-title">Activités liées</li>
      <li v-for="step in store.activeTool?.steps" :key="step.step">
        <NuxtLink :to="`/activities/${step.id}#${step.step}`" class="block flex">
          <div class="w-6"><IconNotebook /></div>
          {{ step.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>