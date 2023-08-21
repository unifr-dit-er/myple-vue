<script setup lang="ts">
const localePath = useLocalePath()
defineProps<{
  links: Link[]
}>()
</script>

<template>
  <div class="dropdown">
    <label tabindex="0" class="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
      <li>
        <a><IconNotebook /> {{ $t('activities') }}</a>
        <ul class="p-2">
          <NavActivities />
        </ul>
      </li>
      <li v-for="link in links" :key="link.title">
        <NuxtLink :to="localePath(link.path)">
          <IconTools v-if="link.title === 'tools'" />
          <IconSchool v-if="link.title === 'training'" />
          {{ $t(link.title) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>