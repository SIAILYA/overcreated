<template>
  <div>
    <div class="text-center">
      <h2 class="page-header">Портфолио</h2>
      <article>
        Мои пет-проекты, работы с фриланса и кейсы с хакатонов
      </article>
    </div>

    <section class="container mt-8 md:mt-12 lg:mt-14 flex justify-center gap-2">
      <ovc-pill color="#FFFFFF" :selected="false" v-for="pt in projectTopics">
        {{ pt.title }}
      </ovc-pill>
    </section>
  </div>
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

const {fetchProjectTopics} = usePortfolioStore()
const {projectTopics} = storeToRefs(usePortfolioStore())
fetchProjectTopics()
</script>

<style scoped>

</style>
