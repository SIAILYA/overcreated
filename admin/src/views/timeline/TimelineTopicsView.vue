<template>
  <div class="d-flex mb-3 mt-4 mt-md-0">
    <h4 class="my-auto">Timeline Topics</h4>
  </div>

  <timeline-topic-form
      :timeline-topic-item="timelineTopicCreate"
      @create="onCreateTimelineTopic"
  />

  <hr>

  <div class="row">
    <div v-for="topic in timelineTopics"
         class="col-6 col-md-4 col-lg-3 mt-3"
    >
      <div
          :style="{color: topic.color}"
          class="card pt-2 px-2 pb-1 text-center"
      >
        <h5>{{ topic.title }}</h5>

        <button
            :style="{background: topic.color}"
            class="btn text-white"
            @click="onClickEditTimelineTopic(topic)"
        >
          Edit
        </button>
      </div>
    </div>
  </div>

  <modal-window :show="showTimelineTopicEditWindow" @close="onCLoseEditTimelineTopic">
    <timeline-topic-form
        :timeline-topic-item="timelineTopicEdit"
        is-delete
        @delete="onDeleteEditTimelineTopic"
        @create="onSaveEditTimelineTopic"
    >
      <template #create>
        Save
      </template>
    </timeline-topic-form>
  </modal-window>
</template>

<script lang="ts" setup>
import TimelineTopicForm from "@components/TimelineTopicForm.vue";
import {reactive, ref} from "vue";
import {TimelineTopic} from "@data/models/TimelineTopic";
import {useTimelineTopicStore} from "@stores/timelineTopicStore";
import {storeToRefs} from "pinia";
import ModalWindow from "@components/ModalWindow.vue";
import {useConfirm} from "@/utils/useConfirm";

const showTimelineTopicEditWindow = ref(false)

const timelineTopicCreate = reactive<TimelineTopic>(new TimelineTopic())
const timelineTopicEdit = ref<TimelineTopic | null>(null)
const {createTimelineTopic, fetchTimelineTopics} = useTimelineTopicStore()
const {timelineTopics} = storeToRefs(useTimelineTopicStore())

const onCreateTimelineTopic = () => {
  createTimelineTopic(timelineTopicCreate)
  timelineTopicCreate.clear()
}

const onCLoseEditTimelineTopic = () => {
  showTimelineTopicEditWindow.value = false
  timelineTopicEdit.value = null
}

const onClickEditTimelineTopic = (t: TimelineTopic) => {
  timelineTopicEdit.value = t
  showTimelineTopicEditWindow.value = true
}

const onSaveEditTimelineTopic = async (t: TimelineTopic) => {
  await t.update()
  await fetchTimelineTopics()
  showTimelineTopicEditWindow.value = false
}

const onDeleteEditTimelineTopic = async (t: TimelineTopic) => {
  await useConfirm(`Are you sure that want to delete topic ${t.title}?`).then(async () => {
    await TimelineTopic.$api.delete(t.id)
    await fetchTimelineTopics()
    showTimelineTopicEditWindow.value = false
  })
}

fetchTimelineTopics()
</script>

<style lang="scss" scoped>
.timeline-topic-card {
}
</style>