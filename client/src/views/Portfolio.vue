<template>
  <section class="mt-5">
    <div class="container">
      <h3 class="text-center">Витрина проектов</h3>
      <article class="text-center">Мои пет-проекты, учебные работы и разные фрилансные проекты, где я принимал учатие,
        бережно отсортированные по топикам
      </article>
    </div>

    <transition :duration="300" appear class="mt-3 mt-md-4 mt-lg-5 projects-topics" mode="out-in" name="fade">
      <div v-if="topics.length" class="container-fluid d-flex justify-content-center flex-wrap mt-4">
        <ovc-topic v-for="t in topics" :is-selected="t.isSelected" :topic="t" class="mx-1 mt-2"
                   @click="t.toggleSelect()"/>
        <div class="clear-topics d-flex mt-2 mx-1" @click="onClickDeselectTopics">
          <span class="material-icons-round">clear</span>
        </div>
      </div>
    </transition>

    <div class="container">
      <transition :duration="300" appear class="mt-3 mt-md-4 mt-lg-5" mode="out-in" name="fade">
        <div v-if="isProjectsLoading" class="d-flex justify-content-center">
          <ovc-spinner/>
        </div>
        <div v-else-if="!projects.length" class="text-center">
          <h3>Кажется, ничего не нашлось</h3>
          <p>Выберите один или несколько топиков, чтобы посмотреть проекты</p>
        </div>
        <transition-group v-else :duration="200" class="row child-view projects-list position-relative"
                          name="projects-list" tag="div">
          <div v-for="p in projects" :key="p.id" class="col-12 col-md-6 col-lg-4 col-xl-3 d-flex mb-3"
               style="transition: all .5s ease">
            <ovc-project :project="p" class="project-card"/>
          </div>
        </transition-group>
      </transition>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {computed, ComputedRef, onMounted, Ref, ref, watch} from "vue";
import {Topic, topicAPI} from "../typings/topic";
import axios from "axios";
import {BACK_API} from "../../config";
import OvcTopic from "../components/OvcTopic.vue";
import {Project, projectAPI} from "../typings/project";
import OvcProject from "../components/OvcProject.vue";
import OvcSpinner from "../components/OvcSpinner.vue";

const topics: Ref<Array<Topic>> = ref([])
const projects: Ref<Array<Project>> = ref([])
const projectsLoadDebounce: Ref<ReturnType<typeof setTimeout> | null> = ref(null)
const isProjectsLoading: Ref<Boolean> = ref(true)

const selectedTopicsIds: ComputedRef<string[]> = computed(() => {
  return topics.value.filter(t => t.isSelected).map(t => t.id)
})

const loadProjects = () => {
  const loadingTimer = setTimeout(() => {
    isProjectsLoading.value = true
  }, 1000)

  axios.get(BACK_API + projectAPI.path + projectAPI.getPath.slice(0, -1) + "?filter=" + selectedTopicsIds.value.join(",") + "&populate=true").then(async r => {
    clearTimeout(loadingTimer)
    projects.value = r.data.map((p: any) => {
      p.topicsObjects = p.topics.map((t: any) => new Topic(t))
      p.topics = p.topics.map((t: any) => t._id)

      return new Project(p)
    })
    isProjectsLoading.value = false
  })
}

watch(selectedTopicsIds, () => {
  if (projectsLoadDebounce) {
    //@ts-ignore
    clearTimeout(projectsLoadDebounce.value)
  }

  projectsLoadDebounce.value = setTimeout(() => {
    loadProjects()
  }, 500)
})

const onClickDeselectTopics = () => {
  topics.value.forEach((t, i) => setTimeout(() => t.toggleSelect(false), 50 * i))
}


onMounted(() => {
  axios.get(BACK_API + topicAPI.path + topicAPI.getPath.slice(0, -1)).then(r => {
    topics.value = r.data.map((t: any) => new Topic(t))
  })

  const stickyElm = document.querySelector('.projects-topics')

  const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('is-sticky', e.intersectionRatio < 1),
      {threshold: [1]}
  );

  if (stickyElm) {
    observer.observe(stickyElm)
  }
})
</script>

<style lang="scss" scoped>
.projects-topics {
  padding-top: calc(1em + 1px);
  padding-bottom: 20px;
  transition: all .3s ease, font-size .1s ease;
}

.projects-topics.is-sticky {
  position: sticky;
  top: -1px;
  z-index: 15;
  background: var(--background-primary);
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px var(--shadow-color);
}

.clear-topics {
  height: 100%;
  aspect-ratio: 1;
  border: 2px solid var(--text-color);
  border-radius: 100px;
  padding: 5px;
  opacity: .6;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    opacity: .9;
  }
}
</style>
