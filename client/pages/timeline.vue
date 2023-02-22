<template>
  <main class="container">
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
    </section>
  </main>
</template>

<script lang="ts" setup>
import {useTimelineStore} from "~/stores/timelineStore";
import {storeToRefs} from "pinia";
import CloseAdd from "~/components/icons/close-add.vue";

definePageMeta({
  middleware: "accent-color-client",
  variant: "orange"
})

const {fetchTimelineTopics} = useTimelineStore()
const {timelineTopics} = storeToRefs(useTimelineStore())
const timelineStore = useTimelineStore()

const toggleAllTopics = () => {
  if (timelineStore.isAnyTopicSelected) {
    timelineTopics.value.forEach(t => t.selected = false)
  } else {
    timelineTopics.value.forEach(t => t.selected = true)
  }
}

await fetchTimelineTopics()
</script>

<style scoped>

</style>
