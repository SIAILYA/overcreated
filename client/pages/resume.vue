<template>
  <main class="container h-full">
    <div class="text-center">
      <h2 class="page-header">Резюме</h2>
      <article>
        Моё резюме, где описан опыт, навыки и всё остальное
      </article>
    </div>

    <section class="resume-data grid grid-cols-1 md:grid-cols-2 lg:w-2/3 mx-auto mt-8 md:mt-12 gap-4">
      <div class="text-center photos">
        <div class="grid grid-cols-2 gap-3">
          <img alt="" class="rounded h-full w-full aspect-video object-cover" src="@/assets/images/resume/resume-1.png">
          <img alt="" class="rounded h-full w-full aspect-video object-cover" src="@/assets/images/resume/resume-2.png">
          <img alt="" class="rounded h-full w-full aspect-video object-cover" src="@/assets/images/resume/resume-3.png">
          <img alt="" class="rounded h-full w-full aspect-video object-cover" src="@/assets/images/resume/resume-4.png">
        </div>

        <p class="opacity-50 mt-2 text-sm"><i>Привет, это я!</i></p>
      </div>

      <div class="biography flex flex-col">
        <h3 class="text-3xl font-medium">Илья Самойлов</h3>
        <h4 class="font-light italic leading-tight">aka samolyev</h4>
        <h4 class="font-light italic leading-tight">aka siailya</h4>
        <h3 class="text-2xl mt-5 lg:mt-8 mb-3">Я - веб-разработчик</h3>

        <button class="mt-auto mr-auto py-2 px-4 rounded mb-7 inline-block" style="background: var(--accent-purple)">
          Скачать резюме в PDF
        </button>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "accent-color-client",
  variant: "purple"
})

useHead({
  title: 'Резюме | samolyev'
})
</script>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
  .resume-data {
    grid-auto-flow: dense;
  }

  .photos {
    grid-row: 2;
  }
}
</style>
