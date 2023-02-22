<template>
  <div class="row">
    <div class="col-12 col-md-4 mt-2">
      <input class="form-control" placeholder="Title" type="text" v-model="timelineItem.title">
    </div>
    <div class="col-12 col-md-4 mt-2">
      <input class="form-control" placeholder="Date" type="date" v-model="timelineItemDate">
    </div>
    <div class="col-12 col-md-4 mt-2">
      <select
          :style="{color: timelineItem?.topic?.color}"
          class="form-control form-select"
          @change="e => onSelectTopic(e?.currentTarget?.value)"
      >
        <option :value="undefined">None</option>
        <option v-for="topic in timelineTopics" :value="topic.id">{{ topic.title }}</option>
      </select>
    </div>
    <div class="col-12 col-md-8 mt-2">
      <input v-model="timelineItem.readable_date" class="form-control w-100" placeholder="Readable date" type="text">
    </div>
    <div class="col-12 col-md-4 mt-2">
      <button class="btn btn-success w-100" :disabled="!timelineItem.validate()" @click="emit('create', timelineItem)">
        <slot name="create">
          Create
        </slot>
      </button>
    </div>

    <div class="col-12 mt-3">
      <label class="form-label" for="description">
        Description
        <eye-icon @click="showDescription = !showDescription"/>
      </label>

      <div v-if="showDescription">
        <textarea id="description" class="form-control" rows="1" v-model="timelineItem.description"></textarea>

        <label class="form-label mt-1" for="description">Description preview</label>
        <div class="card d-block mt-1 p-2" v-html="timelineItem.description">
        </div>
      </div>
    </div>

    <div class="col-12 mt-3">
      <label class="form-label" for="add_description">
        Additional description
        <eye-icon @click="showAddDescription = !showAddDescription"/>
      </label>

      <div v-if="showAddDescription">
        <textarea id="add_description" class="form-control" rows="3" v-model="timelineItem.addition_description"></textarea>

        <label class="form-label mt-1" for="add_description">Additional description preview</label>
        <div class="card mt-1 p-2" v-html="marked(timelineItem.addition_description || '')">
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {TimelineItem} from "@data/models/TimelineItem";
import {storeToRefs} from "pinia";
import {useTimelineTopicStore} from "@stores/timelineTopicStore";
import EyeIcon from "@components/EyeIcon.vue";
import {TimelineTopic} from "@data/models/TimelineTopic";
import {computed, ref} from "vue"
import {getReadableDate} from "@/utils/utils";
import {marked} from "marked";

interface Props {
  timelineItem: TimelineItem
}

const emit = defineEmits(['create'])
const props = defineProps<Props>()

const {timelineTopics} = storeToRefs(useTimelineTopicStore())

const showDescription = ref(false)
const showAddDescription = ref(false)


const timelineItemDate = computed({
  get() {
    return props.timelineItem.date?.toISOString()?.split('T')?.[0]
  },
  set(v) {
    props.timelineItem.date = new Date(v)
    props.timelineItem.readable_date = getReadableDate(props.timelineItem.date)
  }
})
const onSelectTopic = async (topicId: string) => {
  if (!topicId) {
    return
  }

  if (!props.timelineItem.topic) {
    props.timelineItem.topic = new TimelineTopic(topicId)
  } else {
    props.timelineItem.topic.id = topicId
  }

  await props.timelineItem.topic.load()
}
</script>

<style scoped>

</style>