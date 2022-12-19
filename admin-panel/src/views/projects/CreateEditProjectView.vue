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
        <div v-for="pt in projectTopics" :class="pt.isVisible ? '' : 'opacity-50'" class="d-flex">
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
          v-if="projectItem.id"
          :project-item="projectItem"
          @update="onClickUpdateProject"
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
import {computed, onMounted, reactive, Ref} from "vue";

import ProjectTechsBar from "../../components/ProjectTechsBar.vue";
import ProjectPicturesBar from "../../components/ProjectPicturesBar.vue";

import {useRoute, useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import {marked} from 'marked';

import {Project} from "../../data/models/Project";
import {useTechStore} from "../../stores/techStore";
import {useProjectTopicStore} from "../../stores/projectTopicStore";
import {ProjectTopic} from "../../data/models/ProjectTopic";
import {useProjectsStore} from "../../stores/projectsStore";
import {useMessage} from "../../utils/useMessage";
import {transliterate} from "../../utils/utils";
import {useConfirm} from "../../utils/useConfirm";


const route = useRoute()
const router = useRouter()
const message = useMessage()

const {createProject, fetchProjects} = useProjectsStore()
const {projectTopics}: { projectTopics: Ref<ProjectTopic[]> } = storeToRefs(useProjectTopicStore())
const {fetchTechs} = useTechStore()
const {fetchProjectTopics} = useProjectTopicStore()

const editMode = computed<boolean>(() => route.path.includes("edit"))
const projectItem = reactive<Project>(new Project())


const isValid = computed(() => {
//  TODO: валидация
  return true
})

const descriptionPreview = computed(() => {
  return marked(projectItem.fullDescription || "")
})

const onTitleInput = (ev: any) => {
  if (!editMode.value) {
    projectItem.slug = transliterate(ev.target.value.toLowerCase().replace(/( |-|\/\\)/g, "_"))
  }
}

const onClickCreateProject = async () => {
  if (isValid.value) {
    const createdProject = await createProject(projectItem)
    message.success("Project created")
    await router.replace("/projects/edit/" + createdProject.id)
  }
}

const onClickUpdateProject = async () => {
  if (isValid.value) {
    projectItem.update().then(() => {
      message.success("Project updated")
    }).catch(() => {
      message.danger("Project update error")
    }).finally(() => {
      fetchProjects()
    })
  }
}

const onClickDelete = async () => {
  useConfirm("Delete project?")
      .then(async () => {
        await projectItem.delete()
        message.danger("Project deleted")
        await router.push("/projects")
      })
}

const onClickToggleTopic = (pt: ProjectTopic) => {
  if (projectItem.hasTopic(pt)) {
    projectItem.topics = projectItem.topics.filter(t => t.id !== pt.id)
  } else {
    projectItem.topics.push(pt)
  }
}

const fetchCurrentProject = async () => {
  if (editMode.value) {
    projectItem.id = route.params.id as string
    projectItem.load().catch(() => {
      message.danger("Project not found")
      router.push("/projects")
    })
  }
}

onMounted(() => {
  if (editMode.value) {
    fetchCurrentProject()
  }
})

fetchTechs()
fetchProjectTopics()
</script>
