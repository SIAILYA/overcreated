<template>
  <ovc-topic :color="topic.color" :is-selected="isSelected" @click="emit('click', topic.slug)">
    {{ topic.title }}
  </ovc-topic>
</template>

<script lang="ts" setup>
import {Topic} from "../typings/topic";
import {PropType} from "vue";
import OvcTopic from "./OvcTopic.vue";

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
</style>
