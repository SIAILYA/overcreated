<template>
  <div class="theme-switcher">
    <div class="theme-switcher__button" @click="onThemeSwitcherClick">
      <button class="theme-switcher__button__icon flex relative flex-col cursor-pointer w-[40px] h-[40px]
          transition ease-in-out duration-300 rounded-full">
        <client-only>
          <transition-group name="slide-up" :duration="200">
            <span v-if="!theme.unknown && theme.value === 'dark'" class="material-icons-round m-auto">dark_mode</span>
            <span v-else-if="!theme.unknown" class="material-icons-round m-auto">light_mode</span>
          </transition-group>
        </client-only>
      </button>
    </div>
  </div>
</template>

<script setup>
import {useThemeStore} from "../stores/themeStore";

const {theme} = useThemeStore()

const onThemeSwitcherClick = () => {
  if (theme.value === "light") {
    theme.preference = "dark"
  } else {
    theme.preference = "light"
  }
}
</script>

<style scoped lang="scss">
.theme-switcher__button__icon {
  overflow: hidden;
  user-select: none;
  background: var(--background-secondary);
  box-shadow: 0 0 10px var(--shadow-color);

  &:hover {
    color: var(--accent);
    box-shadow: 0 0 15px 4px var(--shadow-color);
  }
}
</style>
