<template>
  <component :is="layoutComponent">
    <router-view/>
  </component>
  <div id="messages_box">
    <transition-group
        class="d-flex flex-column"
        name="messages-list"
        tag="div"
    >
      <component :is="m" v-for="m in useRootStore().messages" :key="m.props.key"/>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {useRouter} from "vue-router";
import {useTokenStore} from "./stores/tokenStore";

import EmptyLayout from "./layout/EmptyLayout.vue"
import MainLayout from "./layout/MainLayout.vue"
import {useRootStore} from "./stores/rootStore";

const router = useRouter()

const {checkSavedToken} = useTokenStore()

const layoutComponent = computed(() => {
  if (router.currentRoute.value.meta.layout === "main") {
    return MainLayout
  }

  return EmptyLayout
})

checkSavedToken()
    .then(() => {
      // router.push(router.currentRoute.value.fullPath)
    })
    .catch(() => {
      router.replace("/login")
    })
</script>

<style lang="scss">
#messages_box {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 300px;
  z-index: 999;

  .alert {
    margin-bottom: 8px;
    transition: all .3s ease;
    opacity: .8;
    animation: slide-in .3s ease forwards;

    &:hover {
      opacity: 1;
    }

    &-primary {
      box-shadow: 0 0 10px 0 rgba(12, 12, 198, 0.20);
    }
  }
}

.messages-list-enter,
.messages-list-leave-to {
  animation: none;
  opacity: 0;
  transform: translateY(30px);
}

.messages-list-leave-active {
  position: absolute;
}

@keyframes slide-in {
  0% {
    transform: translateX(30px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
