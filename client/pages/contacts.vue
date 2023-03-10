<template>
  <main class="container h-full">
    <div class="text-center">
      <h2 class="page-header">Контакты</h2>
      <article>
        Актуальные способы связаться со мной по любому вопросу
      </article>
    </div>

    <section>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-3 mt-8 md:mt-12">
        <ovc-contacts-card
            display-link="sia.ilya.dev@gmail.com"
            link="mailto:sia.ilya.dev@gmail.com"
            title="Написать на почту"
        >
          <svg class="mr-2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
              <path d="M3 9l9 6l9-6l-9-6l-9 6"></path>
              <path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9"></path>
              <path d="M3 19l6-6"></path>
              <path d="M15 13l6 6"></path>
            </g>
          </svg>
        </ovc-contacts-card>

        <ovc-contacts-card
            display-link="t.me/siailya"
            link="https://t.me/siailya"
            title="Написать в ТГ"
        >
          <svg class="mr-2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="1.5"></path>
          </svg>
        </ovc-contacts-card>


        <ovc-contacts-card
            display-link="vk.com/siailya"
            link="https://vk.com/siailya"
            title="Написать VK"
        >
          <svg class="mr-2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
              <path d="M10 6h2v12c-4.5-1-8-6.5-9-12"></path>
              <path d="M20 6c-1 2-3 5-5 6h-3"></path>
              <path d="M20 18c-1-2-3-5-5-6"></path>
            </g>
          </svg>
        </ovc-contacts-card>
      </div>
    </section>

    <hr class="my-12" style="border-color: var(--border-color)">

    <section class="text-center">
      <h3 class="text-2xl">Ещё я есть тут</h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-3 mt-8 md:mt-12">
        <ovc-contacts-card
            display-link="github.com/siailya"
            link="https://github.com/siailya"
            title="GitHub"
        >
          <svg class="mr-2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <path
                d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="1.5"></path>
          </svg>
        </ovc-contacts-card>


        <ovc-contacts-card
            display-link="behance.net/siailya"
            link="https://www.behance.net/siailya"
            title="Behance"
        >
          <svg class="mr-2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
              <path d="M3 18V6h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6H3"></path>
              <path d="M3 12h4.5"></path>
              <path d="M14 13h7a3.5 3.5 0 0 0-7 0v2a3.5 3.5 0 0 0 6.64 1"></path>
              <path d="M16 6h3"></path>
            </g>
          </svg>
        </ovc-contacts-card>

        <ovc-contacts-card
            display-link="t.me/samolyev"
            link="https://t.me/samolyev"
            title="Канал в ТГ"
        >
          <svg class="mr-2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="1.5"></path>
          </svg>
        </ovc-contacts-card>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "accent-color-client",
  variant: "blue"
})

useHead({
  title: "Контакты | samolyev"
})
</script>

<style scoped>

</style>
