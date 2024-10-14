<script setup lang="ts">

useHead({
  title: "MyPLE",
  meta: [
    {
      name: "MyPLE",
      content: "MyPLE propose 3 types d'aides, en libre accès, sur les outils informatiques pouvant aider à réaliser les tâches de travail du métier d'étudiant·e."
    }
  ]
})
</script>

<template>
  <div tabindex="0">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>