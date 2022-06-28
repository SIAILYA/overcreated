<template>
  <h5>Цитаты</h5>

  <div class="d-flex">
    <div class="w-100">
      <input type="text" class="ovc-input w-100" placeholder="Цитата" v-model="createQuote.quote">
      <input type="text" class="ovc-input w-100 mt-2" placeholder="Автор" v-model="createQuote.author">
    </div>
    <button class="ovc-btn ms-2" :disabled="!createQuote.quote" @click="onCreateQuote">
      Добавить
    </button>
  </div>

  <div class="mt-4">
    <div class="border-bottom py-2 d-flex" v-for="q in quotes">
      <div class="w-100">
        {{q.quote}} {{q.author ? "—" : ""}} {{q.author}}
      </div>
      <button class="ovc-btn bg-danger" @click="onDeleteQuote(q._id)">
        Удалить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import {BACK_API} from "../../../config";
import {onMounted, reactive, Ref, ref} from "vue";

const quotes: Ref<Array<any>> = ref([])
const createQuote = reactive({
  quote: "",
  author: ""
})

const onCreateQuote = () => {
  axios.post(BACK_API + "quotes/create", createQuote).then(() => {
    loadQuotes()
  })

  createQuote.quote = ""
  createQuote.author = ""
}

const onDeleteQuote = (qid: string) => {
  axios.delete(BACK_API + "quotes/delete/" + qid).then(() => {
    loadQuotes()
  })
}

const loadQuotes = () => {
  axios.get(BACK_API + "quotes").then(r => {
    quotes.value = r.data
  })
}


onMounted(() => {
  loadQuotes()
})
</script>

<style scoped>

</style>
