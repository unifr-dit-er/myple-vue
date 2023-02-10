<script setup>
import { useActive } from 'vue-use-active-scroll'
import animateScrollTo from 'animated-scroll-to'

const props = defineProps({
  title: { type: String, default: 'Toc' },
  links: { type: Array, required: true }
})

const targets = computed(() => props.links.map(({ href }) => href))
const { isActive, setActive } = useActive(targets, { overlayHeight: 200 })

function scrollTo(_event, id) {
  setActive(id)
  animateScrollTo(document.getElementById(id), {
    verticalOffset: -100
  })
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <ul class="menu">
        <li v-for="(link) in props.links" :key="link.href" :class="{ bordered: isActive(link.href) }">
          <NuxtLink @click="scrollTo($event, link.href)" :href="{ hash: `#${link.href}`, replace: true }">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>