<template>
  <component :is="layoutComponent">
    <router-view/>
  </component>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {useRouter} from "vue-router";
import {useTokenStore} from "./stores/tokenStore";

import EmptyLayout from "./layout/EmptyLayout.vue"
import MainLayout from "./layout/MainLayout.vue"

const router = useRouter()

const {checkSavedToken} = useTokenStore()

const layoutComponent = computed(() => {
  if (router.currentRoute.value.meta.layout === "main") {
    return MainLayout
  }

  return EmptyLayout
})

checkSavedToken()
    .then(() => {
      // router.push(router.currentRoute.value.fullPath)
    })
    .catch(() => {
      router.replace("/login")
    })
</script>

<style>
</style>
