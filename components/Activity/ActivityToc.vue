<script setup lang="ts">
const props = defineProps({
  activeId: { type: String },
  steps: { type: Array<Step> }
})

const router = useRouter()

const goToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    router.push({ hash: `#${id}` })
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
</script>

<template>
  <ul class="menu menu-compact">
    <li
      v-for="{ id, title } in steps"
      :id="`toc-${id}`"
      :key="id"
      @click="goToSection(id.toString())"
    >
      <a>{{ title }}</a>
    </li>
  </ul>
</template>