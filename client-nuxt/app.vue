<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>

import {useThemeStore} from "./stores/themeStore";

const {theme, accentColor, variant} = useThemeStore()
</script>

<style lang="scss">
@import "assets/style/main.scss";
</style>
