<template>
  <div class="d-flex mb-3">
    <router-link class="btn btn-primary" to="/projects">
      Back
    </router-link>

    <h4 class="my-auto ms-2">{{ editMode ? "Edit" : "Add new" }} project</h4>
  </div>

  <div class="row">
    <div class="b-col-12 col-md-6">
      <input v-model="projectItem.title" class="form-control w-100" placeholder="Title" type="text"
             @input="onTitleInput">
      <input v-model="projectItem.description" class="form-control w-100 mt-2" placeholder="Description"
             type="text">
      <input v-model="projectItem.link" class="form-control w-100 mt-2" placeholder="Demo link" type="text">
      <input v-model="projectItem.github" class="form-control w-100 mt-2" placeholder="Github" type="text">
    </div>
    <div class="b-col-12 col-md-6 mt-2 mt-md-0">
      <input v-model="projectItem.slug" class="form-control w-100" placeholder="Slug" type="text">
      <input v-model="projectItem.color" class="form-control form-control-color w-100 mt-2" placeholder="Color"
             type="color">
      <input v-model="projectItem.developTime" class="form-control w-100 mt-2" placeholder="Develop time" type="number">
      <input v-model="projectItem.behance" class="form-control w-100 mt-2" placeholder="Behance" type="text">
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
        <div v-for="t in topics" class="d-flex">
          <input :id="t.id" :checked="projectItem.topics && projectItem.topics.includes(t.id)" class="my-auto"
                 type="checkbox"
                 @input="() => onClickToggleTopic(t.id)">
          <label :for="t.id" class="my-auto ms-2">{{ t.title }}</label>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6 mt-3">
      <h5>Project techs</h5>

      <div class="d-flex">
        <input v-model="addTech" class="form-control w-100" placeholder="Название технологии" type="text">
        <button :disabled="!addTech" class="btn btn-success d-flex ms-2" @click="onClickAddTech">
          <span class="material-icons-round m-auto">playlist_add</span>
        </button>
      </div>

      <div class="d-flex flex-column mt-2">
        <div
            v-for="(tech, index) in projectItem.techs"
            :class="index !== (projectItem.techs.length - 1) && 'border-bottom border-1 border-dark'"
            class="tech d-flex justify-content-end py-2"
        >
          <span class="my-auto">{{ tech }}</span>
          <button class="ovc-btn bg-danger d-flex ms-2" @click="onClickRemoveTech(tech)">
            <span class="material-icons-round m-auto">delete</span>
          </button>
        </div>
      </div>

      <h5 class="mt-4">Pictures</h5>
      <div class="d-flex">
        <input id="pictures_upload" ref="picturesUpload" accept="image/*" class="d-none" multiple="multiple" type="file"
               @input="onPictureSelected"/>

        <label class="upload-btn btn btn-success d-flex w-100" for="pictures_upload">
          <span class="mx-auto">Загрузить картинку</span>
        </label>
      </div>

      <div class="row mt-3">
        <div v-for="(pic, i) in projectItem.pictures" class="col-6 mt-2">
          <a :href="BACKEND + '/' + pic" class="d-block position-relative picture" target="_blank">
            <img :src="BACKEND + '/' + pic" alt="" class="w-100">

            <button class="btn btn-danger remove-pic bg-danger" @click.prevent="removePicture(i)">
              Удалить
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex form-check">
    <input id="visible" v-model="projectItem.isVisible" class="my-auto form-check-input" type="checkbox">
    <label class="ms-1 my-auto form-check-label" for="visible">Отображать проект</label>
  </div>

  <div class="d-flex">
    <button :disabled="!isValid" class="btn btn-success d-flex mt-4 mb-5" @click="onClickSubmit">
      <span class="material-icons-round my-auto">save</span>
      <span class="my-auto ms-2">Сохранить проект</span>
    </button>

    <button v-if="editMode" :disabled="!isValid" class="btn btn-danger ms-3 ovc-btn d-flex mt-4 mb-5"
            @click="onClickDelete">
      <span class="material-icons-round my-auto">remove</span>
      <span class="my-auto ms-2">Удалить проект</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref} from "vue";

import {useRoute} from "vue-router";
import {Project} from "../../data/models/Project";

import {marked} from 'marked';

const route = useRoute()
const editMode = route.path.includes("edit")

const projectItem = ref<Project>(new Project())
const picturesUpload = ref<HTMLInputElement>()
const addTech = ref<string>("")
const topics = ref<any[]>([])

const isValid = computed(() => {
})

const descriptionPreview = computed(() => {
  console.log(123)
  return marked(projectItem.value.fullDescription || "")
})

const onTitleInput = (ev: any) => {
}

const onClickAddTech = () => {
}

const onClickRemoveTech = (tech: string) => {

}

const onPictureSelected = () => {
  const data = new FormData()
  console.log(typeof picturesUpload.value)

  if (picturesUpload.value?.files?.length) {
    console.log(Array.from(picturesUpload.value.files))
  }
}

const removePicture = (index: number) => {
}

const onClickSubmit = () => {
}

const onClickDelete = () => {
}

const onClickToggleTopic = (topicId: string) => {

}

onMounted(() => {
  if (editMode) {
  } else {
    projectItem.value = new Project()
  }
})
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
