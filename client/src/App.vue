<template>
  <div>
    <ovc-header/>
    <ovc-headline/>

    <suspense>
      <router-view v-slot="{ Component }">
        <transition appear :duration="300" mode="out-in" name="fade">
          <component :is="Component"/>
        </transition>
      </router-view>
    </suspense>
  </div>
</template>


<script lang="ts" setup>
import OvcHeader from "./components/OvcHeader.vue";
import {watch} from "vue";
import {useRoute} from "vue-router";
import OvcHeadline from "./components/OvcHeadline.vue";

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

  if (current.includes("/project")) {
    theme = "project"
  }

  setTheme(theme)
}, {immediate: true})
</script>


<style>
</style>
