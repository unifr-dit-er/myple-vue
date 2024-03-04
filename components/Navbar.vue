<script setup lang="ts">
import IconTools from '@/components/Icon/Tools.vue'
import IconSchool from '@/components/Icon/School.vue'
const localePath = useLocalePath()

const links: Link[] = [
  { title: "tools", path: "/tools", icon: IconTools },
  { title: "training", path: "/training", icon : IconSchool }
]
</script>

<template>
  <div class="navbar bg-base-100 fixed z-50">
    <div class="navbar-start w-3/4">
      <NavMobile :links="links" />
      <img class="w-12 hidden lg:block" src="~/assets/img/unifr-logo.png" alt="Unifr logo" />
      <NuxtLink :to="localePath('/')" class="btn btn-ghost normal-case text-xl">MyPLE</NuxtLink>
      <details id="activities-menu" class="dropdown hidden lg:block">
        <summary class="btn btn-ghost m-1"><IconNotebook /> {{ $t('activities') }}</summary>
        <ul class="w-80 p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
          <NavActivities />
        </ul>
      </details>
      <NuxtLink v-for="link in links" :key="link.title" :to="localePath(link.path)" class="btn btn-ghost m-1 hidden lg:flex">
        <component :is="link.icon" />{{ $t(link.title) }}
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <NavLanguages />
    </div>
  </div>
</template>

<style scoped>
.btn {
  @apply capitalize;
}
</style>