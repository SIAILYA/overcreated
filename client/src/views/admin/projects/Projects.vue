<template>
  <router-link class="text-decoration-none d-inline-block" to="add">
    <button class="ovc-btn d-flex">
      <span class="material-icons-round me-2">playlist_add</span>
      <span>Создать проект</span>
    </button>
  </router-link>
  <br>
  <div class="d-flex mt-3">
    <ovc-spinner class="mx-auto" :show="isLoadingProjects"/>
  </div>
  <div class="row mt-5">
    <div v-for="p in projects" :key="p.id" class="col-12 col-md-6 col-lg-4 d-flex">
      <ovc-project :project="p" :to="'edit/' + p.id" class="project-card"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Project} from "../../../typings/project";
import {onMounted, Ref, ref} from "vue";
import axios from "axios";
import {BACK_API} from "../../../../config";
import OvcProject from "../../../components/OvcProject.vue";
import OvcSpinner from "../../../components/OvcSpinner.vue";

const projects: Ref<Array<Project>> = ref([])
const isLoadingProjects = ref(true)

onMounted(() => {
  axios.get(BACK_API + "projects/get?onlyVisible=false").then(r => {
    projects.value = r.data.map((p: Object) => {
      return new Project(p);
    })

    isLoadingProjects.value = false
  })
})
</script>

<style scoped>
</style>
