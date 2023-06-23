<script setup lang="ts">
const lang = 'fr-FR'
const { data } = await useAsyncGql('GetActivities', { lang: lang })
const detailsRef = ref<HTMLElement | null>(null)

const closeDetails = () => {
  if (detailsRef.value) {
    (detailsRef.value as HTMLDetailsElement).open = false
  }
}
</script>

<template>
  <ul class="menu menu-horizontal px-1">
    <li>
      <details ref="detailsRef">
        <summary><IconNotebook /> Activités</summary>
        <ul>
          <li v-for ="activity in data?.activities">
            <NuxtLink :to="`/activities/${activity.id}`" @click="closeDetails">
              {{ activity.translations?.[0]?.title }}
            </NuxtLink>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <NuxtLink to="/tools">
        <IconTools /> Outils
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/training">
        <IconSchool /> Formations
      </NuxtLink>
    </li>
  </ul>
</template>