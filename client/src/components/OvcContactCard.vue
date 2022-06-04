<template>
  <div class="row">
    <div class="col-2 col-md-3">
      <slot name="icon" class="w-100"></slot>
    </div>

    <div class="col-10 col-md-9">
      <h3 class="mb-1">
        <slot></slot>
      </h3>
      <p class="m-0">
        <slot name="caption"></slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>

</style>
