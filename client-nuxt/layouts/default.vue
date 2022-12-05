<template>
  <div>
    <ovc-header/>
    <div class="view">
      <slot></slot>
    </div>
    <ovc-footer/>
  </div>
</template>

<script setup>
</script>

<style scoped>
.view {
  min-height: 100vh;
}
</style>
