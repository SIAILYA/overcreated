<template>
  <div class="ovc-link" :class="checkActive && $route.path === to && 'active'">
    <router-link class="ovc-link__inner" v-bind="$attrs" :to="to">
      <slot/>
    </router-link>
    <div class="underline"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  to: {type: String, required: true},
  checkActive: Boolean
})
</script>

<style scoped lang="scss">
.ovc-link {
  position: relative;
  transition: all .3s ease;
  color: var(--text-color);
  font-size: 24px;
  font-weight: 400;

  .ovc-link__inner {
    color: inherit;
    text-decoration: none;
  }

  .underline {
    position: absolute;
    width: 0;
    height: 1.4px;
    background: var(--text-color);
    bottom: 0;
    left: 0;
    transition: all .3s ease;
  }

  &:hover {
    .underline {
      width: 100%;
    }
  }

  &.active {
    color: var(--accent);

    .underline {
      background: var(--accent);
    }
  }
}
</style>
