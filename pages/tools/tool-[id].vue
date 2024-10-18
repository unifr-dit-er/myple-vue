<script setup lang="ts">
import type { Tool } from "@/types/tool"

const { id } = useRoute().params
const apiProvider = useRuntimeConfig().public.apiProvider
const { locale } = useI18n()
const lang = `${locale.value}-${locale.value.toUpperCase()}`
const localePath = useLocalePath()

const { data: tool, error } = await useFetch<Tool>(`/api/${apiProvider}/tools/${id}`, {
  query: { lang }
})
</script>

<template>
  <div class="flex justify-center min-h-screen bg-base-300 py-24">
    <VError v-if="error" :code="error.statusCode" :message="error.statusMessage" />
    <div v-else-if="tool">
      <div class="max-w-screen-5xl px-2">
        <div class="flex items-center mb-2">
          <IconToolsLarge class="text-indigo-500 hidden sm:block" />
          <h2 class="text-4xl font-bold leading-7 sm:leading-normal ml-3">{{ tool.title }}</h2>
        </div>
        <div class="card bg-base-100 shadow-xl w-full">
          <div class="card-body">
            <div class="sm:flex items-center">
              <div class="avatar">
                <div class="w-32 mr-4">
                  <img :src="tool.image" />
                </div>
              </div>
              <div>
                <div v-if="tool.families.length" class="card-actions items-center my-2">
                  <NuxtLink v-for="family in tool.families" :to="localePath(`/tools/${ family.slug }`)" class="btn btn-sm">
                    {{ family.title }}
                  </NuxtLink>
                </div>
                <div v-if="tool.tags.length" class="card-actions items-center my-2">
                  <div v-for="tag in tool.tags" class="badge badge-ghost">{{ tag }}</div>
                </div>
              </div>
            </div>
            <div class="my-6 text-slate-700 text-lg" v-html="tool.description"></div>
            <div class="card-actions justify-center">
              <a v-if="tool.urlOfficial" :href="tool.urlOfficial" class="btn btn-sm w-full md:w-52"><IconExternalLink /> {{ $t('official_website') }}</a>
              <a v-if="tool.urlAlternativeto" :href="tool.urlAlternativeto" class="btn btn-sm w-full md:w-52"><IconRobot /> AlternativeTo</a>
              <a v-if="tool.urlUnifr" :href="tool.urlUnifr" class="btn btn-sm w-full md:w-52"><IconHomeShield /> UNIFR</a>
              <a v-if="tool.urlUsi" :href="tool.urlUsi" class="btn btn-sm w-full md:w-52"><IconHomeShield /> USI</a>
            </div>
          </div>
        </div>
        <div class="px-2 sm:px-4">
          <ul class="menu menu-lg bg-base-200 [&_li>*]:rounded-none">
            <li v-for="step in tool.steps" :key="step.id">
              <NuxtLink :to="localePath(`/activities/${ step.activity.id }#${ step.id }`)">
                <IconBook class="text-rose-500 mr-1" />
                {{ step.title }}
                <span class="badge badge-sm ml-4 hidden md:block lg:ml-56">{{ step.activity.title }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>