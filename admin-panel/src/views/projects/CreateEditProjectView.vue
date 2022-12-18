<template>
  <div class="d-flex mb-3">
    <router-link class="btn btn-primary" to="/projects">
      Back
    </router-link>

    <h4 class="my-auto ms-2">{{ editMode ? "Edit" : "Add new" }} project</h4>
  </div>

  <div class="row">
    <div class="b-col-12 col-md-6">
      <input
          v-model="projectItem.title"
          class="form-control w-100"
          placeholder="Title"
          type="text"

          @input="onTitleInput"
      >
      <input
          v-model="projectItem.description"
          class="form-control w-100 mt-2"
          placeholder="Description"
          type="text">
      <input
          v-model="projectItem.link"
          class="form-control w-100 mt-2"
          placeholder="Demo link"
          type="text"
      >
      <input
          v-model="projectItem.github"
          class="form-control w-100 mt-2"
          placeholder="Github"
          type="text"
      >
    </div>
    <div class="b-col-12 col-md-6 mt-2 mt-md-0">
      <input
          v-model="projectItem.slug"
          class="form-control w-100"
          placeholder="Slug"
          type="text"
      >
      <input
          v-model="projectItem.color"
          class="form-control form-control-color w-100 mt-2"
          placeholder="Color"
          type="color"
      >
      <input
          v-model="projectItem.developTime"
          class="form-control w-100 mt-2"
          placeholder="Develop time"
          type="number"
      >
      <input
          v-model="projectItem.behance"
          class="form-control w-100 mt-2"
          placeholder="Behance"
          type="text"
      >
    </div>

    <div class="col-12 mt-3">
      <h5>Full description</h5>
      <textarea v-model="projectItem.fullDescription" class="form-control w-100" rows="8"></textarea>

      <hr>
      <div class="fd-preview" v-html="descriptionPreview"></div>
      <hr>
    </div>

    <div class="col-12 col-md-6 mt-3">
      <h5>Project topics</h5>

      <div class="d-flex flex-column">
        <div v-for="pt in projectTopics" class="d-flex">
          <input
              :id="pt.id" :checked="projectItem.hasTopic(pt)"
              class="form-check-input my-auto"
              type="checkbox"
              @input="() => onClickToggleTopic(pt)"
          >
          <label :for="pt.id" class="form-check-label my-auto ms-2">{{ pt.title }}</label>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6 mt-3">
      <project-techs-bar
          :project-item="projectItem"
      />

      <hr>

      <project-pictures-bar
          :project-item="projectItem"
      />
    </div>
  </div>

  <div class="d-flex form-check">
    <input
        id="visible"
        v-model="projectItem.isVisible"
        class="my-auto form-check-input"
        type="checkbox"
    >
    <label class="ms-1 my-auto form-check-label" for="visible">
      Отображать проект
    </label>
  </div>

  <div class="d-flex">
    <button
        v-if="!editMode"
        :disabled="!isValid"
        class="btn btn-success d-flex mt-4 mb-5"
        @click="onClickCreateProject"
    >
      Create project
    </button>

    <button
        v-else
        :disabled="!isValid"
        class="btn btn-success d-flex mt-4 mb-5"
        @click="onClickUpdateProject"
    >
      Update project
    </button>

    <button
        v-if="editMode"
        :disabled="!isValid"
        class="btn btn-danger ms-3 ovc-btn d-flex mt-4 mb-5"
        @click="onClickDelete"
    >
      Delete project
    </button>
  </div>
</template>

<script lang="ts" setup>
import {computed, onMounted, reactive} from "vue";

import ProjectTechsBar from "../../components/ProjectTechsBar.vue";
import ProjectPicturesBar from "../../components/ProjectPicturesBar.vue";

import {useRoute} from "vue-router";
import {storeToRefs} from "pinia";
import {marked} from 'marked';

import {Project} from "../../data/models/Project";
import {useTechStore} from "../../stores/techStore";
import {useProjectTopicStore} from "../../stores/projectTopicStore";
import {ProjectTopic} from "../../data/models/ProjectTopic";
import {useProjectsStore} from "../../stores/projectsStore";


const route = useRoute()

const {createProject} = useProjectsStore()
const {projectTopics} = storeToRefs(useProjectTopicStore())
const {fetchTechs} = useTechStore()
const {fetchProjectTopics} = useProjectTopicStore()

const editMode = route.path.includes("edit")

const projectItem = reactive<Project>(new Project())

const isValid = computed(() => {
  return true
})

const descriptionPreview = computed(() => {
  return marked(projectItem.fullDescription || "")
})

const onTitleInput = (ev: any) => {
}

const onClickCreateProject = async () => {
  if (isValid.value) {
    await createProject(projectItem)
  }
}

const onClickUpdateProject = async () => {
  if (isValid.value) {
    await projectItem.update()
  }
}

const onClickDelete = () => {
}

const onClickToggleTopic = (pt: ProjectTopic) => {
  if (projectItem.hasTopic(pt)) {
    projectItem.topics = projectItem.topics.filter(t => t.id !== pt.id)
  } else {
    projectItem.topics.push(pt)
  }
}

const fetchCurrentProject = async () => {
  if (editMode) {
    projectItem.id = route.params.id as string
    await projectItem.load()
  }
}

onMounted(() => {
  if (editMode) {
    fetchCurrentProject()
  }
})

fetchTechs()
fetchProjectTopics()
</script>

<style lang="scss" scoped>
.upload-btn {
  cursor: pointer;
}

.picture {
  &:hover {
    .remove-pic {
      height: 36px;
    }
  }

  &:not(:hover) {
    .remove-pic {
      padding: 0;
    }
  }
}

.remove-pic {
  font-size: 12px !important;
  height: 0;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}


</style>
