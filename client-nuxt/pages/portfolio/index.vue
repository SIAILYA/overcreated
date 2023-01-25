<template>
  <main class="container">
    <div class="text-center">
      <h2 class="page-header">Портфолио</h2>
      <article>
        Мои пет-проекты, работы с фриланса и кейсы с хакатонов
      </article>
    </div>

    <section class="container text-center">
      <div class="mt-8 md:mt-12 lg:mt-14 flex flex-wrap justify-center gap-2">
        <ovc-pill
            v-for="projectTopic in projectTopics"
            v-model:selected="projectTopic.selected"
            :color="projectTopic.color"
        >
          {{ projectTopic.title }}
        </ovc-pill>
        <button
            class="clear-topics flex items-center justify-center"
            @click="deselectAllTopics"
        >
          <svg viewBox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"
                  fill="currentColor"></path>
          </svg>
        </button>
        <ovc-help
            class="my-auto"
            align="end"
            width="200px"
            text="Выбирайте топики, чтобы отфильтровать проекты. Нажмите на крестик, чтобы снять выбор со всех топиков"
        />
      </div>

<!--      TODO: Дополнительные фильтры-->
<!--      <button class="filters-button mt-3 px-2 py-1 flex items-center mx-auto" >-->
<!--        <svg class="mr-2" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">-->
<!--          <g fill="none">-->
<!--            <path-->
<!--                d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z"-->
<!--                fill="currentColor"></path>-->
<!--          </g>-->
<!--        </svg>-->
<!--        <span>Ещё фильтры</span>-->
<!--      </button>-->
    </section>
  </main>
</template>

<script lang="ts" setup>
import {usePortfolioStore} from "~/stores/portfolioStore";
import {storeToRefs} from "pinia";

definePageMeta({
  middleware: "accent-color-client",
  variant: "green"
})

useHead({
  title: "Портфолио | samolyev"
})

const {fetchProjectTopics, deselectAllTopics, fetchTechs} = usePortfolioStore()
const {projectTopics, techs} = storeToRefs(usePortfolioStore())

useAsyncData(async () => {
  await Promise.all([
    fetchProjectTopics(),
    fetchTechs()
  ])
})
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
