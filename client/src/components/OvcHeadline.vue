<template>
  <main class="headline container d-flex justify-content-center flex-column">
    <div class="headline__inner mx-auto position-relative">
      <h1 class="m-0" @click="onHeadlineClick">over<span v-for="l in ['c', 'r', 'e', 'a', 't', 'e']">{{ l }}</span>d
      </h1>
      <div class="line"></div>
    </div>
    <div ref="quoteElement" class="quote mt-lg-4 mb-lg-4 mt-3 mb-3">
      {{ quote }}
    </div>
  </main>
</template>

<script lang="ts" setup>
import quotesList from "../assets/quotes.json"
import {Ref, ref} from "vue";

const isQuoteActive: Ref<Boolean> = ref(false)
const quote: Ref<String | null> = ref(null)
const quoteElement: Ref<HTMLElement | null> = ref(null)
let quoteTimer: ReturnType<typeof setTimeout> | null = null


function onHeadlineClick() {
  if (isQuoteActive.value) {
    hideQuote()

    setTimeout(() => {
      showQuote()
    }, 300)
  } else {
    showQuote()
  }
}

function showQuote() {
  quote.value = getRandomQuote()
  quoteElement.value ? quoteElement.value?.classList.add("opened") : undefined
  isQuoteActive.value = true

  quoteTimer = setTimeout(() => {
    hideQuote()
  }, 3000)
}

function hideQuote() {
  if (quoteTimer) {
    clearTimeout(quoteTimer)
  }

  quoteElement.value ? quoteElement.value?.classList.remove("opened") : undefined
  isQuoteActive.value = false
}

function getRandomQuote(): String {
  let generatedQuote: String = quotesList[Math.floor(Math.random() * quotesList.length)]

  while (generatedQuote === quote.value) {
    generatedQuote = quotesList[Math.floor(Math.random() * quotesList.length)]
  }

  return generatedQuote
}
</script>

<style lang="scss" scoped>
.headline {
  margin-top: 10vh;
}

h1 {
  user-select: none;
  font-size: 98px;
  font-weight: 450;

  span {
    transition: all .3s ease;
    color: var(--accent);

    &:hover {
      color: var(--text-color)
    }
  }
}

.headline__inner {
  cursor: pointer;

  .line {
    position: absolute;
    width: 25%;
    height: 8px;
    bottom: 0;
    transition: width 1.2s ease, background-color .3s ease;
    border-radius: 100px;
    background: var(--accent);
  }

  &:hover {
    .line {
      width: 100%;
    }
  }
}

.quote {
  transition: all .3s ease;
  overflow: hidden;
  text-align: center;
  height: 0;
}

.quote.opened {
  height: 25px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 64px;
  }

  .headline__inner .line {
    height: 6px;
  }

  .headline {
    margin-top: 7vh;
  }

  .quote.opened {
    height: 48px;
  }
}

@media screen and (max-width: 567px) {
  h1 {
    font-size: 48px;
  }

  .headline__inner .line {
    height: 6px;
  }
}
</style>
