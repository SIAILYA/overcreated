<template>
  <div class="position-relative pb-5">
    <div class="page-caption text-center">
      <h2>Мой таймлайн</h2>
      <div class="w-50">
        На нём показан весь мой профессиональный опыт - со школы до настоящего момента:
        <br>где я работал и над какими проектами трудился
      </div>
    </div>

    <div class="categories d-flex justify-content-center flex-wrap">
      <div v-for="c in categories"
           :key="c"
           :class="chosenCategories.includes(c) && 'selected'"
           class="category mx-1 mb-2"
           :style="`background: ${categoriesColors[c][0]}`"
           @click="onCategoryToggle(c)"
      >
        <div class="category__inner">
          {{ c }}
        </div>
      </div>
    </div>

    <transition-group class="mt-5 timeline"
                      name="timeline" tag="div">
      <timeline-event v-for="(e, index) in shownEvents"
                      :key="e.title + e.caption"
                      :caption="e.caption"
                      :category="e.category"
                      :dates="e.dates"
                      :line-bottom="e.lineBottom && index !== (shownEvents.length - 1)"
                      :cat-colors="categoriesColors"
                      :line-top="e.lineTop"
                      :title="e.title"
                      class="event"
      ></timeline-event>
    </transition-group>
    <timeline-event big-line
                    caption="Я родился!"
                    class="event"
                    dashed
                    dates="Февраль'02"
                    line-top
                    category="Свой проект"
                    :cat-colors="categoriesColors"
                    title="Всем привет!"
    ></timeline-event>
  </div>
</template>

<script>
import TimelineEvent from "../components/TimelineEvent";

