<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="flex max-w-7xl">
      <div class="2xl:w-1/2 hero-content mt-12 flex-col max-w-sm md:max-w-none">
        <h1 class="text-7xl font-bold">MyPLE</h1>
        <p class="px-4 md:px-0 py-3 text-center text-xl font-medium tracking-wide">{{ $t('description') }}</p>
        <Stats />
      </div>
      <img class="hidden lg:block m-6" src="~/assets/img/undraw_education_f8ru.svg" alt="" />
    </div>
  </div>
</template>