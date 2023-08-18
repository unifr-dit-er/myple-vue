<script setup lang="ts">
const localePath = useLocalePath()

const links = [
  { title: "tools", path: "/tools" },
  { title: "training", path: "/training" }
]
</script>

<template>
  <div class="navbar bg-base-100 fixed z-50">
    <div class="navbar-start w-3/4">
      <NavMobile :links="links" />
      <img class="w-12 hidden lg:block" src="~/assets/img/unifr-logo.png" alt="Unifr logo" />
      <NuxtLink :to="localePath('/')" class="btn btn-ghost normal-case text-xl">MyPLE</NuxtLink>
      <div class="dropdown dropdown-hover hidden lg:block">
        <label tabindex="0" class="btn btn-ghost m-1"><IconNotebook /> {{ $t('activities') }}</label>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
          <NavActivities />
        </ul>
      </div>
      <NuxtLink v-for="link in links" :key="link.title" :to="localePath(link.path)" class="btn btn-ghost m-1 hidden lg:flex">
        <IconTools v-if="link.title === 'tools'" />
        <IconSchool v-if="link.title === 'training'" />
        {{ $t(link.title) }}
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