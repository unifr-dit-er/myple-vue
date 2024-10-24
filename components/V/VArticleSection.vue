<script setup lang="ts">
const { content = '' } = defineProps<{
  id: string,
  title?: string
  content?: string
}>()

const visibility = defineModel()
const section = ref(null)

watchEffect(() =>{
  visibility.value = useElementVisibility(section)
})
</script>

<template>
  <section :id="id" class="bg-base-200 p-6 my-4" ref="section">
    <h2 v-if="title" class="text-2xl font-bold mb-6">
      {{ title }}
    </h2>
    <div v-if="$slots.header" class="my-6">
      <slot name="header"></slot>
    </div>
    <div v-html="content" class="my-6 prose max-w-none"></div>
    <div v-if="$slots.footer" class="my-6">
      <slot name="footer"></slot>
    </div>
  </section>
</template>

<style scoped>
h2:before {
  content:"";
  display:block;
  height:100px;
  margin-top:-100px;
  visibility:hidden;
}
:deep(p) {
  overflow-wrap: anywhere;
}
:deep(iframe) {
  @apply max-w-full;
  @apply max-h-96;
}
</style>