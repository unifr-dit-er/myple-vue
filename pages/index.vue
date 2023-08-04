<template>
  <div class="hero min-h-screen bg-base-300">
    <div class="flex">
      <img class="w-1/3 hidden md:block" src="~/assets/img/undraw_bibliophile.svg" alt="" />
      <div class="2xl:w-1/3 hero-content mt-12 flex-col">
        <h1 class="text-7xl font-bold">MyPLE</h1>
        <p class="py-3 w-96 text-center">{{ $t('description') }}</p>
        <IndexStats />
      </div>
      <img class="w-1/3 hidden 2xl:block" src="~/assets/img/undraw_road_to_knowledge.svg" alt="" />
    </div>
  </div>
</template>