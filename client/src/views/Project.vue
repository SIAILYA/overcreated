<template>
  <section class="container">
    project {{project}}
  </section>
</template>

<script lang="ts" setup>
import {computed, onMounted, reactive, Ref, ref} from "vue";
import {useRoute} from "vue-router";
import {Project} from "../typings/project";

const route = useRoute()
const project = reactive(new Project())

onMounted(() => {
  project.slug = route.params.slug.toString()
  project.loadBySlug()
})
</script>

<style scoped>

</style>
