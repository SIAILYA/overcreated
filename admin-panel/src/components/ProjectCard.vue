<template>
  <router-link
      :style="{color: projectItem.color}"
      :to="'/projects/edit/' + projectItem.id"
      class="project-card d-block h-100"
  >
    <div class="d-flex w-100 mb-3">
      <button
          v-if="shiftLeft"
          class="btn btn-sm btn-outline-primary me-auto"
          @click.prevent="onClickShift(-1)"
      >
        &lt;
      </button>
      <button
          v-if="shiftRight"
          class="btn btn-sm btn-outline-primary ms-auto"
          @click.prevent="onClickShift(1)"
      >
        &gt;
      </button>
    </div>

    <h2 class="title text-center">
      {{ projectItem.title }}
    </h2>
    <div class="mt-2">
      {{ projectItem.description }}
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import {Project} from "../data/models/Project";

const emit = defineEmits(['shift'])

interface Props {
  projectItem: Project,
  shiftLeft: boolean,
  shiftRight: boolean
}

const {projectItem, shiftLeft, shiftRight} = defineProps<Props>()

const onClickShift = (direction: number) => {
  projectItem.reorder(projectItem.order + direction).then(() => {
    emit('shift')
  })
}
</script>

<style lang="scss" scoped>
.project-card {
  border: 1px solid rgba(0, 0, 0, .2);
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: black;

  .title {
    font-size: 1.5rem;
    margin: 0;
  }
}
</style>
