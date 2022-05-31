<template>
  <router-link to="add" class="text-decoration-none">
    <button class="ovc-btn d-flex">
      <span class="material-icons-round me-2">playlist_add</span>
      <span>Создать проект</span>
    </button>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4" v-for="p in projects" :key="p.id">
        <ovc-project :project="p" :to="'edit/' + p.id"/>
      </div>
    </div>
  </router-link>
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

</style>
