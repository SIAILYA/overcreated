<template>
  <label class="form-check-label">
    <input
        :checked="selected"
        class="form-check-input"
        type="checkbox"
        @change="emit('update:selected', !selected)"
    >
    {{ techItem.title }}
  </label>
</template>

<script lang="ts" setup>
import {Tech} from "@data/models/Tech";

const emit = defineEmits(["update:selected"])

interface Props {
  techItem: Tech;
  selected: boolean;
}

const {techItem, selected} = defineProps<Props>()
</script>

<style scoped>

</style>
