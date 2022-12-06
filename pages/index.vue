<script setup lang="ts">
  import { NLayout } from 'naive-ui'
</script>

<template>
  <n-layout position="absolute" style="top: 88px">
    <div class="container">
      <IndexBox />
    </div>
    <img class="image left" src="~/assets/img/undraw_bibliophile.svg" alt="" />
    <img class="image right" src="~/assets/img/undraw_road_to_knowledge.svg" alt="" />
  </n-layout>
</template>

<style lang="sass" scoped>
.container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  height: 700px
.image
  position: absolute
  width: 30%
  &.left
    top: 10%
  &.right
    top: 30%
    right: 0
</style>