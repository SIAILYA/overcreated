<template>
  <div class="d-flex mb-3">
    <router-link class="btn btn-primary text-nowrap me-3" to="/projects/create">Add project</router-link>
    <input id="" v-model="projectsSearch" class="form-control" name="" placeholder="Search" type="text">
  </div>

  <div class="row">
    <div
        v-for="project in filteredProjects"
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
import {computed, ref} from "vue";

import {storeToRefs} from "pinia";

import ProjectCard from "../../components/ProjectCard.vue";
import {useProjectsStore} from "../../stores/projectsStore";

const {fetchProjects} = useProjectsStore()
const {projects} = storeToRefs(useProjectsStore())

const projectsSearch = ref<string>("")

const filteredProjects = computed(() => {
  if (!projectsSearch.value) {
    return projects.value
  }

  return projects.value.filter(p => p.title.toLowerCase().includes(projectsSearch.value.toLowerCase()))
})

fetchProjects()
</script>

<style scoped>

</style>
