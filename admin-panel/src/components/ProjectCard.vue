<template>
  <router-link
      :to="'/projects/edit/' + projectItem.id"
      class="project-card d-block"
  >
    <h2 class="title text-center">
      {{ projectItem.title }}
    </h2>
    <div class="mt-2">
      {{ projectItem.description }}
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import {Project} from "../data/models/Project";

interface Props {
  projectItem: Project
}

const {projectItem} = defineProps<Props>()

console.log(projectItem)
</script>

<style lang="scss" scoped>
.project-card {
  border: 1px solid rgba(0, 0, 0, .2);
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: black;

  .title {
    font-size: 1.5rem;
    margin: 0;
  }
}
</style>
