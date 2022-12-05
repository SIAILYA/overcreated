<template>
  <header :class="{'scrolled': isScrolled}" class="ovc-header mx-auto">
    <div class="ovc-header__menu fixed w-full py-3.5">
      <div class="container flex justify-between">
        <div class="logo">
          ovc
        </div>

        <menu class="nav flex">
          <ovc-menu-item v-for="menuItem in navigationMenu" :href="menuItem.href" class="mx-1.5">
            {{ menuItem.title }}
          </ovc-menu-item>
        </menu>

        <theme-switcher/>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import ThemeSwitcher from "~/components/theme-switcher";
import {navigationMenu} from "~/data/static/navigation-menu";

const scrollTop: Ref<number> = ref(0)

const isScrolled: ComputedRef<boolean> = computed(() => {
  return scrollTop.value > 5
})

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollTop.value = window.scrollY
  });

  scrollTop.value = window.scrollY
})
</script>

<style scoped>
.ovc-header.scrolled .ovc-header__menu {
  backdrop-filter: blur(7px);
}

.dark-mode body .ovc-header .ovc-header__menu {
  background: transparent;
  border-bottom: transparent solid 0;
}

.dark-mode body .ovc-header.scrolled .ovc-header__menu {
  background: rgba(21, 21, 21, .6);
  border-bottom: rgba(120, 120, 120, .4) solid 1px;
}

.light-mode body .ovc-header.scrolled .ovc-header__menu {
  background: rgba(240, 240, 240, .5);
  border-bottom: rgba(120, 120, 120, .4) solid 1px;
}

.ovc-header .ovc-header__menu {
  transition: background .1s ease-in-out,
  backdrop-filter .1s ease-in-out,
  border-bottom-color .1s ease-in-out,
  border-bottom-width .1s ease-in-out;
}
</style>
