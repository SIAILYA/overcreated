<template>
  <h5 class="mt-4">Pictures</h5>
  <div class="d-flex">
    <input
        id="pictures_upload"
        ref="picturesUpload"
        accept="image/*"
        class="d-none"
        multiple="multiple"
        type="file"
        @input="onPictureSelected"
    />

    <label class="upload-btn btn btn-success d-flex w-100" for="pictures_upload">
      <span class="mx-auto">Upload picture</span>
    </label>
  </div>

  <div class="row mt-3">
    <div v-for="(pic, i) in projectItem.pictures" class="col-6 mt-2">
      <a :href="'/' + pic.url" class="d-block position-relative picture" target="_blank">
        <img :src="'/' + pic.url" alt="" class="w-100">

        <button class="btn btn-danger remove-pic bg-danger" @click.prevent="removePicture(i)">
          Delete
        </button>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Project} from "../data/models/Project";
import {ref} from "vue";

interface Props {
  projectItem: Project
}

const {projectItem} = defineProps<Props>();

const picturesUpload = ref<HTMLInputElement>()


const onPictureSelected = () => {
  const data = new FormData()
  console.log(typeof picturesUpload.value)

  if (picturesUpload.value?.files?.length) {
    console.log(Array.from(picturesUpload.value.files))
  }
}


const removePicture = (index: number) => {
}
</script>

<style scoped>

</style>
