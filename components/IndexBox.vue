<script setup>
  import { NH1, NDivider, NText } from 'naive-ui'
</script>

<template>
  <div class="index-box">
    <n-h1 class="title">MyPLE</n-h1>
    <span>
      MyPLE propose 3 types d'aides, en libre accès, sur les outils informatiques pouvant aider à réaliser les tâches de travail du métier d'étudiant·e.
    </span>
    <n-divider />
    <span class="subtext">
      <n-text type="primary" strong>9</n-text> activités en auto-apprentissage,
      <n-text type="primary" strong>101</n-text> outils séléctionnés par nos soins ainsi que
      <n-text type="primary" strong>6</n-text> formations officielles de l'université.
    </span>
  </div>
</template>

<style lang="sass" scoped>
.index-box
  width: 400px
  margin: 5px
  text-align: center
  font-size: 18px
  .title
    font-size: 80px
  .subtext
    font-size: 15px
</style>