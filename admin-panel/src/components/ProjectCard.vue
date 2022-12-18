<template>
  <div>
    {{projectItem.title}}
  </div>
</template>

<script setup lang="ts">
import {Project} from "../data/models/Project";

interface Props {
  projectItem: Project
}

const {projectItem} = defineProps<Props>()

console.log(projectItem)
</script>

<style scoped>

</style>
