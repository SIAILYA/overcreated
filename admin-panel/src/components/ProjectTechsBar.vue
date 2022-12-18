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
  <input v-model="techSearch" class="form-control w-100 mb-2" placeholder="Search techs" type="text">

  <ul v-if="techSearch" class="tech-list">
    <li v-for="t in filteredTechs">
      <tech-item
          :key="t.id"
          :selected="projectItem.hasTopic(t)"
          :tech-item="t"
          @update:selected="onClickToggleTech(t)"
      />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import {Project} from "../data/models/Project";
import {useTechStore} from "../stores/techStore";
import {computed, ref} from "vue";
import TechItem from "./TechItem.vue";
import {Tech} from "../data/models/Tech";

interface Props {
  projectItem: Project
}

const {projectItem} = defineProps<Props>()

const techSearch = ref<string>("")

const {searchTechs} = useTechStore()
const {techs} = useTechStore()

const filteredTechs = computed(() => {
  return searchTechs(techSearch.value).filter(t => !projectItem.techs.includes(t))
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
