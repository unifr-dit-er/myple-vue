<script setup>
  import { NText } from 'naive-ui'
</script>

<template>
  <n-text class="title">
    <img class="image" src="~/assets/img/unifr-logo.png" alt="Unifr logo" />
    <span>MyPLE</span>
  </n-text>
</template>

<style lang="sass" scoped>
.title
  font-size: 24px
  display: flex
  margin-right: 80px
  .image
    width: 40px
    height: 40px
    margin-right: 12px
</style>