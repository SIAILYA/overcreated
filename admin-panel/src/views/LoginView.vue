<template>
  <div class="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div class="card p-3 text-center">
      <h2 class="m-0">ovc admin panel</h2>
      <span class="fw-light">(скорее всего тебе нечего тут делать...)</span>

      <div class="d-flex flex-column mt-4">
        <input v-model="loginData.login" class="form-control" type="text">
        <input v-model="loginData.password" class="form-control mt-2" type="password">
        <button class="btn btn-primary mt-2" @click="onClickLoginSubmit">Вход</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

import {axiosInstance} from "@data/network";
import {useTokenStore} from "@stores/tokenStore";

const loginData = ref({
  login: "",
  password: ""
})

const router = useRouter()
const {setToken} = useTokenStore()

const onClickLoginSubmit = async () => {
  const response = await axiosInstance.post("/auth/login", loginData.value)
  await setToken(response.data)
  await router.push("/")
}
</script>

<style scoped>

</style>
