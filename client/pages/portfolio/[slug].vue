<template>
  <section>
    123
  </section>
</template>

<script lang="ts" setup>
import {Project} from "~/data/models/Project";
import {useThemeStore} from "~/stores/themeStore";
import {VariantEnum} from "~/data/types/theme";

definePageMeta({
  middleware: "accent-color-client",
  variant: "project"
})

const route = useRoute()
const project = ref<Project | null>(null)

const fetchProject = async () => {
  const res = await Project.fetchBySlug(route.params.slug as string)

  if (!res) {
    useThemeStore().setVariant(VariantEnum.error);

    throw createError({
      statusCode: 404,
      message: 'Проект не найден',
      fatal: true
    })
  } else {
    project.value = res
    useThemeStore().setProjectAccentColor(project.value?.color!)
  }
}

await fetchProject()
</script>

<style scoped>

</style>
