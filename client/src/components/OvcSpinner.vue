<template>
  <div class="spinner__wrapper" :class="!show ? 'hide' : ''">
    <span class="spinner">
    </span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  show: Boolean
})
</script>

<style scoped>
.spinner__wrapper {
  width: 50px;
  height: 50px;
  overflow: hidden;
  transition: all .3s ease;
}

.spinner__wrapper.hide {
  height: 0;
  width: 0;
}

.spinner {
  background: var(--accent);
  color: var(--accent);
  animation: spinner 1s ease infinite;
  transition: all .3s ease;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 1000px;
}

@keyframes spinner {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: .8;
  }
}
</style>
