<template>
  <header class="ovc-header mx-auto pt-4">
    <div class="ovc-header__menu container flex justify-between">
      <div class="logo">

      </div>

      <menu class="nav flex">
        <ovc-menu-item v-for="menuItem in navigationMenu" :href="menuItem.href" class="mx-1.5">
          {{ menuItem.title }}
        </ovc-menu-item>
      </menu>

      <theme-switcher/>
    </div>
  </header>
</template>

<script setup>
import ThemeSwitcher from "~/components/theme-switcher";
import {navigationMenu} from "~/data/static/navigation-menu";

</script>

<style scoped>

</style>
