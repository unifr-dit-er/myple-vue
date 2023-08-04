<script setup lang="ts">
const { stats } = useStatsStore()
</script>

<template>
  <div class="stats shadow">

    <div class="stat">
      <div class="stat-title">{{ $t('activities') }}</div>
      <div class="stat-value text-accent">{{ stats.activities }}</div>
      <div class="stat-desc">{{ $t('activities_info') }}</div>
    </div>

    <div class="stat">
      <div class="stat-title">{{ $t('tools') }}</div>
      <div class="stat-value text-accent">{{ stats.tools }}</div>
      <div class="stat-desc">{{ $t('tools_info') }}</div>
    </div>

    <div class="stat">
      <div class="stat-title">{{ $t('training') }}</div>
      <div class="stat-value text-accent">{{ stats.trainings }}</div>
      <div class="stat-desc">{{ $t('training_info') }}</div>
    </div>

  </div>
</template>