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
    <div class="card p-2" v-for="tItem in timelineItems">
      {{tItem.title}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useTimelineStore} from "@stores/timelineStore";
import {useTimelineTopicStore} from "@stores/timelineTopicStore";
import {reactive} from "vue";
import {TimelineItem} from "@data/models/TimelineItem";
import TimelineItemForm from "@components/TimelineItemForm.vue";
import {storeToRefs} from "pinia";

const {fetchTimelineItems, createTimelineItem} = useTimelineStore()
const {fetchTimelineTopics} = useTimelineTopicStore()
const {timelineItems} = storeToRefs(useTimelineStore())


const timelineItemCreate = reactive<TimelineItem>(new TimelineItem())

const onSubmitCreateTimelineItem = async (t: TimelineItem) => {
  await t.create()
  await fetchTimelineItems()
}

fetchTimelineTopics()
fetchTimelineItems()

</script>

<style scoped>

</style>