<template>
  <main class="container">
    <div class="text-center">
      <h1 class="text-4xl font-semibold">Привет!</h1>
      <h2 class="text-3xl font-medium mt-3">Меня зовут Илья, я веб-разработчик</h2>

      <p class="mt-8 md:w-2/3 mx-auto">
        Это моя домашняя страница. Тут можно найти мои проекты, сложенные
        <br>
        в
        <ovc-emb-link :color="'var(--accent-green)'" to="/portfolio">портфолио</ovc-emb-link>,
        посмотреть моё
         <ovc-emb-link :color="'var(--accent-purple)'" to="/resume">резюме</ovc-emb-link>
        и
         <ovc-emb-link :color="'var(--accent-orange)'" to="/timeline">таймлайн</ovc-emb-link>
        и узнать как
         <ovc-emb-link :color="'var(--accent-blue)'" to="/contacts">связаться со мной</ovc-emb-link>
      </p>
    </div>

    <section class="mt-16">
      <h3 class="text-center text-2xl mb-4">Избранные проекты</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-3">
        <ovc-project-cover
            :bg="ovcCover"
            bg-color="#1A7137"
            text-color="#FFFFFF"
            to="/portfolio/overcreated"
        >
          overcreated

          <template #description>
            Моя домашяя страница. Вы находитесь здесь!
          </template>
        </ovc-project-cover>

        <ovc-project-cover
            :bg="cdCover"
            bg-color="#FFDB58"
            text-color="#363636"
            to="/portfolio/chekdeli"
        >
          Чекдели

          <template #description>
            Делит чеки на компанию. Просто и быстро
          </template>
        </ovc-project-cover>

        <ovc-project-cover
            :bg="dtCover"
            text-color="#FFFFFF"
            bg-color="#252536"
            to="/portfolio/cifrovoy_dvoynik"
        >
          Цифровой двойник

          <template #description>
            Делит чеки на компанию. Просто и быстро
          </template>
        </ovc-project-cover>

        <ovc-project-cover
            :bg="allCover"
            text-color="var(--text-color)"
            to="/portfolio"
        >
          Все проекты

          <template #description>
            Моё портфолио с различными проектами
          </template>
        </ovc-project-cover>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import OvcEmbLink from "~/components/ovc-emb-link.vue";
import ovcCover from "@/assets/ovc-cover.png"
import cdCover from "@/assets/cd-cover.png"
import dtCover from "@/assets/dt-cover.png"
import allCover from "@/assets/all-cover.png"
import {useThemeStore} from "~/stores/themeStore";

definePageMeta({
  middleware: "accent-color-client",
  variant: "project"
})

useHead({
  title: "Главная | samolyev"
})

onMounted(() => {
  useThemeStore().setProjectAccentColor("var(--text-color)")
})
</script>

<style scoped>

</style>
