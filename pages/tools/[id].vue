<script setup lang="ts">
const localePath = useLocalePath()
const store = useToolStore()
const { id: idParams } = useRoute().params
const id = typeof idParams === 'string' ? Number(idParams) : Number(idParams[0])
store.fetch(id)
</script>

<template>
  <div class="p-4 pt-24 min-h-screen bg-base-200">
    <div v-if="store.tool" class="text-center max-w-md mx-auto mb-8">
      <div>
        <NuxtLink :to="localePath('/tools')" class="btn btn-outline btn-wide mb-8">
          <IconTools /> {{ $t('tools') }}
        </NuxtLink>
      </div>
      <div class="avatar mb-2">
        <div class="w-40 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
          <img :src="store.tool.image" />
        </div>
      </div>
      <h3 class="text-2xl font-bold mb-2">
        {{ store.tool.title }}
      </h3>
      <p v-html="store.tool.description" class="mb-4"></p>
      <div class="mb-4">
        <div v-for="family in store.tool.families" class="badge badge-outline mb-1 mr-2">{{ family.title }}</div>
        <div v-for="tag in store.tool.tags" class="badge badge-outline mb-1 mr-2">{{ tag.title }}</div>
      </div>
      <ToolsWebsites :tool="store.tool" />
      <ToolsSteps :tool="store.tool" />
    </div>
  </div>
</template>