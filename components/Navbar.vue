<template>
  <div class="navbar bg-base-100 fixed z-50">
    <div class="navbar-start">
      <NavbarMobile />
      <img class="w-12 hidden lg:block" src="~/assets/img/unifr-logo.png" alt="Unifr logo" />
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
        MyPLE
      </NuxtLink>
      <NavbarMenu class="hidden lg:inline-flex" />
    </div>
    <div class="navbar-end">
      <NavbarTheme />
      <NavbarLang />
    </div>
  </div>
</template>