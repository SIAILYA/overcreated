<template>
  <menu class="p-0 m-0 d-flex flex-row flex-wrap flex-md-column justify-content-center">
    <router-link
        v-for="m in menuItems"
        :to="m.href"
        class="btn btn-primary mb-2 mx-2 mx-md-0"
    >
      {{ m.title }}
    </router-link>
  </menu>

  <hr>

  <token-controls/>
</template>

<script lang="ts" setup>
import TokenControls from "./TokenControls.vue";

type menuItem = { href: string, title: string }

const menuItems: menuItem[] = [
  {href: "/", title: "Home"},
  {href: "/projects", title: "Projects"},
  // {href: "/projectTopics", title: "Project Topics"},
  // {href: "/techs", title: "Techs"},
  // {href: "/timeline", title: "Timeline"},
  // {href: "/timelineTopics", title: "Timeline Topics"},
  // {href: "/quotes", title: "Quotes"}
]
</script>


<style scoped>

</style>
