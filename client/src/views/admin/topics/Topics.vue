<template>
  <router-link class="text-decoration-none d-inline-block" to="add">
    <button class="ovc-btn d-flex">
      <span class="material-icons-round me-2">playlist_add</span>
      <span>Создать топик</span>
    </button>
  </router-link>
  <br>
  <div class="d-flex mt-3">
    <ovc-spinner :show="isLoadingTopics" class="mx-auto"/>
  </div>
  <div class="d-flex mt-2 flex-wrap">
    <div v-for="t in topics" :key="t.id" class="me-3 mt-2">
      <router-link :to="'edit/' + t.id" class="text-decoration-none">
        <ovc-project-topic :topic="t" class="topic-pill" is-selected/>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref, Ref} from "vue";
import axios from "axios";
import {BACK_API} from "../../../../config";
import {Topic} from "../../../typings/topic";
import OvcSpinner from "../../../components/OvcSpinner.vue";
import OvcProjectTopic from "../../../components/OvcProjectTopic.vue";

const topics: Ref<Array<Topic>> = ref([])
const isLoadingTopics = ref(true)

onMounted(() => {
  axios.get(BACK_API + "topics/get?onlyVisible=false").then(r => {
    topics.value = r.data.map((p: Object) => {
      return new Topic(p);
    })

    isLoadingTopics.value = false
  })
})
</script>

<style scoped>

</style>
