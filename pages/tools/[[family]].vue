<script setup lang="ts">
import type { Tool, ToolFamily } from "@/types/tool"

const apiProvider = useRuntimeConfig().public.apiProvider
const { locale } = useI18n()
const lang = `${locale.value}-${locale.value.toUpperCase()}`
const localePath = useLocalePath()
const family = useRoute().params.family || ''

const { data: families } = await useFetch<ToolFamily[]>(`/api/${apiProvider}/tools/families`, {
  query: { lang }
})

const { data: tools, error } = await useFetch<Tool[]>(`/api/${apiProvider}/tools`, {
  query: { lang, family }
})
</script>

<template>
  <div class="flex justify-center min-h-screen bg-base-300 py-24">
    <VError v-if="error" :code="error.statusCode" :message="error.statusMessage" />
    <div v-else-if="tools">
      <div class="max-w-screen-2xl px-2">
        <div class="flex items-center">
          <IconToolsLarge class="text-indigo-500" />
          <h2 class="text-4xl font-bold leading-normal ml-3">{{ $t('tools') }}</h2>
        </div>
        <div class="my-4">
          <NuxtLink :to="localePath(`/tools`)" class="btn btn-sm m-1 no-animation" :class="{ 'bg-indigo-500  hover:bg-indigo-400 text-white' : family === ''}">{{ $t('all') }}</NuxtLink>
          <NuxtLink v-for="f in families" :to="localePath(`/tools/${ f.slug }`)" class="btn btn-sm m-1 no-animation"
            :class="{ 'bg-indigo-500  hover:bg-indigo-400 text-white': family === f.slug }"
          >
            {{ f.title }}
          </NuxtLink>
        </div>
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div v-for="tool in tools" :key="tool.id" class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <div class="flex items-center">
                <div class="avatar">
                  <div class="w-20 mask mask-squircle mr-4">
                    <img :src="tool.image" />
                  </div>
                </div>
                <div>
                  <h2 class="card-title">{{ tool.title }}</h2>
                </div>
              </div>
              <div v-if="tool.families.length" class="card-actions items-center my-2">
                <NuxtLink v-for="family in tool.families" :to="localePath(`/tools/${ family.slug }`)" class="btn btn-sm">
                  {{ family.title }}
                </NuxtLink>
              </div>
              <div v-if="tool.tags.length" class="card-actions items-center">
                <div v-for="tag in tool.tags" class="badge badge-ghost">{{ tag }}</div>
              </div>
              <div class="my-6 text-slate-700 text-lg" v-html="tool.description"></div>
              <div class="flex-1"></div>
              <div v-if="tool.activityStepsCount" class="card-actions">
                <a class="btn w-full"><IconBook class="text-rose-500 mr-1" /> {{ tool.activityStepsCount }} {{  $t('related_activities') }}</a>
              </div>
              <div class="card-actions justify-center">
                <a v-if="tool.urlOfficial" :href="tool.urlOfficial" class="btn btn-sm w-full xl:w-52"><IconExternalLink /> {{ $t('official_website') }}</a>
                <a v-if="tool.urlAlternativeto" :href="tool.urlAlternativeto" class="btn btn-sm w-full xl:w-52"><IconRobot /> AlternativeTo</a>
                <a v-if="tool.urlUnifr" :href="tool.urlUnifr" class="btn btn-sm w-full xl:w-52"><IconHomeShield /> UNIFR</a>
                <a v-if="tool.urlUsi" :href="tool.urlUsi" class="btn btn-sm w-full xl:w-52"><IconHomeShield /> USI</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
