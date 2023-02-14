<template>
  <main class="container md:px-6 lg:px-12">
    <div class="text-center">
      <h2 class="page-header">Портфолио</h2>
      <article>
        Мои пет-проекты, работы с фриланса и кейсы с хакатонов
      </article>
    </div>

    <section class="text-center" role="search">
      <div class="mt-8 md:mt-12 lg:mt-14 flex flex-wrap justify-center gap-2">
        <ovc-pill
            v-for="projectTopic in projectTopics"
            v-model:selected="projectTopic.selected"
            @update:selected="fetchProjectsBySelectedTopics"
            :color="projectTopic.color"
        >
          {{ projectTopic.title }}
        </ovc-pill>
        <button
            class="clear-topics flex items-center justify-center"
            @click="toggleAllTopics"
        >
          <close-add
              :rotate="!portfolioStore.isAnyTopicSelected"
          />
        </button>
        <ovc-help
            align="end"
            class="my-auto"
            text="Выбирайте топики, чтобы отфильтровать проекты. Крестик сбрасывает все фильтры. Плюсик включает все топики"
            width="200px"
        />
      </div>

      <!--      TODO: Дополнительные фильтры-->
    </section>

    <section class="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-fr">
      <transition-group name="projects-list">
        <ovc-project-card
            v-for="project in projects"
            :key="project.id"
            :project-item="project"
        />
      </transition-group>
    </section>
  </main>
</template>

<script lang="ts" setup>
import {usePortfolioStore} from "~/stores/portfolioStore";
import {storeToRefs} from "pinia";
import OvcProjectCard from "~/components/ovc-project-card.vue";
import CloseAdd from "~/components/icons/close-add.vue";

definePageMeta({
  middleware: "accent-color-client",
  variant: "green"
})

useHead({
  title: "Портфолио | samolyev"
})

const {fetchProjectTopics, selectAllTopics, deselectAllTopics,
  fetchTechs, fetchProjectsByTopics} = usePortfolioStore()
const {projectTopics, techs, projects} = storeToRefs(usePortfolioStore())
const portfolioStore = usePortfolioStore()

const toggleAllTopics = () => {
  if (portfolioStore.isAnyTopicSelected) {
    deselectAllTopics()
  } else {
    selectAllTopics()
  }
}

const selectedTopics = computed(() => {
  return projectTopics.value.filter(topic => topic.selected)
})

const fetchProjectsBySelectedTopics = async () => {
  const _ = await fetchProjectsByTopics(selectedTopics.value)
}

watch(selectedTopics, async () => {
  console.log("selectedTopics changed")
  await fetchProjectsBySelectedTopics()
})

await fetchProjectTopics()

await Promise.all([
  fetchProjectsBySelectedTopics(),
  fetchTechs(),
])
</script>

<style scoped>
.clear-topics {
  width: 36px;
  height: 36px;
  aspect-ratio: 1;
  border: 1px solid var(--text-color);
  border-radius: 10px;
  color: var(--text-color);
  background: var(--background-tetriary);
  transition: all .3s ease;
}

.filters-button {
  color: var(--text-color);
  opacity: 0.7;
}
</style>
