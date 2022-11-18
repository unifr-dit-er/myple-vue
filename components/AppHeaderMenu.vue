<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
</template>

<script setup lang="ts">
import { h, ref, Component } from 'vue'
import { NIcon, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  Notebook24Filled as ActivitiesIcon,
  HatGraduation24Filled as TrainingIcon,
  Toolbox24Filled as ToolsIcon
} from '@vicons/fluent'

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: 'Activités',
    key: 'Activities',
    icon: renderIcon(ActivitiesIcon),
    children: [
      {
        label: 'Découvrir et choisir des outils informatiques pour ses études',
        key: 'Découvrir et choisir des outils informatiques pour ses études'
      },
      {
        label: 'Produire des documents académiques écrits',
        key: 'Produire des documents académiques écrits'
      },
      {
        label: 'Gérer sa collection de documents',
        key: 'Gérer sa collection de documents'
      },
      {
        label: 'Gérer son identité numérique',
        key: 'Gérer son identité numérique'
      },
      {
        label: 'Gérer son temps et ses tâches',
        key: 'Gérer son temps et ses tâches'
      },
      {
        label: 'Création et présentation de contenus visuels',
        key: 'Création et présentation de contenus visuels'
      },
      {
        label: 'Rechercher de l\'information bibliographique',
        key: 'Rechercher de l\'information bibliographique'
      },
      {
        label: 'Communiquer et Collaborer',
        key: 'Communiquer et Collaborer'
      },
      {
        label: 'Prendre des notes',
        key: 'Prendre des notes'
      },
    ]
  },
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://en.wikipedia.org/wiki/Hear_the_Wind_Sing',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        'Outils'
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(ToolsIcon)
  },
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://en.wikipedia.org/wiki/Hear_the_Wind_Sing',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        'Formations'
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(TrainingIcon)
  }
]

const activeKey = ref<string | null>(null)

</script>