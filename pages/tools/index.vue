<script setup lang="ts">
const store = useToolsStore()
</script>

<template>
  <div class="drawer drawer-end">
    <ToolsDrawerToggle />
    <div class="drawer-content">
      <div class="min-h-screen bg-base-300 px-20 py-32">
        <h2 class="text-4xl font-bold leading-normal mb-4">
          <IconToolsLarge class="inline w-8" /> {{ $t('tools') }}
        </h2>
        <p class="mb-4 text-xl leading-relaxed">
          {{ $t('tools_description') }}
        </p>
        <ToolsFilters class="mb-4" />
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <ToolsItem v-for="tool in store.tools" :key="tool.id" :tool="tool" />
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <ToolsDrawer />
    </div>
  </div>
</template>
