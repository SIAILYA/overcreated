<template>
  <div class="d-flex flex-column">
    <div ref="header" class="overcreated-header text-center mx-auto" @click="toggleQuote">
      <h1 class="header">overcreated</h1>
      <div class="d-flex">
          <span v-if="this.$route.meta.headerSection" ref="headline"
                class="header-section d-flex my-auto">:{{ this.$route.meta.headerSection }}
          </span>
        <div ref="header_line" class="line d-flex my-auto"
             style="width: 0; transition: all .3s ease"></div>
      </div>
    </div>
    <span ref="quote" class="quote p-relative">
        <span ref="quote_inner" class="quote_inner">{{ activeQuote }}</span>
        <div ref="quote_appear" class="quote-appear p-absolute"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'OvercreatedHeader',
  data() {
    return {
      quotes: [
        'Если горе от ума - значит счастье от безумия.',
        'Служить бы рад, прислуживаться тошно.',
        'In vino veritas, in aqua sanitas.',
        'Я предлагаю всем нам нажраться в хлам!',
        'Нам чужого не надо, но своё мы возьмём, чьё бы оно ни было!',
        'Я недавно пытался задуматься... Задуматься не получилось.',
        'Exceptio probat regulam.',
        'О времена! О нравы!',
        'Кто боится других, тот раб, хотя он этого не замечает.',
        'Признавшись в своей слабости, человек становится сильным.',
        'Живи как пишешь, и пиши как живешь.',
        'От ума до рассудка гораздо дальше, чем полагают.',
        'Кто скрывает свои ошибки, тот хочет их повторить.',
        'Рискует больше всех тот, кто никогда не рискует',
        'Простота — необходимое условие прекрасного.',
        'Nosce te ipsum',
        'Стань таким, каким ты хочешь видеть мир',
        'Если без образования бездарь, то и с ним тоже, только тебе больше инфы сказали ненужной',
        'В попытках копирования теряется творчество',
        'Если долго жать на Ctr+C, то Ctr+C нажмет тебя',
        'Не так страшны первые 80% проекта, как вторые 80% проекта'
      ],
      activeQuote: '',
      quoteTimer: 0,
      quoteChange: true,
      prevSection: ""
    };
  },
  methods: {
    toggleQuote(e) {
      e.stopPropagation();
      if (this.quoteChange) {
        clearTimeout(this.quoteTimer);

        this.showQuote(this.quotes[Math.floor(Math.random() * this.quotes.length)]);

        this.quoteTimer = setTimeout(() => {
          this.clearQuote();
        }, 2500);
      }
    },
    showQuote(quote) {
      this.activeQuote = quote;
      this.$refs.quote_inner.classList.add('quote-showed');
      this.quoteChange = false;
    },
    clearQuote() {
      this.$refs.quote_inner.classList.remove('quote-showed');
      this.quoteChange = true;
    },
  },
  mounted() {
    this.$refs.header_line.style.transition = ' all .3s ease, width 1.2s';
    setTimeout(() => {
      this.$refs.header_line.style.width = '25%';
    }, 200);

    this.$refs.header.addEventListener('mouseenter', () => {
      this.$refs.header_line.style.width = '100%';
    });
    this.$refs.header.addEventListener('mouseleave', () => {
      this.$refs.header_line.style.width = '25%';
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from)
    next()
  }
};
</script>

<style lang="scss" scoped>
@import "src/main";

.overcreated-header {
  margin-top: 10vh;
  cursor: pointer;
}

.header {
  font-size: 112px;
  color: $textColor;
  margin: 0;
  line-height: 1;
}

@keyframes line-growth {
  0% {
    width: 0;
  }

  100% {
    width: 25%;
  }
}

.line {
  height: 10px;
  border-radius: 50px;
  background: $accentGradient;
  transition: all .3s ease;
}

html[theme="green"] {
  .line {
    background: $accentSecond;
  }
}

html[theme="blue"] {
  .line {
    background: $accentSecond;
  }
}

html[theme="red"] {
  .line {
    background: $accentSecond;
  }
}

.header-section {
  margin-right: 10px;
  font-size: 20px;
}

.quote {
  margin-top: 3vh;
  //width: 80%;
  //margin-left: 10%;
  text-align: center;
  z-index: 2;
  transition: all .5s ease;
  height: 30px;
  padding-bottom: 32px;
}

.quote_inner {
  height: 0;
  font-size: 18px;
  word-break: break-word;
  white-space: pre-wrap;
  overflow: hidden;
  transition: all .5s ease;
  display: block;
}

.quote-appear {
  width: 0px;
  height: 0px;
  left: 50%;
  top: 20px;
  border-radius: 100px;
  overflow: hidden;
  z-index: -1;
}

.quote-appear-show {
  animation: quote-appear-pulse 2.5s ease;
}

.quote-showed {
  height: 30px;
}

@media screen and (max-width: 992px) {
  .header {
    font-size: 64px;
  }

  .quote-showed {
    height: 42px;
  }
}

@media screen and (max-width: 768px) {
  .header {
    font-size: 48px;
  }

}

@media screen and (max-width: 576px) {
  .header {
    font-size: 36px;
  }

  .line {
    height: 6px;
  }

  .header-section {
    font-size: 16px;
  }

  .quote_inner {
    font-size: 14px;
  }

  .quote-showed {
    height: 54px;
  }
}
</style>
