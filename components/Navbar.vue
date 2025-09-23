<script setup lang="ts">
import IconTools from '@/components/Icon/Tools.vue'
import IconSchool from '@/components/Icon/School.vue'
import IconBook from '@/components/Icon/Book.vue'
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const links = [
  { title: "activities", path: "/activities", icon: IconBook, class: "text-rose-500" },
  { title: "tools", path: "/tools", icon: IconTools, class: "text-indigo-500" },
  { title: "training", path: "/trainings", icon : IconSchool, class: "text-teal-500" }
]
const langs: { id: "fr" | "de" | "it"; title: string }[] = [
  { id: "fr", title: "Français" },
  { id: "de", title: "Deutsch" },
  { id: "it", title: "Italiano" }
]
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8l16 0" /><path d="M4 16l16 0" /></svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li v-for="link in links" :key="link.title" class="font-semibold">
            <NuxtLink :to="localePath(link.path)">
              <component :is="link.icon" :class="link.class" />{{ $t(link.title) }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <img class="w-12 hidden lg:block" src="~/assets/img/unifr-logo.png" alt="Unifr logo" />
      <NuxtLink :to="localePath('/')" class="btn btn-ghost text-xl">MyPLE</NuxtLink>
      <ul class="menu menu-horizontal px-1 ml-6 hidden lg:flex">
        <li v-for="link in links" :key="link.title" class="font-semibold">
          <NuxtLink :to="localePath(link.path)">
            <component :is="link.icon" :class="link.class" />{{ $t(link.title) }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <IconLanguage />
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-36 p-2 shadow">
          <li v-for="lang in langs" :key="lang.id">
            <NuxtLink :to="switchLocalePath(lang.id)">
              <img class="w-6 rounded" :src="`/img/${lang.id}.svg`" alt="" /> {{ lang.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>