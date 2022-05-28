<template>
  <div class="text-center pb-4">
    <!--    <h2 class="contacts-header">Контакты мои контакты</h2>-->

    <div class="row">
      <div class="col-12 col-lg-8 text-start contacts-list mt-lg-0 mt-3">
        <h3>Приоритетные способы связи</h3>

        <div class="priority">
          <div class="row">
            <div class="col-12 col-md-6 d-flex mb-3 mb-md-0">
              <img class="contact-img" src="../assets/tg.svg" alt="">
              <div>
                <div class="contact-header">@siailya</div>
                <div class="contact-secondary"><a target="_blank" href="https://t.me/siailya">t.me/siailya</a></div>
              </div>
            </div>
            <div class="col-12 col-md-6 d-flex mb-3 mb-md-0">
              <img class="contact-img" src="../assets/vk.svg" alt="">
              <div>
                <div class="contact-header">Самойлов Илья</div>
                <div class="contact-secondary"><a target="_blank" href="https://vk.com/siailya">vk.com/siailya</a></div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="mt-3 mt-lg-4">Еще можно</h3>

        <div class="more">
          <div class="row">
            <div class="col-12 col-md-6 d-flex mb-3 mb-md-0">
              <img class="contact-img" src="../assets/phone.svg" alt="">
              <div>
                <div class="contact-header">Позвонить</div>
                <div class="contact-secondary"><a target="_blank" href="tel:+7-999-516-63-83">+7-999-516-63-83</a></div>
              </div>
            </div>
            <div class="col-12 col-md-6 d-flex mb-3 mb-md-0">
              <img class="contact-img" src="../assets/mail.svg" alt="">
              <div>
                <div class="contact-header">Написать</div>
                <div class="contact-secondary"><a target="_blank" href="mailto:sia.ilya.dev@gmail.com">sia.ilya.dev@gmail.com</a></div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="mt-4 mt-lg-5">Мои рабочие и творческие пространства</h3>

        <div class="workspaces">
          <div class="mb-3 d-flex">
            <img class="contact-img" src="../assets/tg.svg" alt="">
            <div>
              <div class="contact-header">Телеграм-канал</div>
              <div class="contact-secondary"><a target="_blank" href="https://t.me/samolyev">t.me/samolyev</a></div>
            </div>
          </div>
          <div class="mb-3 d-flex">
            <img class="contact-img" src="../assets/gh.svg" alt="">
            <div>
              <div class="contact-header">GitHub</div>
              <div class="contact-secondary"><a target="_blank" href="https://github.com/SIAILYA">github.com/SIAILYA</a></div>
            </div>
          </div>
          <div class="mb-3 d-flex">
            <img class="contact-img" src="../assets/be.svg" alt="">
            <div>
              <div class="contact-header">Behance</div>
              <div class="contact-secondary"><a target="_blank" href="https://behance.net/siailya">behance.net/siailya</a></div>
            </div>
          </div>
        </div>
      </div>
<!--      <div class="col-12 col-lg-4">-->
<!--        <div class="feedback-card text-center">-->
<!--          <h2>Оставьте свои контакты</h2>-->
<!--          <span>свяжусь с Вами в ближайшее время!</span>-->
<!--          <div :style="'height: ' + stage * 44 + 'px'" class="mt-3 feedback-info">-->
<!--            <input v-if="stage >= 1" ref="fi_1" v-model="feedbackInfo.name" class="ovc-input"-->
<!--                   placeholder="Как к Вам обращаться?">-->
<!--            <input v-if="stage >= 2" ref="fi_2" v-model="feedbackInfo.contact" class="ovc-input"-->
<!--                   placeholder="Ваш телефон, телеграм и т.д.">-->
<!--            <input v-if="stage >= 3" ref="fi_3" v-model="feedbackInfo.question" class="ovc-input"-->
<!--                   placeholder="Можете задать вопрос или что-нибудь уточнить">-->
<!--          </div>-->
<!--          <div class="mt-3">-->
<!--            <button class="feedback-next" @click="feedbackNext">-->
<!--              {{-->
<!--                this.stage !== 3 ?-->
<!--                  'Дальше' : 'Отправить'-->
<!--              }}-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>

import axios from "axios";
import {BACKEND} from "../../backend.config";

export default {
  name: "Contacts",
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
      for (let i = 1; i <= this.stage; i++) {
        this.$refs["fi_" + i].classList.remove("invalid-ovc")
      }

      if (this.stage === 1 && this.feedbackInfo.name !== "") {
        this.stage = 2
      } else if (this.stage === 2 && this.feedbackInfo.contact !== "") {
        this.stage = 3
      } else if (this.stage === 3){
        axios.post(BACKEND + "/api/v1/send_request", this.feedbackInfo)
      } else {
        this.$refs["fi_" + this.stage].focus()
        this.$refs["fi_" + this.stage].classList.add("invalid-ovc")

        setTimeout(() => {
          this.$refs["fi_" + this.stage].classList.remove("invalid-ovc")
        }, 1500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../main";

.contacts-header {
  margin: 0;
  display: inline-block;
  font-weight: 500;
  background: linear-gradient(45deg, var(--accent-main-blue) 0%, var(--accent-second-blue) 66%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::selection {
    background: rgba(255, 255, 255, 0.3);
  }
}

.feedback-card {
  background: var(--background-secondary);
  padding: 20px;
  border-radius: 22px;
  text-align: center;
  transition: all .5s ease;

  &:hover {
    box-shadow: 0px 0px 12px 1px rgba(255, 255, 255, 0.15);
    transform: scale(1.01);
  }

  h2 {
    line-height: 1;
    margin: 0 0 10px;
    font-weight: 500;
  }

  span {
    font-weight: 300;
  }
}

.ovc-input {
  background: none;
  border: #4b4b4b solid 1.5px;
  border-radius: 30px;
  padding: 8px 6px;
  font-size: 16px;
  text-align: center;
  color: var(--text-color);
  margin-bottom: 10px;
  width: 80%;
  transition: all .5s ease;

  &:focus {
    outline: none;
  }
}

.invalid-ovc {
  border-color: #8e3b3b;
}

.feedback-info {
  transition: all .3s ease;
}

.feedback-next {
  background: linear-gradient(90deg, var(--accent-main-blue) 0%, var(--accent-second-blue) 100%);;
  outline: none;
  border: none;
  color: white;
  border-radius: 30px;
  padding: 8px 16px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    box-shadow: 0px 0px 12px 1px rgba(255, 255, 255, 0.15);
  }

  &:focus {
    box-shadow: 0px 0px 12px 1px rgba(255, 255, 255, 0.15);
  }
}

.contacts-list {
  text-align: left;
  h3 {
    font-weight: 500;
    margin-top: 0;
    font-size: 24px;
    margin-bottom: 12px;
  }
}

.contact-img {
  margin-right: 12px;
  width: 55px;
  height: 55px;
}

.contact-header {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 4px;
}

.contact-secondary {
  font-size: 18px;
  font-weight: 300;
  a {
    color: white;
    text-decoration: none;
    position: relative;

    &::after {
      content: "";
      transition: all .5s ease;
      position: absolute;
      width: 0;
      height: 1px;
      background: white;
      bottom: 0;
      left: 0;
    }

    &:hover::after {
      width: 100%;
    }
  }
}

@media screen and (max-width: 768px){
  .contact-img {
    margin-right: 10px;
    width: 45px;
    height: 45px;
  }

  .contact-header {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 4px;
  }

  .contact-secondary {
    font-size: 16px;
    font-weight: 300;
  }

  .contacts-list h3 {
    font-size: 22px;
  }
}
</style>
