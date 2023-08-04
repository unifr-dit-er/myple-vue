<script setup lang="ts">
const store = useToolsStore()
store.fetch()
store.closeDrawer()
</script>

<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" v-model="store.drawer" />
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
          <Tool v-for="tool in store.tools" :key="tool.id" :tool="tool" />
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-4" class="drawer-overlay"></label>
      <div class="p-4 pt-24 w-1/4 min-h-screen bg-base-200">
        <ToolDrawer />
      </div>
    </div>
  </div>
</template>
