<template>
  <div class="d-flex mb-3 mt-4 mt-md-0">
    <h4 class="my-auto">Techs</h4>
  </div>

  <tech-form
      :tech-form="addTechForm"
      @create="onClickAddTech"
  />

  <hr>

  <div class="row">
    <div v-for="techItem in techs" class="col-6 mt-3">
      <div class="card p-2 text-center">
        <h4 class="mb-1">
          {{ techItem.title }}
        </h4>
        <span>{{ techItem.slug }}</span>

        <div class="d-flex mt-3">
          <button class="btn btn-primary w-100" @click="onClickUpdateTech(techItem)">Update</button>
        </div>
      </div>
    </div>
  </div>

  <modal-window v-if="editTech" :show="showTechEditWindow" @close="onCloseUpdateTech">
    <h4 class="my-auto">Edit tech</h4>

    <tech-form
        :tech-form="editTech"
        is-delete
        @create="onSubmitUpdateTech"
        @delete="onClickDeleteTech"
    >
      <template #save>
        Save
      </template>
    </tech-form>
  </modal-window>
</template>

<script lang="ts" setup>
import {storeToRefs} from "pinia";
import {useTechStore} from "../../stores/techStore";
import {reactive, ref} from "vue";
import ModalWindow from "../../components/ModalWindow.vue";
import TechForm from "../../components/TechForm.vue";
import {Tech} from "../../data/models/Tech";

const {techs} = storeToRefs(useTechStore());
const {fetchTechs, createTech} = useTechStore();

const showTechEditWindow = ref(false);

let addTechForm = reactive(new Tech());
const editTech = ref<Tech | null>(null);


const onClickAddTech = async () => {
  await createTech(addTechForm);
  addTechForm.clear()
}

const onClickUpdateTech = async (techItem: Tech) => {
  editTech.value = techItem;
  console.log(editTech.value)
  showTechEditWindow.value = true;
}

const onCloseUpdateTech = () => {
  editTech.value = null;
  showTechEditWindow.value = false;
}

const onClickDeleteTech = async () => {
  await editTech.value!.delete()
  await fetchTechs()
  showTechEditWindow.value = false;
}

const onSubmitUpdateTech = async () => {
  await editTech.value!.update();
  showTechEditWindow.value = false;
}

fetchTechs()
</script>

<style scoped>

</style>
