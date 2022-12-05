<template>
  <div class="theme-switcher">
    <div class="theme-switcher__button" @click="onThemeSwitcherClick">
      <button
          :class="{btn}"
          class="theme-switcher__button__icon flex relative flex-col cursor-pointer
                 w-[28px] h-[28px] md:w-[40px] md:h-[40px]
                 transition ease-in-out duration-300 rounded-full"
      >
        <client-only>
          <transition-group :duration="200" name="slide-up">
            <span v-if="!theme.unknown && theme.value === 'dark'" class="material-icons-round m-auto">dark_mode</span>
            <span v-else-if="!theme.unknown" class="material-icons-round m-auto">light_mode</span>
          </transition-group>
        </client-only>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  btn?: boolean
}

defineProps<Props>()


import {useThemeStore} from "~/stores/themeStore";

const {theme} = useThemeStore()

const onThemeSwitcherClick = () => {
  if (theme.value === "light") {
    theme.preference = "dark"
  } else {
    theme.preference = "light"
  }
}
</script>

<style lang="scss" scoped>
.theme-switcher__button__icon.btn {
  background: var(--background-secondary);
  box-shadow: 0 0 7px var(--shadow-color);
}

.theme-switcher__button__icon {
  overflow: hidden;
  user-select: none;

  &:hover span {
    color: var(--accent);
  }

  span {
    font-size: 20px;
    transition: color .3s ease-in-out;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
}
</style>
