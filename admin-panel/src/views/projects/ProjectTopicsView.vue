<template>
  <div class="d-flex mb-3 mt-4 mt-md-0">
    <h4 class="my-auto">Project Topics</h4>
  </div>

  <project-topic-form
      :project-topic-item="projectTopicCreate"
      @create="onProjectTopicCreate"
  />
  <hr>

  <div class="row">
    <div v-for="projectTopicItem in projectTopics" class="col-6 col-md-4 mt-3">
      <div class="card p-2 text-center">
        <!--        TODO: Изменение порядка -->
        <!--        <div class="d-flex justify-content-between">-->
        <!--          <button class="btn p-0">◀️</button>-->
        <!--          <button class="btn p-0">▶️</button>-->
        <!--        </div>-->

        <h4 class="mb-1">
          {{ projectTopicItem.title }}
        </h4>
        <span>{{ projectTopicItem.slug }}</span>

        <div class="d-flex mt-3">
          <button class="btn btn-primary w-100" @click="onClickUpdateProjectTopic(projectTopicItem)">Update</button>
        </div>
      </div>
    </div>
  </div>

  <modal-window :show="showEditProjectTopicWindow" @close="closeEditProjectTopicModal">
    <project-topic-form
        :project-topic-item="projectTopicEdit"
        isDelete
        @create="onProjectTopicUpdateSubmit"
        @delete="onProjectTopicDelete"
    >
      <template #create>
        Save
      </template>
    </project-topic-form>
  </modal-window>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {ProjectTopic} from "../../data/models/ProjectTopic";
import ProjectTopicForm from "../../components/ProjectTopicForm.vue";
import {useProjectTopicStore} from "../../stores/projectTopicStore";
import {storeToRefs} from "pinia";
import ModalWindow from "../../components/ModalWindow.vue";

const {fetchProjectTopics, createProjectTopic} = useProjectTopicStore();
const {projectTopics} = storeToRefs(useProjectTopicStore());

const projectTopicCreate = reactive<ProjectTopic>(new ProjectTopic())
const projectTopicEdit = ref<ProjectTopic | null>(null)
const showEditProjectTopicWindow = ref(false)


const onClickUpdateProjectTopic = (projectTopicItem: ProjectTopic) => {
  projectTopicEdit.value = projectTopicItem
  showEditProjectTopicWindow.value = true
}

const closeEditProjectTopicModal = () => {
  showEditProjectTopicWindow.value = false
  projectTopicEdit.value = null
}

const onProjectTopicCreate = async () => {
  await createProjectTopic(projectTopicCreate)
  projectTopicCreate.clear()
}

const onProjectTopicDelete = async (projectTopicDelete: ProjectTopic) => {
  await projectTopicDelete.delete()
  await fetchProjectTopics()
  closeEditProjectTopicModal()
}

const onProjectTopicUpdateSubmit = async (projectTopicItem: ProjectTopic) => {
  await projectTopicItem.update()
  await fetchProjectTopics()
  closeEditProjectTopicModal()
}

fetchProjectTopics()
</script>

<style scoped>

</style>
