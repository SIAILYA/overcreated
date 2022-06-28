<template>
  <section>
    <h3 class="text-center">Сборник цитат</h3>

    <div class="mt-5 row">
      <div class="col-12 col-md-8 col-lg-6 offset-0 offset-md-2 offset-lg-3">
        <div class="quote d-flex flex-column" v-for="q in quotes" :key="q._id">
          <p>{{q.quote}}</p>
          <div class="ms-auto author" v-if="q.author">
            {{q.author}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import axios from "axios";
import {BACK_API} from "../../config";

const quotes: Ref<Array<any>> = ref([])

const loadQuotes = () => {
  axios.get(BACK_API + "quotes").then(r => {
    quotes.value = r.data
  })
}


onMounted(() => {
  loadQuotes()
})
</script>

<style scoped lang="scss">
.quote {
  border-bottom: 1px solid rgba(125, 125, 125, .4);
  padding: 12px 8px;

  p {
    margin-bottom: 4px;
  }

  .author {
    font-style: italic;
    font-size: 14px;
  }
}
</style>
