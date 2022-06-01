<template>
  <router-link class="text-decoration-none d-inline-block" to="add">
    <button class="ovc-btn d-flex">
      <span class="material-icons-round me-2">playlist_add</span>
      <span>Создать проект</span>
    </button>
  </router-link>
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

const projects: Ref<Array<Project>> = ref([])

onMounted(() => {
  axios.get(BACK_API + "projects/get?onlyVisible=false").then(r => {
    projects.value = r.data.map((p: Object) => {
      return new Project(p);
    })
  })
})
</script>

<style scoped>
.project-card {
  width: 100%;
  flex: 0 1 auto;
}
</style>
