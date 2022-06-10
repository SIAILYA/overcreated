<template>
  <div
      :class="isSelected && 'selected'"
      :style="'border-color: ' + color + '; background: ' + color"
      class="topic__wrapper position-relative"
      @click="emit('click')"
  >
    <div :style="'color: ' + color" class="topic__inner">
      <slot></slot>
    </div>
    <div class="topic__back"></div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  color: {
    type: String,
    default: "#FF00000"
  },
  isSelected: Boolean
})

const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
.topic__wrapper {
  border-radius: 100px;
  border-width: 2px;
  padding: 6px 12px;
  border-style: solid;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  z-index: 10;
  //opacity: .7;
  transition: all .3s ease;

  &:not(.selected):hover {
    opacity: .8;
  }
}

.topic__back {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all .3s ease;
  left: 0;
  top: 0;
  z-index: -1;
  background: var(--background-primary);
}


.topic__inner {
  transition: all .3s ease;
  z-index: 10;
}

.selected {
  opacity: 1;

  &:hover {
    box-shadow: 0 0 10px var(--shadow-color);
  }

  .topic__inner {
    color: white !important;
  }

  .topic__back {
    right: 0;
    width: 0;
  }
}
</style>
