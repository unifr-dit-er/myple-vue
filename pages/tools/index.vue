<script setup lang="ts">
const store = useToolsStore()
store.fetch()
</script>

<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" v-model="store.drawer" />
    <div class="drawer-content">
      <div class="min-h-screen bg-base-300 px-20 py-32">
        <h2 class="text-4xl font-bold leading-normal mb-4">
          <IconToolsLarge class="inline w-8" /> Outils
        </h2>
        <p class="mb-4 text-xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur hendrerit erat ac tempor. Quisque urna ipsum, convallis at fermentum sit amet, rutrum lacinia nunc. Curabitur elementum, est id maximus dignissim, sapien purus suscipit arcu, porta rhoncus felis eros at risus. Nunc suscipit, nunc nec luctus tincidunt, lectus tortor placerat leo, nec gravida arcu purus quis purus.
        </p>
        <ToolsFilters class="mb-4" />
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <Tool v-for="tool in store.tools" :key="tool.id" :tool="tool" />
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-4" class="drawer-overlay"></label>
      <div class="p-4 pt-24 w-96 min-h-screen bg-base-200">
        <ToolDrawer />
      </div>
    </div>
  </div>
</template>
