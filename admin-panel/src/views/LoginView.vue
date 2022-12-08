<template>
  <div class="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div class="card p-3 text-center">
      <h2 class="m-0">ovc admin panel</h2>
      <span class="fw-light">(скорее всего тебе нечего тут делать...)</span>

      <div class="d-flex flex-column mt-4">
        <input type="text" class="form-control" v-model="loginData.login">
        <input type="password" class="form-control mt-2" v-model="loginData.password">
        <button class="btn btn-primary mt-2" @click="onClickLoginSubmit">Вход</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {axiosInstance, parseJwt} from "../data/network";
import {useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import {useTokenStore} from "../stores/tokenStore";

const loginData = ref({
  login: "",
  password: ""
})
const router = useRouter()
const {expireAt} = storeToRefs(useTokenStore())

const onClickLoginSubmit = () => {
  axiosInstance.post("/auth/login", loginData.value)
    .then(response => {
      expireAt.value = parseJwt(response.data).exp * 1000
      axiosInstance.defaults.headers.common['Authorization'] = response.data
      localStorage.setItem("token", response.data)
      router.push("/")
    })
}

onMounted(() => {

})
</script>

<style scoped>

</style>
