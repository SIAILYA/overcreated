<template>
  <div class="d-flex mb-3">
    <router-link class="btn btn-primary text-nowrap me-3" to="/projects/create">Add project</router-link>
    <input id="" v-model="projectsSearch" class="form-control" name="" placeholder="Search" type="text">
  </div>

  <div class="row">
    <div
        v-for="(project, index) in filteredProjects"
        :key="project.id"
        :class="!project.isVisible ? 'opacity-50' : ''"
        class="col-12 col-md-6 col-lg-4 mt-3"
    >
      <project-card
          :key="project.id"
          :project-item="project"
          :shift-left="index !== 0"
          :shift-right="index !== filteredProjects.length - 1"
          @reorder="onReorderProject"
          @shift="fetchProjects"
      />
    </div>
  </div>

  <modal-window
      :show="showReorderWindow"
      @close="showReorderWindow = false"
  >
    <h3>Set "{{ reorderProject.title }}" order</h3>

    <div class="mt-3">
      <input
          v-model="reorderProject.order"
          class="form-control"
          max="100"
          min="1"
          type="number"
      >
    </div>

    <div class="mt-3 d-flex justify-content-end">
      <button
          class="btn btn-primary me-3"
          @click="onConfirmReorderProject()"
      >
        Save
      </button>
      <button
          class="btn btn-outline-primary"
          @click="showReorderWindow = false"
      >
        Cancel
      </button>
    </div>
  </modal-window>
</template>

<script lang="ts" setup>
import {computed, ComputedRef, ref} from "vue";

import {storeToRefs} from "pinia";

import ProjectCard from "@components/ProjectCard.vue";
import ModalWindow from "@components/ModalWindow.vue";

import {useProjectsStore} from "@stores/projectsStore";
import {Project} from "@data/models/Project";

const {fetchProjects} = useProjectsStore()
const {projects} = storeToRefs(useProjectsStore())

const projectsSearch = ref<string>("")
const showReorderWindow = ref<boolean>(false)
const reorderProject = ref<Project | null>(null)

const filteredProjects: ComputedRef<Project[]> = computed(() => {
  if (!projectsSearch.value) {
    return projects.value
  }

  return projects.value.filter(p => p.title.toLowerCase().includes(projectsSearch.value.toLowerCase()))
})

const onReorderProject = (project: Project) => {
  console.log(project.title)
  reorderProject.value = project
  showReorderWindow.value = true
}

const onConfirmReorderProject = () => {
  reorderProject.value?.reorder(reorderProject.value.order).then(() => {
    fetchProjects()
    showReorderWindow.value = false
  })
}

fetchProjects()
</script>

<style scoped>

</style>
