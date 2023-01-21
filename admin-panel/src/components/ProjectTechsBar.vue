<template>
  <h5>Project techs</h5>

  <span class="fw-bold mb-2 d-block">Selected</span>
  <ul class="tech-list">
    <li v-for="t in projectItem.techs">
      <tech-item
          :key="t.id"
          :selected="true"
          :tech-item="t"
          @update:selected="onClickToggleTech(t)"
      />
    </li>
  </ul>

  <hr>

  <span class="mb-2 fw-bold d-block">Search</span>
  <div class="d-flex mb-2">
    <input v-model="techSearch" class="form-control w-100" placeholder="Search techs" type="text">
    <button class="btn btn-secondary ms-1" @click="fetchTechs">
      R
    </button>
  </div>

  <ul class="tech-list">
    <li v-for="t in filteredTechs">
      <tech-item
          :key="t.id"
          :selected="projectItem.hasTech(t)"
          :tech-item="t"
          @update:selected="onClickToggleTech(t)"
      />
    </li>

    <li v-if="filteredTechs.length === 0">
      <a class="btn btn-success" href="/techs" target="_blank">
        Add new tech
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import {computed, ComputedRef, ref} from "vue";

import TechItem from "@components/TechItem.vue";

import {Project} from "@data/models/Project";
import {Tech} from "@data/models/Tech";
import {useTechStore} from "@stores/techStore";

interface Props {
  projectItem: Project
}

const {projectItem} = defineProps<Props>()

const techSearch = ref<string>("")

const {searchTechs} = useTechStore()
const {fetchTechs} = useTechStore()

const filteredTechs: ComputedRef<Tech[]> = computed(() => {
  if (!techSearch.value) {
    return useTechStore().techs.filter(t => !projectItem.hasTech(t)).slice(0, 10)
  }

  return searchTechs(techSearch.value).filter(t => !projectItem.hasTech(t))
})

const onClickToggleTech = (tech: Tech) => {
  if (projectItem.hasTech(tech)) {
    projectItem.techs = projectItem.techs.filter(_ => _.id !== tech.id)
  } else {
    projectItem.techs.push(tech)
  }
}
</script>

<style>
.tech-list {
  list-style: none;
  padding: 0;
}
</style>
