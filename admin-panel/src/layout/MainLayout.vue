<template>
  <div class="container row mx-auto pt-3">
    <div class="col-12 col-md-3">
      <nav-menu/>
    </div>
    <div class="col-12 col-md-9">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavMenu from "../components/NavMenu.vue"
</script>


<style scoped>

</style>
