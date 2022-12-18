<template>
  <p class="mb-2">To expire token: {{ formatMinutesSeconds(untilExpire / 1000) }}</p>
  <!--  TODO: Renew token <button class="btn btn-warning w-100">Renew</button>-->
  <button class="btn btn-danger w-100 mt-2" @click="onClickLogout">Logout</button>
</template>

<script lang="ts" setup>
import {storeToRefs} from "pinia";
import {useTokenStore} from "../stores/tokenStore";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {formatMinutesSeconds} from "../utils/utils"

const {expireAt} = storeToRefs(useTokenStore())
const untilExpire = ref(0)
const router = useRouter()

const onClickLogout = () => {
  localStorage.removeItem("token")
  router.replace("/login")
}

const decreaseExpireTimer = () => {
  untilExpire.value = expireAt.value! - Date.now()
}

decreaseExpireTimer()
setInterval(decreaseExpireTimer, 1000)
</script>

<style scoped>

</style>
