<template>
  <div>
    <div class="text-center">
      <h2 class="page-header">Портфолио</h2>
      <article>
        Мои пет-проекты, работы с фриланса и кейсы с хакатонов
      </article>
    </div>

    <section class="container mt-8 md:mt-12 lg:mt-14 flex justify-center gap-2">
      <ovc-pill color="#FFFFFF" :selected="false">
        123
      </ovc-pill>
      <ovc-pill color="#FFFFFF" :selected="true">
        123
      </ovc-pill>
      <ovc-pill color="#FFFFFF" :selected="false">
        123
      </ovc-pill>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "accent-color-client",
  variant: "green"
})

useHead({
  title: "Портфолио | samolyev"
})
</script>

<style scoped>

</style>
