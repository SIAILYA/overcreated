<template>
  <div class="d-flex mb-3 mt-4 mt-md-0">
    <h4 class="my-auto">Techs</h4>
  </div>

  <div class="row">
    <div class="col-12 col-md-5 mt-2 mt-md-0">
      <input
          v-model="addTechForm.title"
          class="form-control"
          placeholder="Title"
          type="text"
          @input="onInputTitle"
      >
    </div>
    <div class="col-12 col-md-5 mt-2 mt-md-0">
      <input
          v-model="addTechForm.slug"
          class="form-control"
          placeholder="Slug"
          type="text"
      >
    </div>

    <div class="col-12 col-md-2 mt-2 mt-md-0">
      <button
          :disabled="!addTechForm.slug || !addTechForm.title"
          class="w-100 btn btn-success"
          @click="onClickAddTech"
      >
        Add
      </button>
    </div>
  </div>

  <hr>

  <div class="row">
    <div class="col-6 col-md-4 col-lg-3">
      <div v-for="techItem in techs" class="card p-2">
        {{techItem}}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {storeToRefs} from "pinia";
import {useTechStore} from "../../stores/techStore";
import {ref} from "vue";
import {transliterate} from "../../utils";

const {techs} = storeToRefs(useTechStore());
const {fetchTechs, createTech} = useTechStore();

const addTechForm = ref({
  title: "",
  slug: "",
});

const onInputTitle = () => {
  addTechForm.value.slug = transliterate(addTechForm.value.title.toLowerCase().replace(/ /g, "_"))
}

const onClickAddTech = async () => {
  await createTech(addTechForm.value);

  addTechForm.value = {
    title: "",
    slug: "",
  }
}

fetchTechs()
</script>

<style scoped>

</style>
