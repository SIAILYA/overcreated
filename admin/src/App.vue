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
      <component :is="m" v-for="m in useRootStore().messages" :key="m.props?.key"/>
    </transition-group>
  </div>

  <modal-window :show="useRootStore().confirm.visible">
    <span class="mb-2 fw-bold d-block">{{ useRootStore().confirm.question }}</span>

    <div class="d-flex">
      <button
          class="btn w-100 btn-success me-1"
          @click="useRootStore().confirm.onConfirm()"
      >
        Yes
      </button>
      <button
          class="btn w-100 btn-danger ms-1"
          @click="useRootStore().confirm.onCancel()"
      >
        No
      </button>
    </div>
  </modal-window>
</template>

<script lang="ts" setup>
import {computed} from "vue";

import EmptyLayout from "@/layout/EmptyLayout.vue"
import MainLayout from "@/layout/MainLayout.vue"
import ModalWindow from "@components/ModalWindow.vue";

import {useRouter} from "vue-router";
import {useTokenStore} from "@stores/tokenStore";
import {useRootStore} from "@stores/rootStore";
import {useMessage} from "@/utils/useMessage";

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
      useMessage().error("You are not authorized")
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

.fade-enter-active,
.fade-leave-active {
  transition: all .3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
