<template>
  <div class="menu">
    <router-link class="menu-link" active-class="active-link" to="/" exact>Таймлайн</router-link>
    <router-link class="menu-link" exact-active-class="active-link" to="/contacts">Контакты</router-link>
    <router-link class="menu-link" exact-path exact-active-class="active-link" to="/portfolio">Портфолио</router-link>
<!--    <router-link class="menu-link" exact-active-class="active-link" to="/blog">Блог</router-link>-->
    <router-link class="menu-link" exact-active-class="active-link" to="/resume">Резюме</router-link>
  </div>
</template>

<script>
export default {
  name: 'Menu'
};
</script>

<style lang="scss" scoped>
@import "src/main";

.menu {
  display: flex;
  justify-content: center;
  margin-top: 4vh;
  user-select: none;
  overflow-x: auto;
}

@media screen and (max-width: 576px) {
  .menu {
    justify-content: flex-start;
  }
}


.menu-link {
  margin-left: 8px;
  margin-right: 8px;
  font-size: 24px;
  font-weight: 300;
  color: var(--text-color);
  text-decoration: none;
  transition: all .3s ease;
}

@media screen and (max-width: 576px) {
  .menu-link {
    font-size: 16px;
  }
}

.active-link {
  color: $accentSecond;
}
</style>
