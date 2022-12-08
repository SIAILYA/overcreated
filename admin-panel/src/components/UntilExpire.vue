<template>
  To expire token: {{ formatTime(untilExpire / 1000) }}
</template>

<script lang="ts" setup>
import {storeToRefs} from "pinia";
import {useTokenStore} from "../stores/tokenStore";
import {onMounted, ref} from "vue";

const {expireAt} = storeToRefs(useTokenStore())
const untilExpire = ref(0)

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds.toFixed(0)}`
}

onMounted(() => {
  setInterval(() => {
    untilExpire.value = expireAt.value! - Date.now()
  }, 1000)
})
</script>

<style scoped>

</style>
