<template>
  <router-view v-slot="{Component}">
    <keep-alive :include="['projects-list-view', 'CreateEditProjectView']">
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>

<script lang="ts" setup>
</script>

<style scoped>

</style>
