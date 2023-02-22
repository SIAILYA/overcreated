<template>
  <div class="d-flex mb-3 mt-4 mt-md-0">
    <h4 class="my-auto">Timeline</h4>
  </div>

  <timeline-item-form
      :timeline-item="timelineItemCreate"
      @create="onSubmitCreateTimelineItem"
  />

  <hr>

  <div>
    <div class="card p-2 mt-3" v-for="tItem in timelineItems" :key="tItem.id">
      <h5>{{tItem.title}}</h5>
      <h6>{{tItem.readable_date}} <i>({{tItem.date.toDateString()}})</i></h6>
      <p v-html="tItem.description"></p>

      <div class="d-flex">
        <button disabled class="btn text-white btn-sm" :style="{background: tItem.topic.color, width: 'fit-content'}">
          {{tItem.topic.title}}
        </button>

        <button class="btn btn-warning ms-auto" @click="onClickEditTimelineItem(tItem)">
          Edit
        </button>
      </div>
    </div>
  </div>

  <modal-window :show="showEditTimelineItemWindow" @close="onCloseEditTimelineItemWindow">
    <timeline-item-form
        is-delete
        :timeline-item="timelineItemEdit"
        @create="onSaveTimelineItemEdit"
        @delete="onDeleteTimelineItemEdit"
    >
      <template #create>
        Save
      </template>
    </timeline-item-form>
  </modal-window>
</template>

<script lang="ts" setup>
import {useTimelineStore} from "@stores/timelineStore";
import {useTimelineTopicStore} from "@stores/timelineTopicStore";
import {reactive, ref} from "vue";
import {TimelineItem} from "@data/models/TimelineItem";
import TimelineItemForm from "@components/TimelineItemForm.vue";
import {storeToRefs} from "pinia";
import ModalWindow from "@components/ModalWindow.vue"
import {useConfirm} from "@/utils/useConfirm";

const {fetchTimelineItems} = useTimelineStore()
const {fetchTimelineTopics} = useTimelineTopicStore()
const {timelineItems} = storeToRefs(useTimelineStore())


const timelineItemCreate = reactive<TimelineItem>(new TimelineItem())
const timelineItemEdit = ref<TimelineItem | null>(null)
const showEditTimelineItemWindow = ref(false)

const onSubmitCreateTimelineItem = async (t: TimelineItem) => {
  await t.create()
  await fetchTimelineItems()
}

const onClickEditTimelineItem = async (t: TimelineItem) => {
  showEditTimelineItemWindow.value = true
  timelineItemEdit.value = t
}

const onCloseEditTimelineItemWindow = () => {
  showEditTimelineItemWindow.value = false
  timelineItemEdit.value = null
}

const onSaveTimelineItemEdit = async (t: TimelineItem) => {
  await t.update()
  await fetchTimelineItems()
}

const onDeleteTimelineItemEdit = (t: TimelineItem) => {
  useConfirm(`Delete ${t.title}?`)
      .then(async () => {
        await t.delete()
        await fetchTimelineItems()
        onCloseEditTimelineItemWindow()
      })
}

fetchTimelineTopics()
fetchTimelineItems()
</script>

<style scoped>

</style>