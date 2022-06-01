<template>
  <section class="container mt-5">
    <h3 class="text-center">Витрина проектов</h3>
    <article class="text-center">Мои пет-проекты, учебные работы и разные фрилансные проекты, где я принимал учатие
    </article>

    <div class="projects-topics d-flex justify-content-center">
        {{ JSON.stringify(topics) }}
<!--      <ovc-topic color="#F2B3A4" @click="() => selectTopic('123')">123</ovc-topic>-->
    </div>

    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 col-xl-3">

      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import OvcTopic from "../components/OvcTopic.vue";
import {reactive, ref} from "vue";
import axios from "axios";

const topics = ref((await axios.get("https://overcreated.ru/api/v1/topics/get")).data)

function selectTopic(slug: String) {

}
</script>

<style scoped>

</style>
