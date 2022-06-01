<template>
  <section class="container admin-panel">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3">
        <div class="side-menu d-flex flex-md-column flex-row mb-3">
          <router-link to="/admin/projects/list">Проекты</router-link>
          <router-link class="mt-0 mt-md-2 ms-3 ms-md-0" to="/admin/topics/list">Топики</router-link>
        </div>
      </div>
      <div class="col-12 col-md-8 col-lg-9">
        <router-view/>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";
import router from "../../router";

onMounted(() => {
  if (sessionStorage.getItem('login') === null) {
    router.push('/login')
  }
})
</script>

<style lang="scss" scoped>
.side-menu {
  @media screen and (min-width: 768px) {
    border-right: 1px solid var(--text-color);
  }
  @media screen and (max-width: 768px) {
    border-bottom: 1px solid var(--text-color);
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    transition: all .3s ease;
    font-size: 24px;

    &:hover {
      color: var(--accent);
    }
  }
}
</style>
