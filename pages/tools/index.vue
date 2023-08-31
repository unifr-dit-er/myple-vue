<script setup lang="ts">
const store = useToolsStore()
const toolStore = useToolStore()
const families = useFamiliesStore()
const localePath = useLocalePath()

onMounted(() => {
  const hash = window.location.hash
  if (hash.startsWith('#family')) {
    const id = Number(hash.split('#family-')[1])
    families.setActive(id)
  }
})
</script>

<template>
  <div class="drawer drawer-end">
    <ToolsDrawerToggle />
    <div class="drawer-content">
      <div class="min-h-screen bg-base-300 px-4 lg:px-20 py-32">
        <h2 class="text-4xl font-bold leading-normal mb-4">
          <IconToolsLarge class="inline w-8" /> {{ $t('tools') }}
        </h2>
        <ToolsFilters class="mb-4" />
        <div class="hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <ToolsItem v-for="tool in store.tools" :key="tool.id" :tool="tool" @click="toolStore.fetchAndOpen(tool.id)" />
        </div>
        <NuxtLink v-for="tool in store.tools" :key="tool.id" :to="localePath(`/tools/${tool.id}`)" class="lg:hidden">
          <ToolsItem :tool="tool" class="mb-2" />
        </NuxtLink>
      </div>
    </div>
    <div class="drawer-side">
      <ToolsDrawer />
    </div>
  </div>
</template>
