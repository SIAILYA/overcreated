<template>
  <section :style="{'--accent': project?.color}" class="container grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-24">
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

      <div class="mt-5">
        <h4 class="text-xl mb-2">Изображения проекта</h4>

        <div class="grid grid-cols-2 gap-3 transition-all">
          <img
              v-for="(picture, index) in project?.pictures?.slice(0, 4)"
              :class="index === 0 && 'col-span-2'"
              :src="picture.url"
              alt=""
              class="cursor-pointer rounded-lg border border-stone-500 transition-all h-full object-cover"
              @click="onClickPicture(index)"
          >
          <div
              v-if="project?.pictures?.slice(4)?.length"
              class="cursor-pointer rounded-lg border border-stone-500 transition-all h-full text-accent text-3xl text-center flex"
              style="background: var(--background-secondary)"
              @click="onClickPicture(4)"
          >
            <span class="m-auto">
              +{{ project?.pictures?.slice(4)?.length }}
            </span>
          </div>
        </div>

        <ovc-gallery
            :show="isGalleryShown"
            :active-picture="activeGalleryPicture"
            :pictures="project?.pictures"
            @close="onCloseGallery"
        />
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
import {Ref} from "vue";

const route = useRoute()
const project = ref<Project>()
const isGalleryShown: Ref<boolean> = ref(false)
const activeGalleryPicture: Ref<number | null> = ref(null)

definePageMeta({
  middleware: 'accent-color-client',
  variant: 'project'
})

useHead({
  title: () => {
    return project.value?.title + ' | samolyev'
  }
})

const onClickPicture = (index: number) => {
  isGalleryShown.value = true
  activeGalleryPicture.value = index
}

const onCloseGallery = () => {
  isGalleryShown.value = false
  activeGalleryPicture.value = null
}

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
