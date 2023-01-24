<template>
  <div class="ovc-select">
    <div class="ovc-select__input">
      {{ modelValue.label }}
    </div>
    <div class="ovc-select__options-dropdown">
      <div class="ovc-select__options-dropdown__options">
        <div
            v-for="option in options"
            :key="option.value"
            class="ovc-select__options-dropdown__options__option"
            @click="onSelect(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"])

interface Props {
  options: OptionItem[]
  modelValue: OptionItem
}

const props = defineProps<Props>()
const {options, modelValue} = toRefs(props)

const onSelect = (option: OptionItem) => {
  emit('update:modelValue', option.value)
}
</script>

<style scoped lang="scss">
.ovc-select__input {
  border: 1px solid var(--text-color);
  padding: 5px;
  cursor: pointer;
}

.ovc-select__options-dropdown {
  position: absolute;
  background-color: var(--background-color);
  border: 1px solid var(--text-color);
  padding: 5px;
  border-radius: 5px;
  z-index: 1;
}

.ovc-select__options-dropdown__options {
  display: flex;
  flex-direction: column;
}

.ovc-select__options-dropdown__options__option {
  padding: 5px;
  cursor: pointer;
}

.ovc-select__options-dropdown__options__option:hover {
  background-color: var(--text-color);
  color: var(--background-color);
}
</style>
