<script setup lang="ts">
const { stats } = useStatsStore()
</script>

<template>
  <div class="stats shadow">

    <div class="stat">
      <div class="stat-title">Activités</div>
      <div class="stat-value text-accent">{{ stats.activities }}</div>
      <div class="stat-desc">en auto-apprentissage</div>
    </div>

    <div class="stat">
      <div class="stat-title">Outils</div>
      <div class="stat-value text-accent">{{ stats.tools }}</div>
      <div class="stat-desc">séléctionnés par nos soins</div>
    </div>

    <div class="stat">
      <div class="stat-title">Formations</div>
      <div class="stat-value text-accent">{{ stats.trainings }}</div>
      <div class="stat-desc">DigitalSkills</div>
    </div>

  </div>
</template>