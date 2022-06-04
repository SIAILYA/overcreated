<template>
  <section class="container mt-3 pb-5">
    <h3 class="text-center">Мой таймлайн</h3>
    <article class="text-center">
      Разные события из моей жизни и профессиональной деятельности
    </article>

    <transition :duration="300" name="fade">
      <div class="mt-4 mt-3 mt-md-4 mt-lg-5 d-flex justify-content-center flex-wrap" v-if="topics.length">
        <ovc-topic
            v-for="topic in topics"
            :key="topic.id"
            :color="topic.color"
            :is-selected="topic.isSelected"
            class="mx-1 mt-2"
            @click="onClickTopicSelect(topic)"
        >
          {{ topic.title }}
        </ovc-topic>
      </div>
    </transition>

    <transition :duration="300" name="fade">
      <div v-if="filteredEvents.length" class="mt-4 mt-lg-5">
        <transition-group :duration="300" appear class="row child-view projects-list position-relative"
                          name="projects-list" tag="div">
          <ovc-timeline-event
              v-for="(event, index) in filteredEvents"
              :key="event.id"
              :caption="event.description"
              :color="getTopicColorById(event.topic)"
              :dates="event.dateString"
              :line-top="index !== 0"
              :title="event.title"
              class="timeline-event"
          />
        </transition-group>
        <ovc-timeline-event
            big-line
            caption="Всем привет!"
            color="rgb(77, 130, 255)"
            dashed
            dates="Февраль'02"
            line-top
            title="Я родился!"
        />
      </div>
    </transition>
  </section>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref, Ref} from "vue";
import {TimelineTopic, timelineTopicAPI} from "../typings/timelineTopic";
import {TimelineEvent} from "../typings/timelineEvent";
import axios from "axios";
import {BACK_API} from "../../config";
import OvcTimelineEvent from "../components/OvcTimelineEvent.vue";
import OvcTopic from "../components/OvcTopic.vue";

const topics: Ref<Array<TimelineTopic>> = ref([])
const events: Ref<Array<TimelineEvent>> = ref([])

const selectedTopicsIds = computed(() => {
  return topics.value.filter(t => t.isSelected).map(t => t.id)
})

const filteredEvents = computed(() => {
  return events.value.filter(event => {
    return selectedTopicsIds.value.includes(event.topic)
  })
})

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

const getTopicColorById = (topicId: string) => {
  return topics.value.find(topic => topic.id === topicId)?.color
}

const onClickTopicSelect = (topic: TimelineTopic) => {
  if (topic.isSelected) {
    if (selectedTopicsIds.value.length !== 1) {
      topic.isSelected = !topic.isSelected
    }
  } else {
    topic.isSelected = true
  }
}

onMounted(() => {
  loadTopics()
  loadEvents()
})
</script>

<style lang="scss">
.timeline-event {
  transition: all .5s ease, color 0s ease;

  .timeline-event-card {
    transition: all .5s ease, color 0s ease;
  }
}
</style>
