<template>
  <main class="container h-full">
    <div class="text-center">
      <h2 class="page-header">Таймлайн</h2>
      <article>
        События из моей жизни и профессиональной деятельности
      </article>
    </div>

    <section class="mt-8 md:mt-12 lg:mt-14 flex flex-wrap justify-center gap-2">
      <ovc-pill
          v-for="topic in timelineTopics"
          v-model:selected="topic.selected"
          :color="topic.color"
      >
        {{ topic.title }}
      </ovc-pill>
      <button
          class="clear-topics flex items-center justify-center"
          @click="toggleAllTopics"
      >
        <close-add
            :rotate="!timelineStore.isAnyTopicSelected"
        />
      </button>

      <ovc-help
            align="end"
            class="my-auto"
            text="Выбирайте топики, чтобы отфильтровать таймлайн. Крестик сбрасывает все фильтры. Плюсик включает все топики"
            width="200px"
        />
    </section>

    <section class="flex flex-col h-full relative mt-20">
      <transition-group name="timeline-list">
        <ovc-timeline-item-card
            key="hello"
            color="var(--accent-orange)"
            date-readable="Когда-то в будущем"
        >
          <template #title>
            Что будет дальше?
          </template>

          <template #description>
            <p>
              Если у вас есть предложения - <ovc-emb-link color="var(--accent-orange)" to="/contacts">свяжитесь</ovc-emb-link> со мной
            </p>
          </template>
        </ovc-timeline-item-card>

        <ovc-timeline-item-card
            v-for="(tItem, tIndex) in timelineStore.filteredTimelineItems"
            :key="tItem.id"
            :color="tItem?.topic?.color"
            show-divider
            :date-readable="tItem.readable_date"
        >
          <template #title>
            {{ tItem.title }}
          </template>

          <template #description>
            <p v-html="tItem.description"></p>
          </template>
        </ovc-timeline-item-card>

        <ovc-timeline-item-card
            key="hello"
            color="var(--accent-orange)"
            show-divider
            date-readable="15 Февраля'2002"
        >
          <template #title>
            Всем привет!
          </template>

          <template #description>
            Я родился
          </template>
        </ovc-timeline-item-card>
      </transition-group>
    </section>
  </main>
</template>

<script lang="ts" setup>
import {useTimelineStore} from "~/stores/timelineStore";
import {storeToRefs} from "pinia";
import CloseAdd from "~/components/icons/close-add.vue";
import OvcTimelineItemCard from "~/components/ovc-timeline-item-card.vue";

definePageMeta({
  middleware: "accent-color-client",
  variant: "orange"
})

useHead({
  title: "Таймлайн | samolyev"
})

const {fetchTimelineTopics, fetchTimelineItems} = useTimelineStore()
const {timelineTopics, timelineItems} = storeToRefs(useTimelineStore())
const timelineStore = useTimelineStore()

const toggleAllTopics = () => {
  if (timelineStore.isAnyTopicSelected) {
    timelineTopics.value.forEach(t => t.selected = false)
  } else {
    timelineTopics.value.forEach(t => t.selected = true)
  }
}

await fetchTimelineTopics()
await fetchTimelineItems()
</script>

<style scoped>

</style>
