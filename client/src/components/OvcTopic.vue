<template>
  <div
      :class="isSelected && 'selected'"
      :style="'border-color: ' + topic.color"
      class="topic__wrapper position-relative"
      @click="emit('click', topic.slug)"
  >
    <div class="topic__inner">
      {{ topic.title }}
    </div>
    <div :style="'background-color: ' + topic.color" class="topic__back"></div>
  </div>
</template>

<script lang="ts" setup>
import {Topic} from "../typings/topic";
import {PropType} from "vue";

defineProps({
  topic: {
    type: Object as PropType<Topic>,
    required: true
  },
  isSelected: Boolean
})

const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
.topic__wrapper {
  border-radius: 100px;
  border-width: 2px;
  padding: 6px 12px;
  border-style: solid;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  opacity: .7;
  transition: all .3s ease;

  &:hover {
    opacity: .8;
  }
}

.topic__back {
  position: absolute;
  width: 0;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
}

.topic__inner {
  color: white;
}

.topic__wrapper.selected {
  opacity: 1;

  .topic__back {
    width: 100%;
  }
}
</style>
