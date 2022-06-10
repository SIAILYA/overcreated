<template>
  <section class="container pb-5">
    <div class="row">
      <div class="col-12 col-md-6">
        <h1
            v-if="project.title"
            class="project-title"
        >
          <span :style="{color: project.color}">{{ project.title.slice(0, 1) }}</span>{{ project.title.slice(1) }}
        </h1>
        <i>
          {{project.description}}
        </i>

        <a :href="project.link" target="_blank" class="ovc-btn open-link my-4 text-center text-decoration-none d-flex" v-if="project.link">
          <span class="my-auto ms-auto">
            Посмотреть проект
          </span>
          <span class="material-icons-round my-auto me-auto ms-2">
            arrow_forward
          </span>
        </a>

        <div class="fd" v-if="project.fullDescription" v-html="marked(project.fullDescription)">
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="row">
          <div class="col-6 d-flex" v-if="project.github">
            <div class="me-2">
              <svg width="45" height="45" viewBox="0 0 57 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :fill="project.color" fill-rule="evenodd" clip-rule="evenodd" d="M28.4974 0C12.7615 0 0 12.6237 0 28.1969C0 40.6526 8.16535 51.2216 19.4905 54.9518C20.9164 55.2097 21.436 54.339 21.436 53.5913C21.436 52.9214 21.4115 51.1489 21.3975 48.7966C13.4701 50.4998 11.7975 45.0163 11.7975 45.0163C10.5011 41.7587 8.63251 40.8915 8.63251 40.8915C6.04486 39.1432 8.82846 39.1779 8.82846 39.1779C11.689 39.3769 13.1937 42.0841 13.1937 42.0841C15.7358 46.3924 19.8649 45.1478 21.4885 44.426C21.7475 42.6051 22.484 41.3622 23.2976 40.6578C16.9693 39.9446 10.3156 37.5266 10.3156 26.7221C10.3156 23.6428 11.4266 21.1278 13.2497 19.1562C12.9558 18.4431 11.9777 15.5766 13.5296 11.6942C13.5296 11.6942 15.9213 10.936 21.366 14.5831C23.6388 13.9582 26.0777 13.6466 28.5009 13.6345C30.9223 13.6466 33.3595 13.9582 35.6357 14.5831C41.077 10.936 43.4651 11.6942 43.4651 11.6942C45.0205 15.5766 44.0425 18.4431 43.7503 19.1562C45.5769 21.1278 46.6791 23.6428 46.6791 26.7221C46.6791 37.5543 40.0149 39.9377 33.6674 40.6353C34.6892 41.5059 35.6007 43.2265 35.6007 45.8575C35.6007 49.6257 35.5657 52.667 35.5657 53.5913C35.5657 54.346 36.0801 55.2235 37.5253 54.9483C48.8417 51.2112 57 40.6509 57 28.1969C57 12.6237 44.2385 0 28.4974 0Z"/>
              </svg>
            </div>
            <h3 class="mb-0 d-flex">
              <ovc-link :to="project.github" external class="external-link my-auto">GitHub</ovc-link>
            </h3>
          </div>
          <div class="col-6 d-flex" v-if="project.behance">
            <div class="me-2">
              <svg width="45" height="45" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="var(--accent)" d="M22.7999 22.7803C22.7999 20.707 21.389 20.707 21.389 20.707H20.6415H15.5847H15.5825V25.157H21.0288C21.9706 25.157 22.7999 24.8569 22.7999 22.7803Z"/>
                <path fill="var(--accent)" d="M36.2505 25.157C33.171 25.157 32.7422 28.2299 32.7422 28.2299H39.2928C39.2928 28.2299 39.3332 25.157 36.2505 25.157Z"/>
                <path fill="var(--accent)" d="M21.3896 28.2299H15.5864V33.5595H20.7272C20.8145 33.5595 20.9433 33.5639 21.0971 33.5595C21.9232 33.5409 23.4935 33.3031 23.4935 30.9689C23.4935 28.2037 21.3896 28.2299 21.3896 28.2299Z"/>
                <path fill="var(--accent)" d="M27.0909 0.207153C12.153 0.207153 0 12.3602 0 27.298C0 42.2359 12.153 54.3889 27.0909 54.3889C42.0287 54.3889 54.1817 42.2359 54.1817 27.298C54.1817 12.3602 42.0287 0.207153 27.0909 0.207153ZM31.8835 18.3379H40.1114V20.7943H31.8835V18.3379ZM27.7249 31.2188C27.7249 37.3046 21.3892 37.1049 21.3892 37.1049H15.586H15.4158H11.0138V17.1627H15.4158H15.586H21.3892C24.5439 17.1627 27.033 18.9054 27.033 22.4737C27.033 26.0409 23.9907 26.2679 23.9907 26.2679C28.001 26.2679 27.7249 31.2188 27.7249 31.2188ZM43.1156 30.8914H32.7816C32.7816 34.5973 36.291 34.3626 36.291 34.3626C39.6051 34.3626 39.4883 32.2184 39.4883 32.2184H42.9999C42.9999 37.9113 36.1754 37.5207 36.1754 37.5207C27.9879 37.5207 28.5138 29.8984 28.5138 29.8984C28.5138 29.8984 28.5073 22.2358 36.1754 22.2358C44.2472 22.2358 43.1156 30.8914 43.1156 30.8914Z"/>
              </svg>

            </div>
            <h3 class="mb-0 d-flex">
              <ovc-link :to="project.behance" external class="external-link my-auto">Behance</ovc-link>
            </h3>
          </div>
        </div>

        <div class="main-photo photo-card mt-4" v-if="project.pictures.length">
          <img :src="BACKEND + '/' + project.pictures[0]" alt="" class="w-100">
        </div>

        <div class="row">
          <div class="col-6 mt-3" v-for="pic in project.pictures.slice(1)">
            <div class="photo-card">
              <img :src="BACKEND + '/' + pic" alt="" class="w-100">
            </div>
          </div>
        </div>

        <h5 class="mt-5">Топики проекта</h5>
        <div class="d-flex flex-wrap">
          <div v-for="topic in project.topicsObjects" class="me-2 mt-2">
            <ovc-project-topic :topic="topic" v-if="topic" is-selected/>
          </div>
        </div>

        <h5 class="mt-5">Технологии проекта</h5>
        <ul>
          <li v-for="tech in project.techs">{{tech}}</li>
        </ul>
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>
import {onMounted, reactive} from "vue";
import {useRoute} from "vue-router";
import {Project} from "../typings/project";
import {BACKEND} from "../../config";
import {marked} from "marked";
import OvcLink from "../components/OvcLink.vue";
import OvcTopic from "../components/OvcTopic.vue";
import OvcProjectTopic from "../components/OvcProjectTopic.vue";

const route = useRoute()
const project = reactive(new Project())

onMounted(() => {
  project.slug = route.params.slug.toString()
  project.loadBySlug().then(() => {
    document.body.style.setProperty("--accent-project", project.color || "var(--accent)")
  })
})
</script>

<style lang="scss" scoped>
.project-title {
  span {
    font-size: 3rem;
  }
}

.photo-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 5px 0 var(--shadow-color);
  transition: all .3s ease;

  &:not(.main-photo) {
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    box-shadow: 0 0 8px 4px var(--shadow-color);
  }
}

.open-link {
  &:hover {
    color: var(--text-color);
    cursor: pointer;
  }
}

.external-link {
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
