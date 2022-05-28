<template>
  <div>
    <ovc-header/>
    <router-view/>
  </div>
</template>


<script lang="ts" setup>
import OvcHeader from "./components/OvcHeader.vue";
import {watch} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
let theme = "green"

const setTheme = (theme: String) => {
  document.body.setAttribute("theme", `${theme}`)
}

watch(() => route.path, (current, _) => {
  switch (current) {
    case "/":
      theme = "green";
      break
    case "/timeline":
      theme = "orange";
      break
    case "/contacts":
      theme = "blue";
      break
    case "/resume":
      theme = "purple";
      break
    default:
      theme = "red"
  }

  setTheme(theme)
}, {immediate: true})
</script>


<style>
</style>
