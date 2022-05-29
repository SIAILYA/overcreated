<template>
  <div :class="(checkActive && $route.path === to ? 'active ' : ' ') + ' ' + size" class="ovc-link">
    <router-link :to="to" class="ovc-link__inner" v-bind="$attrs">
      <slot/>
    </router-link>
    <div class="underline"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  to: {type: String, required: true},
  checkActive: Boolean,
  size: {type: String, default: "default"}
})
</script>

<style lang="scss" scoped>
.ovc-link.l {
  font-size: 24px;
  font-weight: 400;
}

@media screen and (max-width: 768px) {
  .ovc-link.l {
    font-size: 20px;
  }
}

@media screen and (max-width: 576px) {
  .ovc-link.l {
    font-size: 18px;
  }
}

.ovc-link {
  position: relative;
  transition: all .3s ease;
  color: var(--text-color);

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
