<template>
  <div class="row">
    <div class="col-12 col-md-5">
      <input v-model="timelineTopicItem.title" class="form-control" placeholder="Title" type="text">
    </div>
    <div class="col-12 col-md-5">
      <input v-model="timelineTopicItem.color" class="form-control form-control-color w-100" type="color">
    </div>

    <div class="col-12 col-md-2">
      <button class="btn btn-success w-100" @click="emit('create', timelineTopicItem)">
        <slot name="create">
          Create
        </slot>
      </button>
    </div>
  </div>

  <div v-if="isDelete" class="col-12">
    <button class="btn btn-danger mt-2 w-100" @click="emit('delete', timelineTopicItem)">
      Delete
    </button>
  </div>
</template>

<script lang="ts" setup>
import {TimelineTopic} from "@data/models/TimelineTopic";

interface Props {
  timelineTopicItem: TimelineTopic
  isDelete?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits(['create', 'emit'])
</script>

<style scoped>

</style>