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

        <button class="mt-auto text-white mr-auto py-2 px-4 rounded mb-7 inline-block transition-all download-btn duration-300"
                style="background: var(--accent-purple);">
          <svg class="inline mr-1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <path
                d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.469 5.469 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5l1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4l4-4h-2.55z"
                fill="currentColor"></path>
          </svg>
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

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .resume-data {
    grid-auto-flow: dense;
  }

  .photos {
    grid-row: 2;
  }
}

.download-btn:hover {
  box-shadow: 0 0 5px 3px rgba(223, 0, 106, .15);
}
</style>
