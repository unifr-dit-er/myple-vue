<script setup lang="ts">
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const store = useMiscStore()
store.fetch()
const detailsRef = ref<HTMLElement | null>(null)

const closeDetails = () => {
  if (detailsRef.value) {
    (detailsRef.value as HTMLDetailsElement).open = false
  }
}
</script>

<template>
  <div class="navbar bg-base-100 fixed z-50">
    <div class="navbar-start w-3/4">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
          <li>
            <a><IconNotebook /> {{ $t('activities') }}</a>
            <ul class="p-2">
              <li v-for="activity in store.activities" :key="activity.id">
                <NuxtLink :to="localePath(`/activities/${activity.id}`)">
                  {{ activity.title }}
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li><NuxtLink :to="localePath('/tools')"><IconTools /> {{ $t('tools') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/training')"><IconSchool /> {{ $t('training') }}</NuxtLink></li>
        </ul>
      </div>
      <img class="w-12 hidden lg:block" src="~/assets/img/unifr-logo.png" alt="Unifr logo" />
      <NuxtLink :to="localePath('/')" class="btn btn-ghost normal-case text-xl">MyPLE</NuxtLink>
      <ul class="menu menu-horizontal px-1 hidden lg:flex">
        <li tabindex="0">
          <details ref="detailsRef">
            <summary><IconNotebook /> {{ $t('activities') }}</summary>
            <ul class="p-2">
              <li v-for="activity in store.activities" :key="activity.id">
                <NuxtLink :to="localePath(`/activities/${activity.id}`)" @click="closeDetails()">
                  {{ activity.title }}
                </NuxtLink>
              </li>
            </ul>
          </details>
        </li>
        <li><NuxtLink :to="localePath('/tools')"><IconTools /> {{ $t('tools') }}</NuxtLink></li>
        <li><NuxtLink :to="localePath('/training')"><IconSchool /> {{ $t('training') }}</NuxtLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn m-1"><IconLanguage /></label>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <NuxtLink :to="switchLocalePath('fr')">
              <img class="w-6 rounded" src="~/assets/img/fr.svg" alt="" /> Français
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="switchLocalePath('de')">
              <img class="w-6 rounded" src="~/assets/img/de.svg" alt="" /> Deutsch
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="switchLocalePath('it')">
              <img class="w-6 rounded" src="~/assets/img/it.svg" alt="" /> Italiano
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>