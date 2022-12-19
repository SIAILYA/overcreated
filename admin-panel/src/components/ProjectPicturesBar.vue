<template>
  <h5 class="mt-4">Pictures</h5>
  <div class="d-flex">
    <input
        id="pictures_upload"
        ref="picturesUpload"
        :multiple="true"
        accept="image/*"
        class="d-none"
        type="file"
        @input="onPictureSelected"
    />

    <label class="upload-btn btn btn-success d-flex w-100" for="pictures_upload">
      <span class="mx-auto">Upload picture</span>
    </label>
  </div>

  <div class="row mt-3">
    <div v-for="pic in projectItem.pictures" class="col-6 mt-2">
      <a :href="pic.url" class="d-block position-relative picture" target="_blank">
        <img :src="pic.url" alt="" class="w-100">

        <button class="btn btn-danger remove-pic bg-danger" @click.prevent="removePicture(pic)">
          Delete
        </button>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Project} from "../data/models/Project";
import {ref} from "vue";
import {Picture} from "../data/models/Picture";
import {useConfirm} from "../utils/useConfirm";

interface Props {
  projectItem: Project
}

const {projectItem} = defineProps<Props>();
const emit = defineEmits(["update"]);

const picturesUpload = ref<HTMLInputElement>()


const onPictureSelected = async () => {
  if (picturesUpload.value?.files?.length) {
    const r = await Picture.upload(Array.from(picturesUpload.value.files))
    projectItem.pictures = projectItem.pictures.concat(r)
    emit("update")
  }
}


const removePicture = async (pic: Picture) => {
  await useConfirm("Are you sure you want to delete this picture?")
  projectItem.pictures = projectItem.pictures.filter(p => p.id !== pic.id)
  emit("update")
}
</script>

<style lang="scss" scoped>
.picture {
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  height: 100%;
  min-height: 120px;

  img {
    height: 100%;
    object-fit: cover;
  }

  .remove-pic {
    transition: all .3s ease;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover {
    .remove-pic {
      height: 36px;
    }
  }

  &:not(:hover) {
    .remove-pic {
      padding: 0;
      border: none;
      height: 0;
    }
  }
}

</style>
