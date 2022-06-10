<template>
  <div class="row">
    <div class="col-12 col-md-6">
      <h5>Категории</h5>

      <div class="d-flex flex-column mb-5">
        <input v-model="createTopic.title" class="ovc-input w-100" placeholder="Название" type="text">
        <input v-model="createTopic.color" class="ovc-input w-100 mt-2" placeholder="Название" type="color">
        <button class="ovc-btn mt-3" @click="onClickCreateTopic">
          Добавить категорию
        </button>
      </div>

      <div v-for="topic in topics">
        <div class="d-flex justify-content-between">
          <ovc-topic :color="topic.color" is-selected>
            {{ topic.title }}
          </ovc-topic>
          <button class="ovc-btn bg-danger d-flex" @click="onClickDeleteTopic(topic)">
            <span class="material-icons-round m-auto">delete</span>
          </button>
        </div>
        <hr>
      </div>
    </div>

    <div class="col-12 col-md-6">
      <h5>События</h5>

      <div class="d-flex flex-column mb-5">
        <input v-model="createEvent.title" class="ovc-input w-100" placeholder="Название" type="text">
        <select v-model="createEvent.topic" class="ovc-input mt-2">
          <option disabled selected>Категория</option>
          <option v-for="topic in topics" :value="topic.id">{{ topic.title }}</option>
        </select>
        <input v-model="createEvent.date" class="ovc-input w-100 mt-2" type="date">
        <input v-model="createEvent.dateString" class="ovc-input w-100 mt-2" placeholder="Октябрь'18 - Май'21" type="text">
        <textarea v-model="createEvent.description" class="ovc-input mt-2" placeholder="Описание"></textarea>

        <div v-if="topics.length" class="mt-3">
          <div class="d-flex justify-content-between">
            <div>
              <h6>{{ createEvent.title }}</h6>
              <p class="mb-0" v-html="createEvent.description"></p>
            </div>
          </div>
        </div>

        <button class="ovc-btn mt-3" @click="onClickCreateEvent">
          Добавить событие
        </button>
      </div>

      <div class="d-flex flex-column mt-5">
        <div v-for="event in events">
          <div class="d-flex justify-content-between">
            <div>
              <h6>{{ event.title }} ({{topics.find(t => t.id === event.topic).title}}) - {{new Date(event.date).toLocaleDateString()}}</h6>
              <p class="mb-0" v-html="event.description"></p>
              <span class="mt-2">{{event.dateString}}</span>
            </div>

            <button class="ovc-btn bg-danger d-flex my-auto" @click="onClickDeleteEvent(event)">
              <span class="material-icons-round m-auto">delete</span>
            </button>
          </div>
          <hr>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, Ref, ref} from "vue";
import axios from "axios";
import {BACK_API} from "../../../config";
import {TimelineEvent} from "../../typings/timelineEvent";
import {TimelineTopic, timelineTopicAPI} from "../../typings/timelineTopic";
import OvcTopic from "../../components/OvcTopic.vue";

const topics: Ref<Array<TimelineTopic>> = ref([])
const events: Ref<Array<TimelineEvent>> = ref([])

const createTopic = reactive(new TimelineTopic())
const createEvent = reactive(new TimelineEvent())

const loadTopics = () => {
  axios.get(BACK_API + timelineTopicAPI.path + timelineTopicAPI.getPath).then(r => {
    topics.value = r.data.map((t: any) => new TimelineTopic(t))
  })
}

const loadEvents = () => {
  axios.get(BACK_API + "timeline/event/get").then(r => {
    events.value = r.data.map((t: any) => new TimelineEvent(t))
  })
}

const onClickCreateTopic = () => {
  createTopic.create().then(() => {
    loadTopics()
    createTopic.title = ""
    createTopic.color = "#FFFFFF"
  })
}

const onClickCreateEvent = () => {
  createEvent.create().then(() => {
    loadEvents()
    createEvent.title = ""
    createEvent.description = ""
    createEvent.dateString = ""
    createEvent.date = new Date()
    createEvent.topic = ""
  })
}

const onClickDeleteTopic = (topic: TimelineTopic) => {
  topic.delete().then(loadTopics)
}

const onClickDeleteEvent = (event: TimelineEvent) => {
  event.delete().then(loadEvents)
}

onMounted(() => {
  loadTopics()
  loadEvents()
})
</script>

<style scoped>

</style>
