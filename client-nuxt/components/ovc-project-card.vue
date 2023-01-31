<template>
  <nuxt-link
      class="project-card flex flex-col"
      role="article"
      :to="`/portfolio/${projectItem.slug}`"
  >
    <h3 class="text-center font-medium text-2xl project-card__header mb-2" :style="{color: makeMoreContrast(theme.value, projectItem.color), '--raw-color': projectItem.color}">
      {{projectItem.title}}
    </h3>

    <div class="flex items-center flex-1">
      <p class="project-card__description w-full text-center font-light">{{projectItem.description}}</p>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import {Project} from "~/data/models/Project";
import {useThemeStore} from "~/stores/themeStore";
import {makeMoreContrast} from "~/utils/color";

interface Props {
  projectItem: Project
}

const props = defineProps<Props>()

const {theme} = useThemeStore()
</script>

<style scoped lang="scss">
.project-card {
  background: var(--background-secondary);
  border: 1px var(--border-color) solid;
  border-radius: 8px;
  padding: 10px;

  .project-card__header {
    transition: all .3s ease;
  }

  .project-card__description {
    opacity: .8;
    transition: opacity .3s ease;
    word-wrap: break-word;
  }

  &:hover {
    //background: var(--background-secondary-hover);
    transform: translateY(-5px);
    box-shadow: 0 0 10px 1px var(--shadow-color);

    .project-card__header {
      text-shadow: 0 0 15px currentColor;
    }

    .project-card__description {
      opacity: 1;
    }
  }
}
</style>
