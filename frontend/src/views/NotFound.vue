<template>
  <div class="text-center">
    <h1>404</h1>
    <div>
      Кажется Вы заблудидись! Такой страницы нет!
    </div>
    <div class="back" @click="$router.go(-1)">
      Вернуться назад
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  components: {
  }
};
</script>

<style scoped>
h1 {
  background: linear-gradient(45deg, var(--accent-main-red) 33%, var(--accent-second-red) 66%);
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
