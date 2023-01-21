<template>
  <div>
    <ovc-header/>
    <transition name="fade" appear>
      <div class="view mt-12">
        <slot></slot>
      </div>
    </transition>
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
