<template>
  <section :style="{'--accent': project?.color}" class="container grid md:grid-cols-2 gap-6">
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
          class="mt-4 px-3 py-2 block border bg-accent border-accent rounded-lg text-center cursor-pointer transition-all"
          target="_blank"
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
    <section>
      <h4 class="text-xl mb-2">Ссылки проекта</h4>
      <div class="flex gap-3">
        <nuxt-link v-if="project?.behance" :to="project?.behance">
          <icon-behance color="var(--accent)" width="48"/>
        </nuxt-link>
        <nuxt-link v-if="project?.github" :to="project?.github">
          <icon-github color="var(--accent)" width="48"/>
        </nuxt-link>
      </div>

<!--      <hr class="my-3" style="border-color: var(&#45;&#45;border-color)">-->

      <div class="mt-5">
        <h4 class="text-xl">Изображения проекта</h4>


      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import {Project} from "~/data/models/Project";
import {useThemeStore} from "~/stores/themeStore";
import {VariantEnum} from "~/data/types/theme";
import {marked} from "marked";
import IconBehance from "~/components/icons/behance.vue";
import IconGithub from "~/components/icons/github.vue";

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
