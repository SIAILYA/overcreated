<template>
  <menu class="p-0 m-0 d-flex flex-row flex-wrap flex-md-column justify-content-center">
    <router-link
        v-for="m in menuItems"
                 :to="m.href"
        tag="li"
        class="d-block btn btn-primary mb-2 mx-2 mx-md-0"
    >
      {{m.title}}
    </router-link>
  </menu>

  <until-expire/>
</template>

<script setup lang="ts">
import UntilExpire from "./UntilExpire.vue";

const menuItems = [
  {href: "/", title: "Home"},
  {href: "/projects", title: "Projects"},
  {href: "/projectTopics", title: "Project Topics"},
  {href: "/techs", title: "Techs"},
  {href: "/timeline", title: "Timeline"},
  {href: "/timelineTopics", title: "Timeline Topics"}
]
</script>


<style scoped>

</style>
