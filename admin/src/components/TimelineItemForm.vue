<template>
  <div class="row">
    <div class="col-12 col-md-4 mt-2">
      <input v-model="timelineItemInst.title" class="form-control" placeholder="Title" type="text">
    </div>
    <div class="col-12 col-md-4 mt-2">
      <input v-model="timelineItemInstDate" class="form-control" placeholder="Date" type="date">
    </div>
    <div class="col-12 col-md-4 mt-2">
      <select
          :style="{color: timelineItemInst?.topic?.color}"
          class="form-control form-select"
          @change="e => onSelectTopic(e.target)"
          :value="timelineItemInst?.topic?.id"
      >
        <option :value="undefined">None</option>
        <option v-for="topic in timelineTopics" :value="topic.id">{{ topic.title }}</option>
      </select>
    </div>
    <div class="col-12 col-md-8 mt-2">
      <input v-model="timelineItemInst.readable_date" class="form-control w-100" placeholder="Readable date" type="text">
    </div>
    <div class="col-12 col-md-4 mt-2">
      <button :disabled="!timelineItemInst?.validate()" class="btn btn-success w-100" @click="emit('create', timelineItemInst)">
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
        <textarea id="description" v-model="timelineItemInst.description" class="form-control" rows="1"></textarea>

        <label class="form-label mt-1" for="description">Description preview</label>
        <div class="card d-block mt-1 p-2" v-html="timelineItemInst?.description">
        </div>
      </div>
    </div>

    <div class="col-12 mt-3">
      <label class="form-label" for="add_description">
        Additional description
        <eye-icon @click="showAddDescription = !showAddDescription"/>
      </label>

      <div v-if="showAddDescription">
        <textarea id="add_description" v-model="timelineItemInst.addition_description" class="form-control"
                  rows="3"></textarea>

        <label class="form-label mt-1" for="add_description">Additional description preview</label>
        <div class="card mt-1 p-2" v-html="marked(timelineItemInst?.addition_description || '')">
        </div>
      </div>
    </div>
  </div>

  <div v-if="isDelete" class="mt-3">
    <button class="btn btn-danger" @click="emit('delete', timelineItemInst)">
      Delete
    </button>
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
  timelineItemInst: TimelineItem
  isDelete?: boolean
}

const emit = defineEmits(['create', 'delete'])
const props = defineProps<Props>()

const {timelineTopics} = storeToRefs(useTimelineTopicStore())

const showDescription = ref(false)
const showAddDescription = ref(false)


const timelineItemInstDate = computed({
  get(): string {
    return props.timelineItemInst?.date?.toISOString()?.split('T')?.[0] || ''
  },
  set(v: string) {
    if (props.timelineItemInst) {
      props.timelineItemInst.date = new Date(v)
      props.timelineItemInst.readable_date = getReadableDate(props.timelineItemInst.date)
    }
  }
})
const onSelectTopic = async (topicIdTarget: EventTarget | null) => {
  const topicId = (topicIdTarget as HTMLInputElement)?.value
  if (!topicId || !props.timelineItemInst?.topic) {
    return
  }

  if (!props.timelineItemInst.topic) {
    props.timelineItemInst.topic = new TimelineTopic(topicId)
  } else {
    props.timelineItemInst.topic.id = topicId
  }

  await props.timelineItemInst?.topic?.load()
}
</script>

<style scoped>

</style>