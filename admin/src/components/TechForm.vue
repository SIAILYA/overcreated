<template>
  <div class="row">
    <div class="col-12 col-md-5 mt-2 mt-md-0">
      <input
          v-model="techForm.title"
          class="form-control"
          placeholder="Title"
          type="text"
          @input="onInputTitle"
      >
    </div>
    <div class="col-12 col-md-5 mt-2 mt-md-0">
      <input
          v-model="techForm.slug"
          class="form-control"
          placeholder="Slug"
          type="text"
      >
    </div>

    <div class="col-12 col-md-2 mt-2 mt-md-0">
      <button
          :disabled="!techForm.slug || !techForm.title"
          class="w-100 btn btn-success"
          @click="emit('create')"
      >
        <slot name="save">Create</slot>
      </button>
    </div>
  </div>

  <slot v-if="isDelete" name="delete">
    <button class="btn btn-danger mt-2 w-100" @click="emit('delete')">
      Delete
    </button>
  </slot>
</template>

<script lang="ts" setup>
import {Tech} from "@data/models/Tech";
import {transliterate} from "@/utils/utils";

const emit = defineEmits(["delete", "create"])

interface Props {
  techForm: Tech;
  isDelete?: boolean;
}

const {techForm, isDelete} = defineProps<Props>();

const onInputTitle = () => {
  techForm.slug = transliterate(techForm.title.toLowerCase().replace(/ /g, "_"))
}
</script>

<style scoped>

</style>
