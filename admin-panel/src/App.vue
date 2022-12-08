<template>
  <component :is="layoutComponent">
    <router-view/>
  </component>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref} from "vue";
import {axiosInstance, parseJwt} from "./data/network";
import {useRoute, useRouter} from "vue-router";
import {useTokenStore} from "./stores/tokenStore";
import {storeToRefs} from "pinia";

import EmptyLayout from "./layout/EmptyLayout.vue"
import MainLayout from "./layout/MainLayout.vue"

const router = useRouter()
const route = useRoute()

const {expireAt} = storeToRefs(useTokenStore())

const savedToken = localStorage.getItem("token")

const layoutComponent = computed(() => {
  if (route.meta.layout === "main") {
    return MainLayout
  }

  return EmptyLayout
})

onMounted(() => {
  if (savedToken && parseJwt(savedToken).exp > Date.now() / 1000) {
    expireAt.value = parseJwt(savedToken).exp * 1000
    axiosInstance.defaults.headers.common['Authorization'] = savedToken
    router.push("/")
  } else {
    localStorage.removeItem("token")
    router.push("/login")
  }
})
</script>

<style>
</style>
