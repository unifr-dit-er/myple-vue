<script setup lang="ts">
const settings = useSettingsStore()
</script>

<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn m-1"><IconLanguage /></label>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <a @click="settings.switchLang('fr')">
          <img class="w-6 rounded" src="~/assets/img/fr.svg" alt="" /> Français
        </a>
      </li>
      <li>
        <a @click="settings.switchLang('de')">
          <img class="w-6 rounded" src="~/assets/img/de.svg" alt="" /> Deutsch
        </a>
      </li>
      <li>
        <a @click="settings.switchLang('it')">
          <img class="w-6 rounded" src="~/assets/img/it.svg" alt="" /> Italiano
        </a>
      </li>
    </ul>
  </div>
</template>