<template>
  <router-view v-slot="{Component}">
    <keep-alive :include="['ProjectsListView']">
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>

<script lang="ts" setup>
</script>

<style scoped>

</style>
