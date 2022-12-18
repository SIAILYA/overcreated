<template>
  <project-card
      v-for="project in projects"
      :key="project.id"
      :project-item="project"
  />
</template>

<script setup lang="ts">
import {useProjectsStore} from "../stores/projectsStore";
import {storeToRefs} from "pinia";
import ProjectCard from "../components/ProjectCard.vue";

const {fetchProjects} = useProjectsStore()
const {projects} = storeToRefs(useProjectsStore())

fetchProjects().then(() => {
  console.log(projects.value)
})
</script>

<style scoped>

</style>
