<script setup lang="ts">
useHead({
  title: "MyPLE",
  meta: [
    { name: "MyPLE", content: "MyPLE propose 3 types d'aides, en libre accès, sur les outils informatiques pouvant aider à réaliser les tâches de travail du métier d'étudiant·e." }
  ]
})
</script>

<template>
  <div>
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>