export default {
  name: "Timeline",
  components: {TimelineEvent},
  data() {
    return {
      categories: [
        "Образование", "Работа", "Хакатон", "Свой проект", "Фриланс"
      ],
      categoriesColors: {
        "Образование": ['#AD00C9', '#C7005F'],
        "Работа": ['#FF7A00', '#FFAC2F'],
        "Хакатон": ['#00A825', '#33C200'],
        "Свой проект": ['#0050C9', '#4A88FF'],
        "Фриланс": ['#7000FF', '#B02FFF'],
      },
      chosenCategories: ["Работа", "Образование", "Хакатон", "Свой проект"],
      events: [
        {
          category: "Хакатон",
          dates: "Апрель'22",
          title: "Победа в отборочном «Вездекоде-2022»",
          caption: "<span>команда FTIT</span> / <a href='https://vk.com/ftitdev' target='_blank'>1 место</a>",
          lineBottom: true
        },
        {
          category: "Работа",
          dates: "Январь'22",
          title: "Работа",
          caption: "<span>НИЦ ЭТУ СПб</span> / Техник-программист",
          lineBottom: true
        },
        {
          category: "Свой проект",
          dates: "Декабрь’21 - январь’22",
          title: "Свой проект",
          caption: "MemesGames",
          lineBottom: true
        },
        {
          category: "Хакатон",
          dates: "Ноябрь'21",
          title: "Хакатон «IronHack 2021»",
          caption: "<span>Команда FTIT</span> / <a href='https://vk.com/ftitdev' target='_blank'>проект «Каспийский Лотус»</a>",
          lineBottom: true
        },
        {
          category: "Хакатон",
          dates: "Октябрь'21",
          title: "Хакатон «MoreTech 3.0»",
          caption: "<span>Команда FTITN</span> / <a href='https://vk.com/ftitdev' target='_blank'>Финалисты</a>",
          lineBottom: true
        },
        {
          category: "Хакатон",
          dates: "Октябрь'21",
          title: "Хакатон «Вездекод 2021»",
          caption: "<span>Команда FTIT</span> / <a href='https://vk.com/ftitdev' target='_blank'>Финалисты</a>",
          lineBottom: true
        },
        {
          category: "Хакатон",
          dates: "Сентябрь'21",
          title: "Хакатон «UchiHack 2021»",
          caption: "<span>Команда FTITN</span> / <a href='https://vk.com/ftitdev' target='_blank'>Победители</a>",
          lineBottom: true
        },
        {
          category: "Работа",
          dates: "Сентябрь'21",
          title: "«Цифровой двойник»",
          caption: "Мини-приложение ВК, созданное вместе с РДКМ",
          lineBottom: true
        },
        {
          category: "Образование",
          dates: "Сентябрь'21",
          title: "Высшее образование",
          caption: "Перепоступил в <span>СЗИУ РАНХиГС</span> - Бизнес-информатика",
          lineBottom: true
        },
        {
          category: "Образование",
          dates: "Август - Сентябрь'21",
          title: "Курсы на Хекслете",
          caption: "Прошел курс <span>«Фронтенд-разработчик»</span>",
          lineBottom: true
        },
        {
          category: "Фриланс",
          dates: "Май - сентябрь'21",
          title: "Фриланс",
          caption: "Электрик24, BoisRouge и другие проекты",
          lineBottom: true
        },
        {
          category: "Свой проект",
          dates: "Февраль - апрель'21",
          title: "Свой проект",
          caption: "Чекдели",
          lineBottom: true
        },
        {
          category: "Хакатон",
          dates: "Февраль'21",
          title: "Хакатон «Charity Boost»",
          caption: "<span>Команда FTITN</span> / <a href='https://vk.com/ftitdev' target='_blank'>Призёры</a>",
          lineBottom: true
        },
        {
          category: "Хакатон",
          dates: "Сентябрь'20 - январь'21",
          title: "Конкурс «VK Fresh Code»",
          caption: "<span>Мини-приложение «Твоё общежитие»</span> / <a href='https://vk.com/ftitdev' target='_blank'>Победители</a>",
          lineBottom: true
        },
        {
          category: "Образование",
          dates: "Сентябрь'20",
          title: "Высшее образование",
          caption: "Поступил в <span>СПбГУПТД</span> - Инженер",
          lineBottom: true
        },
        {
          category: "Образование",
          dates: "Май'20 - Август'20",
          title: "Учусь делать VKMA",
          caption: "Остваиваю React, постигаю фронтенд-разработку",
          lineBottom: true
        },
        {
          category: "Образование",
          dates: "Май'20",
          title: "Среднее образование",
          caption: "Окончил <span>Лицей «АМТЭК» / Физ-мат</span>",
          lineBottom: true
        },
        {
          category: "Образование",
          dates: "Сентябрь'18 - Май'20",
          title: "Доп. образование",
          caption: "Окончил <span>Яндекс Лицей - Разработка на Python</span>",
          lineBottom: true
        },
        {
          category: "Свой проект",
          dates: "Сентябрь'19 - Май'20",
          title: "Первый пет-проект",
          caption: "Разрабатываю ScheduleFlow - бота для автоматизации школьного расписания",
          lineBottom: true
        },
      ]
    }
  },
  computed: {
    shownEvents() {
      return this.events.filter(e => {
        return this.chosenCategories.indexOf(e.category) !== -1
      })
    }
  },
  methods: {
    onCategoryToggle(category) {
      const categoryIndex = this.chosenCategories.indexOf(category)

      if (categoryIndex !== -1) {
        if (this.chosenCategories.length > 1) {
          this.chosenCategories.splice(categoryIndex, 1)
        }
      } else {
        this.chosenCategories.push(category)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../main";

.position-relative {
  position: relative;
}

.page-caption {
  margin-bottom: 20px;

  h2 {
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 18px;
      margin-bottom: .5rem;
    }

    div {
      font-size: 14px;
    }
  }
}

.category {
  padding: 2px;
  border-radius: 100px;
  position: relative;
  background: $accentGradient;
  cursor: pointer;

  .category__inner {
    padding: 8px 12px;
    border-radius: 100px;
    transition: all .3s ease;
  }

  &:not(.selected) {
    .category__inner {
      background: var(--background-primary);
      z-index: 0;
    }
  }
}

.event {
  transition: all .8s ease;
}
</style>

<style lang="scss">
.timeline {
  a {
    color: white
  }
}
</style>
