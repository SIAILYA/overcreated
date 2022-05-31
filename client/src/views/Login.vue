<template>
  <section class="container d-flex justify-content-center">
    <div class="admin-login d-flex flex-column mt-5 text-center">
      <input v-model="loginData.login" class="login" placeholder="Логин" type="text">
      <input v-model="loginData.key" class="password mt-2 mb-2" placeholder="Пароль" type="password">
      <span v-if="loginError" class="text-error">Ошибка логина!</span>
      <button class="mt-2 submit" @click="onSubmit">
        Войти
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import axios from "axios";
import {BACKEND} from "../../config";
import router from "../router";

const loginData = reactive({
  login: "",
  key: ""
})
const loginError = ref(false)

const onSubmit = () => {
  console.log(loginData)

  axios.post(BACKEND + "/api/login", loginData)
      .then(() => {
        router.push("/admin")
      })
      .catch(() => {
        loginError.value = true
      })
}
</script>

<style lang="scss" scoped>
.admin-login {
  input {
    background: none;
    border: var(--text-color) 1px solid;
    border-radius: 4px;
    padding: 4px 8px;
    color: var(--text-color);
    transition: all .3s ease;

    &:focus {
      outline: none;
      border-color: var(--accent);
    }
  }

  button {
    background: var(--accent);
    outline: none;
    border: none;
    padding: 6px 12px;
    border-radius: 10px;
    color: var(--background-secondary);
    transition: all .15s ease;

    &:active {
      filter: brightness(0.5);
    }

    &:disabled {
      filter: grayscale(1);
    }
  }
}

.text-error {
  color: red;
}
</style>
