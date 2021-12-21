<template>
  <div class="row pb-4">
    <div class="col-12 col-lg-7">
      <div class="row">
        <div class="col-4 col-xl-4 col-md-5 col-lg-5">
          <img alt="" class="avatar" src="../assets/avatar.png">
        </div>
        <div class="col-8 col-lg-7 col-md-7">
          <div class="info">
            <h2 class="name">Самойлов Илья</h2>
            <div class="aka">aka siailya</div>
            <div class="aka">aka overcreated</div>
            <div class="webdev mt-2">Web Developer</div>
            <button class="mt-3 pdfdownload d-flex">
              <span class="material-icons-outlined me-2 my-auto">file_download</span>
              <a href="/downloads/resume.pdf" target="_blank" class="my-auto">Резюме в PDF</a>
            </button>
          </div>
        </div>
        <div class="about-me mt-4">
          <h2 class="headline">Немного обо мне</h2>
          <section>
            <div class="section-header d-flex">
              <span class="name my-auto">:hard_skills</span>
              <div class="line my-auto">
              </div>
            </div>
            <ul class="skills-list">
              <li>
                Уверенно владею HTML/CSS/JS – могу сверстать макет любой сложности
              </li>
              <li>
                Умею работать с веб-фреймворками. Чаще всего работаю с Vue, но есть опыт работы с
                другими фреймворками
              </li>
              <li>
                На хорошем уровне знаю Python и сторонние библиотеки – от Pillow до NumPy
              </li>
              <li>
                Понимаю принципы ООП, знаю что инкапсуляция - не «сокрытие данных», имею
                представление о паттернах проектирования
              </li>
              <li>
                Работал с различными СУБД, как с SQL, так и с noSQL (MongoDB - мой фаворит)
              </li>
              <li>
                Есть опыт работы с Linux и развертыванием приложений в нем, могу поднять Nginx или
                настроить Supervisor
              </li>
              <li>
                Имею начальные навыки UI/UX-дизайнера, умею работать в Figma, проектировать красивые
                и практичные интерфейсы
              </li>
            </ul>
          </section>
          <section class="mt-3">
            <div class="section-header d-flex">
              <span class="name my-auto">:soft-skills</span>
              <div class="line my-auto">
              </div>
            </div>
            <ul class="skills-list">
              <li>
                Люблю открывать для себя новые области знаний и инструменты. Не только в области
                разработки, но и в других сферах жизни
              </li>
              <li>
                Хорошо владею русским языком – грамотно пишу, соблюдая грамматические и
                пунктуационные правила
              </li>
              <li>
                Английским владею на среднем уровне – могу читать большинство текстов, понимаю
                четкую речь, могу поддержать разговор на повседневные темы
              </li>
              <li>
                Умею быстро принимать решения и брать на себя ответственность
              </li>
              <li>
                Когда что-то не получается, не психую и не бросаю задачу, а пытаюсь подойти к ней с
                другой стороны или решить её иными методами
              </li>
              <li>
                Легко могу одновременно держать в голове множество задач и работать над ними –
                например делать макет в фигме, ожидая сборки проекта или разговаривать по телефону,
                попутно готовя ужин
              </li>
              <li>
                Нацелен на результат и достижение цели. А если задача объемная, могу разбить её на
                подзадачи и работать над ними
              </li>
              <li>
                Когда требуется, могу поддержать разговор на множество тем – от музыки до устройства
                ДВС
              </li>
              <li>
                Имею права категории B – умею водить машину и делаю это с большим удовольствием
              </li>
              <li>
                В любой сфере жизни руководствуюсь правилом «семь раз проверь – один раз отрежь»
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-5 mt-4 mt-lg-0">
      <div class="my-skills">Мои скиллы</div>
      <div class="my-skills-ps">(то, как я их ощущаю)</div>
      <skills-radar class="skills-radar"/>
    </div>
  </div>
</template>

<script>

import SkillsRadar from "../components/SkillsRadar";

export default {
  name: "Contacts",
  components: {SkillsRadar},
  data() {
    return {
      stage: 1,
      feedbackInfo: {
        name: "",
        contact: "",
        question: ""
      }
    }
  },
  methods: {
    feedbackNext() {
      if (this.stage === 1 && this.feedbackInfo.name !== "") {
        this.stage = 2
      } else if (this.stage === 2 && this.feedbackInfo.contact !== "") {
        this.stage = 3
      } else if (this.stage === 3) {
        console.log("send")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../main";

.avatar {
  width: 100%;
  border-radius: 200px;
}

.name {
  margin-top: 0;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 6px;
}


.aka {
  font-weight: 300;
  margin: 3px 0;
}

.webdev {
  font-size: 24px;
  font-weight: 500;
}

.pdfdownload {
  background: linear-gradient(90deg, var(--accent-main-purple) 0%, var(--accent-second-purple) 100%);
  border: none;
  outline: none;
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-weight: 300;

  a {
    color: white;
    text-decoration: none;
  }
}

@media screen and (max-width: 768px) {
  .name {
    font-size: 24px;
  }

  .webdev {
    font-size: 20px
  }

  .pdfdownload {
    font-size: 16px;
  }
}

.my-skills {
  font-size: 32px;
  font-weight: 500;
}

.my-skills-ps {
  font-size: 12px;
}

.about-me {
  .headline {
    margin-top: 0;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 6px;
  }
}

@media screen and (max-width: 768px) {
  .about-me {
    .headline {
      font-size: 24px;
    }

    .section-header {
      .name {
        font-size: 18px;
      }

      .line {
        height: 8px;
      }
    }
  }

  .my-skills {
    font-size: 24px;
  }
}

.section-header {
  .name {
    font-size: 20px;
    margin-right: 8px;
  }

  .line {
    width: 30%;
    height: 10px;
    background: linear-gradient(90deg, var(--accent-main-purple) 0%, var(--accent-second-purple) 100%);
    display: inline-block;
    border-radius: 50px;
    transition: all 1s ease;

  }

  &:hover {
    .line {
      width: 80%;
    }
  }
}

.skills-list {
  li {
    margin-bottom: 5px;
  }
}

@media screen and (min-width: 650px){
  .skills-radar {
    margin-top: 5vh;
    width: 80%;
    margin-left: 10%;
  }
}
</style>
