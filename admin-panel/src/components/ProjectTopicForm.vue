<template>
  <div class="row">
    <div class="col-12 col-md-4">
      <input
          v-model="projectTopicItem.title"
          class="form-control"
          placeholder="Title"
          type="text"
          @input="onNameInput"
      >
    </div>
    <div class="col-12 col-md-4">
      <input
          v-model="projectTopicItem.slug"
          class="form-control"
          placeholder="Slug"
          type="text"
      >
    </div>
    <div class="col-12 col-md-2">
      <input
          v-model="projectTopicItem.color"
          class="form-control form-control-color w-100"
          type="color"
      >
    </div>
    <div class="col-12 col-md-2">
      <button
          :disabled="!projectTopicItem.title || !projectTopicItem.slug"
          class="btn btn-success w-100"
          @click="emit('create', projectTopicItem)"
      >
        <slot name="create">Create</slot>
      </button>
    </div>

    <div v-if="isDelete" class="my-2">
      <label class="form-check-label">
        <input
            v-model="projectTopicItem.isVisible"
            class="form-check-input"
            type="checkbox"
        >

        Is visible
      </label>
    </div>

    <div v-if="isDelete" class="col-12">
      <button class="btn btn-danger mt-2 w-100" @click="emit('delete', projectTopicItem)">
        Delete
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ProjectTopic} from "../data/models/ProjectTopic";
import {transliterate} from "../utils/utils";

interface Props {
  projectTopicItem: ProjectTopic;
  isDelete?: boolean;
}

const emit = defineEmits(["create", "delete"])
const {projectTopicItem, isDelete} = defineProps<Props>()

const onNameInput = () => {
  projectTopicItem.slug = transliterate(projectTopicItem.title.toLowerCase().replace(/ /g, "-"))
}
</script>

<style scoped>

</style>
