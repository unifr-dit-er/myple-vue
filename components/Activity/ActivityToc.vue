<script setup>
import { useActive } from 'vue-use-active-scroll'
const props = defineProps({
  steps: { type: Array, required: true }
})

const links = props.steps.map(step => ({
  href: step.id,
  label: dTranslate(step, 'title')
}))
const targets = computed(() => links.map(({ href }) => href))
const { isActive, setActive } = useActive(targets, { overlayHeight: 70 })
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">Sommaire</h2>
      <ul class="menu">
        <li v-for="(link) in links" :key="link.href" :class="{ bordered: isActive(link.href) }">
          <a @click="setActive(link.href)" :href="`#${link.href}`">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>