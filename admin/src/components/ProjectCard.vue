<template>
  <router-link
      :style="{color: projectItem.color}"
      :to="'/projects/edit/' + projectItem.id"
      class="project-card d-block h-100"
  >
    <div class="d-flex justify-content-between w-100 mb-3">
      <div class="w-100">
        <button
            v-if="shiftLeft"
            class="btn btn-sm btn-outline-primary me-auto"
            @click.prevent="onClickShift(-1)"
        >
          &lt;
        </button>
      </div>

      <div class="d-flex">
        <button
            class="btn btn-sm btn-outline-primary ms-2"
            @click.prevent="onClickReorder()"
        >
          Reorder
        </button>
      </div>

      <div class="w-100 text-end">
        <button
            v-if="shiftRight"
            class="btn btn-sm btn-outline-primary ms-auto"
            @click.prevent="onClickShift(1)"
        >
          &gt;
        </button>
      </div>
    </div>

    <h2 class="title text-center">
      {{ projectItem.title }} ({{ projectItem.order }})
    </h2>
    <div class="mt-2">
      {{ projectItem.description }}
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import {Project} from "@data/models/Project";
import {defineProps, toRefs} from "vue";

const emit = defineEmits(['shift', 'reorder'])

interface Props {
  projectItem: Project,
  shiftLeft: boolean,
  shiftRight: boolean
}

const props = defineProps<Props>()
const {projectItem, shiftLeft, shiftRight} = toRefs(props)

const onClickShift = (direction: number) => {
  console.log(projectItem.value.order)
  projectItem.value.reorder(projectItem.value.order + direction).then(() => {
    emit('shift')
  })
}

const onClickReorder = () => {
  emit('reorder', projectItem.value)
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
