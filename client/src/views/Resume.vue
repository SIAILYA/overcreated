<template>
  <section class="container mt-3 pb-5">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="row">
          <div class="col-6">
            <img alt="" class="w-100" src="../assets/avatar.png">
          </div>
          <div class="col-6 my-name d-flex flex-column">
            <div>
              <h2>Самойлов Илья</h2>
              <h6>aka siailya</h6>
              <h6>aka overcreated</h6>
              <h6>aka samolyev</h6>
            </div>
            <div class="mt-auto">
              <a class="ovc-btn d-flex justify-content-center text-decoration-none flex-nowrap"
                 href="https://disk.yandex.ru/i/WDM1jsSOXCQbtA"
                 target="_blank">
                <span class="material-icons-round my-auto">download</span>
                <span class="my-auto text-nowrap">Резюме в PDF</span>
              </a>
            </div>
          </div>
        </div>

        <h1 class="mb-0 mt-4 text-center text-md-start">Web Developer</h1>
        <h5 class="webdev text-center text-md-start">И не только web</h5>

        <div class="mt-5">
          <h3>Какой я - мои <span style="color: var(--accent)">soft-skills</span></h3>
          <ul class="skills-list mb-0" :class="showMoreSoft ? 'show-more-skills' : ''">
            <li> Люблю открывать для себя новые области знаний и инструменты. Не только в области разработки, но и в других сферах жизни</li>
            <li> Хорошо владею русским языком – грамотно пишу, соблюдая грамматические и пунктуационные правила</li>
            <li> Английским владею на среднем уровне – могу читать большинство текстов, понимаю четкую речь, могу поддержать разговор на повседневные темы</li>
          </ul>
          <ul ref="soft_collapse" class="overflow-hidden skills" :class="skills.softCollapsed ? 'collapsed' : ''" :style="{height: skills.softClientHeight}">
            <li> Умею быстро принимать решения и брать на себя ответственность</li>
            <li> Когда что-то не получается, не психую и не бросаю задачу, а пытаюсь подойти к ней с другой стороны или решить её иными методами</li>
            <li> Легко могу одновременно держать в голове множество задач и работать над ними – например делать макет в фигме, ожидая сборки проекта или разговаривать по телефону, попутно готовя ужин</li>
            <li> Нацелен на результат и достижение цели. А если задача объемная, могу разбить её на подзадачи и работать над ними</li>
            <li> Когда требуется, могу поддержать разговор на множество тем – от серебрянного века до устройства ДВС</li>
            <li> Имею права категории B – умею водить машину и делаю это с удовольствием</li>
            <li> В любой сфере жизни руководствуюсь правилом «семь раз проверь – один раз отрежь»</li>
          </ul>
          <div class="justify-content-center d-flex pointer" style="color: var(--accent)" @click="skills.softCollapsed = !skills.softCollapsed">
            <div class="d-flex mx-auto">
              <span class="material-icons-round">{{ skills.softCollapsed ? "expand_more" : "expand_less" }}</span> Показать {{ skills.softCollapsed ? "больше" : "меньше" }}
            </div>
          </div>

          <hr>

          <h3 class="mt-3">Что я умею - мои <span style="color: var(--accent)">hard-skills</span></h3>
          <ul class="skills-list mb-0">
            <li> Уверенно владею HTML/CSS/JS – могу сверстать макет любой сложности</li>
            <li> Умею работать с веб-фреймворками и понимаю, зачем они нужны. Чаще всего работаю с Vue, но есть опыт работы с React и Svelte <i>(со вторым совсем немного)</i></li>
            <li> На хорошем уровне знаю Python и сторонние библиотеки – от Pillow и Flask до NumPy и асинхронности</li>
            <li> Понимаю принципы ООП и зачем они нужны</li>
          </ul>
          <ul ref="hard_collapse" class="overflow-hidden skills" :class="skills.hardCollapsed ? 'collapsed' : ''" :style="{height: skills.hardClientHeight}">
            <li> Работал с различными СУБД, как с SQL, так и с noSQL <i>(MongoDB - мой фаворит)</i>. Люблю ODM и уважаю ORM</li>
            <li> Могу упаковать приложение в Docker и настроить CI/CD <i>(например в Github Actions)</i></li>
            <li> Есть опыт работы с Linux и развертыванием приложений в нем, могу поднять Nginx или настроить Supervisor</li>
            <li> Имею начальные навыки UI/UX-дизайнера, умею работать в Figma, проектировать красивые и практичные интерфейсы</li>
          </ul>
          <div class="justify-content-center d-flex pointer" style="color: var(--accent)" @click="skills.hardCollapsed = !skills.hardCollapsed">
            <div class="d-flex mx-auto">
              <span class="material-icons-round">{{ skills.hardCollapsed ? "expand_more" : "expand_less" }}</span> Показать {{ skills.hardCollapsed ? "больше" : "меньше" }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";

const soft_collapse = ref(null)
const hard_collapse = ref(null)

const skills = reactive({
  softClientHeight: "auto",
  softCollapsed: false,
  hardClientHeight: "auto",
  hardCollapsed: false
})

onMounted(() => {
  //@ts-ignore
  skills.softClientHeight = soft_collapse.value.clientHeight + 'px'
  //@ts-ignore
  skills.hardClientHeight = hard_collapse.value.clientHeight + 'px'
  skills.softCollapsed = true
  skills.hardCollapsed = true
})
</script>

<style lang="scss" scoped>
.my-name {
  h2 {
    line-height: 1;
  }

  h6 {
    line-height: 1;
    margin: 0;
  }
}

.webdev {
  font-weight: 300;
}

.ovc-btn:hover {
  color: white;
}

.skills {
  transition: all .3s ease;
}

.skills.collapsed {
  height: 0!important;
}

.pointer {
  cursor: pointer;
}
</style>
