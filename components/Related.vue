<script setup>
import { ToolsIcon, LifebuoyIcon, SchoolIcon } from 'vue-tabler-icons'
const props = defineProps({
  small: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="btn-group mt-5 mb-7">
    <button class="btn btn-outline btn-secondary gap-2" :class="{ 'btn-sm': small }">
      <ToolsIcon size="20" /> Famille d'outils
      <div class="badge badge-secondary">12</div>
    </button>
    <button class="btn btn-outline btn-secondary gap-2" :class="{ 'btn-sm': small }">
      <LifebuoyIcon size="20" /> Ressources
      <div class="badge badge-secondary">24</div>
    </button>
    <button class="btn btn-outline btn-secondary gap-2" :class="{ 'btn-sm': small }">
      <SchoolIcon size="20" /> Formations
      <div class="badge badge-secondary">3</div>
    </button>
  </div>
</template>