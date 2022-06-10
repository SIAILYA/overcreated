<template>
  <header class="container position-relative">
    <div class="d-flex justify-content-center menu-items">
      <ovc-link size="l" check-active to="/timeline">
        Таймлайн
      </ovc-link>
      <ovc-link size="l" check-active to="/">
        Портфолио
      </ovc-link>
      <ovc-link size="l" check-active to="/contacts">
        Контакты
      </ovc-link>
      <ovc-link size="l" check-active to="/resume">
        Резюме
      </ovc-link>
    </div>

    <div class="theme-switcher d-flex flex-column" @click="onClickThemeVariantSwitcher">
      <transition-group name="slide-up" class="d-flex flex-column" :duration="200">
        <span v-if="currentThemeVariant === 'dark'" class="material-icons-outlined m-auto">dark_mode</span>
        <span v-else class="material-icons-outlined m-auto">light_mode</span>
      </transition-group>
    </div>
  </header>
</template>

<script lang="ts" setup>
import OvcLink from "./OvcLink.vue";
import {onMounted, Ref, ref} from "vue";

let currentThemeVariant: Ref<"light" | "dark"> = ref("dark")

function getThemeVariant(): "dark" | "light" {
  const savedThemeVariant: String | null = localStorage.getItem("themeVariant");
  let themeVariant: "dark" | "light";

  if (savedThemeVariant === null) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      themeVariant = "dark"
    } else {
      themeVariant = "light"
    }
  } else {
    themeVariant = savedThemeVariant as "light" | "dark"
  }

  return themeVariant
}

function setThemeVariant(themeVariantValue: "dark" | "light") {
  document.body.setAttribute("variant", themeVariantValue)
  localStorage.setItem("themeVariant", themeVariantValue);
  currentThemeVariant.value = themeVariantValue
}

function onClickThemeVariantSwitcher() {
  if (currentThemeVariant.value === "dark") {
    setThemeVariant("light")
  } else {
    setThemeVariant("dark")
  }
}

onMounted(() => {
  const themeVariant: "dark" | "light" = getThemeVariant()
  setThemeVariant(themeVariant)
})
</script>

<style lang="scss" scoped>
.menu-items {
  margin-top: 20px;

  * {
    margin-left: 8px;
    margin-right: 8px;
  }
}

.theme-switcher {
  overflow: hidden;
  position: absolute;
  user-select: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: var(--background-secondary);

  right: 25px;
  top: 0;
  border-radius: 100px;
  transition: all .3s ease;
  box-shadow: 0 0 10px var(--shadow-color);

  &:hover {
    color: var(--accent);
    box-shadow: 0 0 15px 4px var(--shadow-color);
  }
}

@media screen and (max-width: 768px) {
  .menu-items {
    padding-top: 60px;
  }
}

@media screen and (max-width: 576px) {
  .menu-items {
    overflow: auto;
    flex-wrap: wrap;
  }

  .theme-switcher {
    width: 32px;
    height: 32px;

    span {
      font-size: 20px;
    }
  }
}
</style>
