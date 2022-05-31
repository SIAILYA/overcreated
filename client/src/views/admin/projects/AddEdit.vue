<template>
  <h3>{{ editMode ? "Изменить" : "Добавить" }} проект</h3>

  <div class="row">
    <div class="b-col-12 col-md-6">
      <input v-model="project.title" class="ovc-input w-100" placeholder="Название проекта" type="text"
             @input="onTitleInput">
      <input v-model="project.description" class="ovc-input w-100 mt-2" placeholder="Краткое описание" type="text">
      <input v-model="project.link" class="ovc-input w-100 mt-2" placeholder="Ссылка на демо" type="text">
      <input v-model="project.github" class="ovc-input w-100 mt-2" placeholder="Github" type="text">
    </div>
    <div class="b-col-12 col-md-6 mt-2 mt-md-0">
      <input v-model="project.slug" class="ovc-input w-100" placeholder="Slug" type="text">
      <input v-model="project.color" class="ovc-input w-100 mt-2" placeholder="Цвет" type="color">
      <input v-model="project.developTime" class="ovc-input w-100 mt-2" placeholder="Время на разработку" type="number">
      <input v-model="project.behance" class="ovc-input w-100 mt-2" placeholder="Behance" type="text">
    </div>
    <div class="col-12 mt-3">
      <h5>Описание проекта</h5>
      <textarea v-model="project.fullDescription" class="ovc-input w-100" rows="8"></textarea>
      <div class="fd-preview" v-html="descriptionPreview"></div>
    </div>
    <div class="col-12 col-md-6 mt-3">
      <h5>Топики проекта</h5>

      <div class="d-flex fex-column">
        <div class="d-flex">
          <input id="c1" class="my-auto" type="checkbox">
          <label class="my-auto ms-2" for="c1">Фронтенд</label>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 mt-3">
      <h5>Технологии проекта</h5>
      <div class="d-flex">
        <input v-model="addTech" class="ovc-input w-100" placeholder="Название технологии" type="text">
        <button :disabled="!addTech" class="ovc-btn d-flex ms-2" @click="onClickAddTech">
          <span class="material-icons-round m-auto">playlist_add</span>
        </button>
      </div>

      <div class="d-flex flex-column mt-2">
        <div
            v-for="(tech, index) in project.techs.reverse()"
            :class="index !== (project.techs.length - 1) && 'border-bottom border-1 border-dark'"
            class="tech d-flex justify-content-end py-2"
        >
          <span class="my-auto">{{ tech }}</span>
          <button class="ovc-btn bg-danger d-flex ms-2" @click="onClickRemoveTech(tech)">
            <span class="material-icons-round m-auto">delete</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex">
    <button :disabled="!isValid" class="ovc-btn d-flex mt-4 mb-5" @click="onClickSubmit">
      <span class="material-icons-round my-auto">save</span>
      <span class="my-auto ms-2">Сохранить проект</span>
    </button>
    <button v-if="editMode" :disabled="!isValid" class="bg-danger ms-3 ovc-btn d-flex mt-4 mb-5" @click="onClickDelete">
      <span class="material-icons-round my-auto">remove</span>
      <span class="my-auto ms-2">Удалить проект</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {Project} from "../../../typings/project";
import {computed, onMounted, reactive, ref} from "vue";

//@ts-ignore
import {marked} from 'marked';
//@ts-ignore
import {transliterate} from "@/utils/transliterate.js";
import router from "../../../router";

const route = useRoute()
const editMode = route.path.includes("edit")

const project = reactive(new Project())

const addTech = ref("")

const slug = computed({
  get: () => project.slug,
  set: (v: string) => project.slug = v.replace("/", "")
})

const isValid = computed(() => {
  return project.title && project.description && project.slug && project.color
})

const descriptionPreview = computed(() => {
  return marked(project.fullDescription || "")
})

const onTitleInput = (ev: any) => {
  project.slug = transliterate(ev?.target?.value).toLowerCase()
}

const onClickAddTech = () => {
  project.techs?.push(addTech.value)
  addTech.value = ""
}

const onClickRemoveTech = (tech: string) => {
  project.techs = project.techs?.filter(t => t !== tech)
}

const onClickSubmit = () => {
  if (editMode) {
    project.update().then(() => {
      router.push("/admin/projects/list")
    })
  } else {
    project.create().then(() => {
      router.push("/admin/projects/list")
    })
  }
}

const onClickDelete = () => {
  project.delete().then(() => {
    router.push("/admin/projects/list")
  })
}

onMounted(() => {
  if (editMode) {
    project.id = route.params.id.toString()
    project.load()
  }
})
</script>

<style scoped>

</style>
