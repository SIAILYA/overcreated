<template>
  <div class="d-flex mb-3">
    <router-link class="btn btn-primary text-nowrap me-3" to="/projects/create">Add project</router-link>
    <input id="" v-model="projectsSearch" class="form-control" name="" placeholder="Search" type="text">
  </div>

  <div class="row">
    <div
        v-for="(project, index) in filteredProjects"
        :key="project.id"
        class="col-12 col-md-6 col-lg-4 mt-3"
        :class="!project.isVisible ? 'opacity-50' : ''"
    >
      <project-card
          :key="project.id"
          :project-item="project"
          :shift-left="index !== 0"
          :shift-right="index !== filteredProjects.length - 1"
          @shift="fetchProjects"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, ComputedRef, ref} from "vue";

import {storeToRefs} from "pinia";

import ProjectCard from "../../components/ProjectCard.vue";
import {useProjectsStore} from "../../stores/projectsStore";
import {Project} from "../../data/models/Project";

const {fetchProjects} = useProjectsStore()
const {projects} = storeToRefs(useProjectsStore())

const projectsSearch = ref<string>("")

const filteredProjects: ComputedRef<Project[]> = computed(() => {
  if (!projectsSearch.value) {
    return projects.value
  }

  return projects.value.filter(p => p.title.toLowerCase().includes(projectsSearch.value.toLowerCase()))
})

fetchProjects()
</script>

<style scoped>

</style>
