<script setup lang="ts">
import { SunIcon, MoonIcon } from "vue-tabler-icons"
</script>

<template>
  <a class="btn btn-ghost">
    <label class="swap swap-rotate">
      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" />
      <span class="swap-on"><sun-icon size="30" stroke-width="1.5" /></span>
      <span class="swap-off"><moon-icon size="30" stroke-width="1.5" /></span>
    </label>
  </a>
</template>