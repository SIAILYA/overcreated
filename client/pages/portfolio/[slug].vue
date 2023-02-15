<template>
  <section :style="{'--accent': project?.color}" class="container grid md:grid-cols-2">
    <section>
      <h1 class="text-5xl font-medium duration-300">
        <span class="text-accent shadow-accent transition-all">{{
            project?.title.charAt(0)
          }}</span>{{ project?.title.slice(1) }}
      </h1>

      <p class="mt-3 italic">
        {{ project?.description }}
      </p>

      <nuxt-link
          v-if="project?.link"
          :style="{color: getContrastColor(project?.color)}"
          :to="project?.link"
          target="_blank"
          class="mt-4 px-3 py-2 block border bg-accent border-accent rounded-lg text-center cursor-pointer transition-all"
      >
        Посетить проект
      </nuxt-link>

      <hr class="my-3" style="border-color: var(--border-color)">

      <article
          v-if="project?.fullDescription"
          class="markdown-content"
          v-html="marked.parse(project?.fullDescription)"
      />
    </section>
  </section>
</template>

<script lang="ts" setup>
import {Project} from "~/data/models/Project";
import {useThemeStore} from "~/stores/themeStore";
import {VariantEnum} from "~/data/types/theme";
import {marked} from "marked";

const route = useRoute()
const project = ref<Project>()

definePageMeta({
  middleware: 'accent-color-client',
  variant: 'project'
})

useHead({
  title: () => {
    return project.value?.title + ' | samolyev'
  }
})


const fetchProject = async () => {
  const res = await Project.fetchBySlug(route.params.slug as string)

  if (!res) {
    useThemeStore().setVariant(VariantEnum.error);

    throw createError({
      statusCode: 404,
      message: 'Проект не найден',
      fatal: true
    })
  }

  project.value = res
  useThemeStore().setProjectAccentColor(project.value.color)
}

await fetchProject()
</script>

<style scoped>

</style>
