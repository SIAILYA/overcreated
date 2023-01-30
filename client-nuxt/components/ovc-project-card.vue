<template>
  <nuxt-link
      class="project-card"
      role="article"
  >
    <h3 class="text-center font-medium text-lg" :style="{color: projectItem.color}">
      {{projectItem.title}}
    </h3>
  </nuxt-link>
</template>

<script setup lang="ts">
import {Project} from "~/data/models/Project";

interface Props {
  projectItem: Project
}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.project-card {
  background: var(--background-secondary);
  border: 1px var(--border-color) solid;
  border-radius: 10px;
  padding: 10px;
}
</style>
