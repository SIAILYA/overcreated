<template>
  <router-link to="/projects/create" class="mb-3 btn btn-primary">Add project</router-link>

  <div class="row">
    <div
        v-for="project in projects"
        :key="project.id"
        class="col-12 col-md-6 col-lg-4"
    >

      <project-card
          :key="project.id"
          :project-item="project"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useProjectsStore} from "../../stores/projectsStore";
import {storeToRefs} from "pinia";
import ProjectCard from "../../components/ProjectCard.vue";

const {fetchProjects} = useProjectsStore()
const {projects} = storeToRefs(useProjectsStore())

fetchProjects().then(() => {
  console.log(projects.value)
})
</script>

<style scoped>

</style>
