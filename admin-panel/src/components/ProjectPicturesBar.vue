<template>
  <h5 class="mt-4">Pictures</h5>
  <div class="d-flex">
    <input id="pictures_upload" ref="picturesUpload" accept="image/*" class="d-none" multiple="multiple" type="file"
           @input="onPictureSelected"/>

    <label class="upload-btn btn btn-success d-flex w-100" for="pictures_upload">
      <span class="mx-auto">Загрузить картинку</span>
    </label>
  </div>

  <div class="row mt-3">
    <div v-for="(pic, i) in projectItem.pictures" class="col-6 mt-2">
      <a :href="BACKEND + '/' + pic" class="d-block position-relative picture" target="_blank">
        <img :src="BACKEND + '/' + pic" alt="" class="w-100">

        <button class="btn btn-danger remove-pic bg-danger" @click.prevent="removePicture(i)">
          Удалить
        </button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
