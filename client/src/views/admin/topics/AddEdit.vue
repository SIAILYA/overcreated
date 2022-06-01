<template>
  <h3>{{ editMode ? "Изменить" : "Добавить" }} топик</h3>

  <div class="row">
    <div class="b-col-12 col-md-6">
      <input v-model="topic.title" class="ovc-input w-100" placeholder="Название топика" type="text"
             @input="onTitleInput">
    </div>
    <div class="b-col-12 col-md-6 mt-2 mt-md-0">
      <input v-model="topic.slug" class="ovc-input w-100" placeholder="Slug" type="text">
      <input v-model="topic.color" class="ovc-input w-100 mt-2" placeholder="Цвет" type="color">
    </div>
  </div>

  <br>
  <div class="d-flex">
    <ovc-topic :topic="topic" is-selected/>
  </div>
  <br>

  <div class="d-flex">
    <input type="checkbox" id="visible" class="my-auto" v-model="topic.isVisible">
    <label for="visible" class="ms-1 my-auto">Отображать топик</label>
  </div>

  <div class="d-flex">
    <button :disabled="!isValid" class="ovc-btn d-flex mt-4 mb-5" @click="onClickSubmit">
      <span class="material-icons-round my-auto">save</span>
      <span class="my-auto ms-2">Сохранить топик</span>
    </button>
    <button v-if="editMode" :disabled="!isValid" class="bg-danger ms-3 ovc-btn d-flex mt-4 mb-5" @click="onClickDelete">
      <span class="material-icons-round my-auto">remove</span>
      <span class="my-auto ms-2">Удалить проект</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {computed, onMounted, reactive} from "vue";
import {Topic} from "../../../typings/topic";

//@ts-ignore
import {transliterate} from "@/utils/transliterate.js";
import router from "../../../router";
import OvcTopic from "../../../components/OvcTopic.vue";


const route = useRoute()
const editMode = route.path.includes("edit")

const topic = reactive(new Topic())

const isValid = computed(() => {
  return topic.title && topic.slug
})

const onTitleInput = (ev: any) => {
  topic.slug = transliterate(ev?.target?.value).toLowerCase()
}

const onClickSubmit = () => {
  if (editMode) {
    topic.update().then(() => {
      router.push("/admin/topics/list")
    }).catch(() => {router.push("/login")})
  } else {
    topic.create().then(() => {
      router.push("/admin/topics/list")
    }).catch(() => {router.push("/login")})
  }
}

const onClickDelete = () => {
  topic.delete().then(() => {
    router.push("/admin/topics/list")
  }).catch(() => {router.push("/login")})
}

onMounted(() => {
  if (editMode) {
    topic.id = route.params.id.toString()
    topic.load()
  }
})
</script>

<style scoped>

</style>
