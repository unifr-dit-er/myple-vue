<script setup>
  import { NLayout, NLayoutSider, NH1, NH2 } from 'naive-ui'
  const params = {
    filter: {
      "activity": {
        "_eq": "2"
      }
    },
    fields: "id,status,sort, translations.languages_code,translations.title"
  }
  const { data } = await useFetch(() => `https://eddb9.unifr.ch/myple/items/steps`, { params: params })
</script>

<template>
  <n-layout has-sider position="absolute" style="top: 88px">
    <n-layout-sider bordered content-style="padding: 24px;">
      Toc Toc
    </n-layout-sider>
    <n-layout content-style="padding: 24px;">
      <n-h1>Produire des documents académiques écrits</n-h1>

      <n-h2>Sub</n-h2>
      <p>{{ data }}</p>
    </n-layout>
  </n-layout>
</template>