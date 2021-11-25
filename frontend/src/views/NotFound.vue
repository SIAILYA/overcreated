<template>
  <default-view>
    <div class="text-center">
      <h1>404</h1>
      <div>
        Кажется Вы заблудидись! Такой страницы нет!
      </div>
      <div class="back" @click="$router.go(-1)">
        Вернуться назад
      </div>
    </div>
  </default-view>
</template>

<script>

import DefaultView from "./DefaultView";

export default {
  name: 'NotFound',
  components: {
    DefaultView
  },
  beforeRouteEnter(to, from, next) {
    console.log(to.meta)
    document.documentElement.setAttribute("theme", to.meta.themeColor)
    next()
  }
};
</script>

<style scoped>
h1 {
  background: linear-gradient(45deg, var(--accent-main) 33%, var(--accent-second) 66%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20vh;
  margin: 0;
}

.back {
  border-radius: 50px;
  padding: 10px 15px;
  margin-top: 3vh;
  border: 1px solid rgba(255, 255, 255, .15);
  background: var(--background-secondary);
  cursor: pointer;
}
</style>
