<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :color="color"/>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
import {useThemeStore} from "./stores/themeStore";

const color = computed(() => {
  if (process.client) {
    const {variant} = useThemeStore()
    return getComputedStyle(document.body).getPropertyValue(`--accent-${variant}`)
  }
})
</script>

<style lang="scss">
@import "assets/style/animations.scss";
@import "assets/style/main.scss";
</style>
