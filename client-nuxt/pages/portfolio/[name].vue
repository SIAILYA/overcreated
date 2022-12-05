<template>
  <div>
    {{route.params.name}}
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "accent-color-client",
  variant: "project"
})

const route = useRoute()
</script>

<style scoped>

</style>
