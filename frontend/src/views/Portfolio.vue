<template>
  <default-view>
    <div ref="topics" :class="getAvailableTopics.length && 'show-topics'"
         class="topics-pills d-flex">
      <topic-pill v-for="topic in getAvailableTopics"
                  :key="topic._id.toString()"
                  :color="topic.color"
                  :name="topic.name"
                  :slug="topic.slug"
      />
    </div>
    <div :class="getProjectsLoading ? 'show-spinner' : ''" class="d-flex spinner__wrapper">
      <loading-spinner class="mx-auto projects-loading"></loading-spinner>
    </div>
    <transition duration="300" mode="out-in" name="fade">
      <div v-if="getProjects.length === 0 && !getProjectsLoading"
           class="d-block text-center child-view mx-auto">
        <h3 class="text-center not-found">
          Увы, ничего не нашлось
        </h3>
      </div>
      <transition-group v-else class="child-view projects-list d-flex flex-wrap"
                        name="projects-list" tag="div">
        <div
          v-for="(project) in getProjects"
          :key="project._id"
          class="project-card"
        >
          <!--          TODO: Сделать ссылку на проект-->
          <!--          tag="div"-->
          <!--          :to="'/project/' + project.slug"-->
          <div class="project-card__inner">
            <h2 :style="{
              background: `linear-gradient(45deg, ${project.color[0] || '#FFF'} 33%, ${ project.color[1] || '#FFF' } 66%, #8AA9D6)`,
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent'
             }"
            >
              {{ project.name }}
            </h2>
            <span class="d-block">
            {{ project.shortDescription }}
          </span>
            <div class="mt-auto">
              <div class="d-flex my-1 text-overflow-ellipsis">
                <span class="material-icons-outlined my-auto me-2">schedule</span>
                <span class=" my-auto">~{{ project.developTime }} часов</span>
              </div>
              <div class="d-flex my-1 text-overflow-ellipsis">
                <span class="material-icons-outlined my-auto me-2">reorder</span>
                <span class=" my-auto">{{ project.techs.join(", ") }}</span>
              </div>
              <div class="d-flex my-1 text-overflow-ellipsis">
                <span class="material-icons-outlined my-auto me-2">link</span>
                <div class=" my-auto">{{ project.demoLink }}</div>
              </div>
            </div>
            <div class="d-flex mini-topics">
              <div
                v-for="projectTopic in project.topics"
                :key="projectTopic.color[1]"
                :style="{background:
              `linear-gradient(93.97deg,
              ${projectTopic.color[0]} 6.33%,
              ${projectTopic.color[1]} 94.4%)`
                }"
                class="mini-topic"
                @mouseenter="(e) => {showPopUp(e, projectTopic.name)}"
                @mouseleave="hidePopUp"
              >
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </transition>
    <div ref="popup_topic" class="popup-topic">{{ popupTopic }}</div>
  </default-view>
</template>

<script>
import DefaultView from './DefaultView';
import TopicPill from '../components/TopicPill';
import {mapActions, mapGetters} from "vuex";
import LoadingSpinner from "../components/LoadingSpinner";

export default {
  name: 'Portfolio',
  components: {
    LoadingSpinner,
    TopicPill,
    DefaultView
  },
  data() {
    return {
      popupTopic: ""
    };
  },
  computed: {
    ...mapGetters(["getAvailableTopics", "getSelectedTopics", "getProjects",
      "getProjectsLoading", "getProjectsLoading"])
  },
  methods: {
    ...mapActions(["loadTopics", "loadProjects"]),
    showPopUp(ev, name) {
      const [x, y] = [ev.clientX, ev.clientY]

      this.popupTopic = name
      this.$refs.popup_topic.style.left = x + "px"
      this.$refs.popup_topic.style.top = y + "px"
      this.$refs.popup_topic.style.opacity = "1"
    },
    hidePopUp() {
      this.$refs.popup_topic.style.opacity = "0"
    }
  },
  mounted() {
    if (this.getAvailableTopics.length === 0) this.loadTopics().then(() => {
      if (Object.keys(this.$route.query).length > 0) {
        this.$store.commit("setSelectedTopics", Object.keys(this.$route.query))
      } else {
        this.$store.commit("setSelectedTopics", this.getAvailableTopics
          .filter(topic => topic.defaultSelected)
          .map(topic => topic.slug))
      }

      this.loadProjects()
    })
  },
  beforeRouteEnter(to, from, next) {
    console.log(to.meta)
    document.documentElement.setAttribute("theme", to.meta.themeColor)
    next()
  }
};
</script>

<style lang="scss" scoped>
@import "../animations";

.topics-pills {
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  z-index: -1;
  transform: translateY(-15vh);
  transition: all 1s ease;

  div {
    margin-left: 8px;
    margin-right: 8px;
  }
}

.show-topics {
  opacity: 1;
  transform: translateY(0);
}

.projects-list {
  position: relative;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 90%;
  margin: 4vh auto 0;
}

$cardsAtRow: 4;

.project-card {
  transition: all .8s ease;
  width: calc((100% - 3% * $cardsAtRow) / $cardsAtRow);
  text-align: center;
  padding: 0 1.5% 4vh;
  margin-bottom: 4vh;
  display: block;
  cursor: pointer;
  //height: 100%;
  flex: 0 1 auto;

  h2 {
    margin: 0;
    user-select: none;
  }

  span {
    margin-top: 2vh;
    text-align: left;
  }
}

.project-card__inner {
  background: #212121;
  border-radius: 25px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, .2);
  height: 100%;
  display: flex;
  flex-direction: column;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all .5s ease;
}

.project-card__inner:hover {
  box-shadow: 0px 0px 12px 1px rgba(255, 255, 255, 0.15);
  transform: translateY(-10px);
}

.material-icons-outlined {
  margin-right: 6px;
}

.projects-loading {
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 1s ease;
  transition-delay: .5s;
}

.spinner__wrapper {
  margin: 0;
  transition: all 1s ease;
  transition-delay: .5s;
}

.show-spinner {
  .projects-loading {
    margin: 2vh 0;
    height: 5vh;
    opacity: 0.5;
  }

  .spinner__wrapper {
    margin: 2vh 0;
  }
}

.text-overflow-ellipsis {
  div, span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.mini-topics {
  margin-top: 1vh;
}

.mini-topic {
  opacity: .65;
  width: 1.5vh;
  height: 1.5vh;
  border-radius: 50px;
  margin-right: 0.6vh;
  transition: all .3s ease;
}

.mini-topic:hover {
  opacity: 1;
}

.popup-topic {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  color: white;
  font-size: 12px;
  transition: all .3s ease;
  user-select: none;
  pointer-events: none;
  padding: 5px 8px;
  opacity: 0;
}

.not-found {
  margin-top: 4vh;
  font-size: 24px;
  font-weight: 500;
}

@media screen and (max-width: 1400px) {
  $cardsAtRow: 3;

  .project-card {
    width: calc((100% - 3% * $cardsAtRow) / $cardsAtRow);

    h2 {
      font-size: 22px;
    }
  }

  .projects-list {
    width: 100%;
  }
}

@media screen and (max-width: 1000px) {
  $cardsAtRow: 2;

  .project-card {
    width: calc((100% - 3% * $cardsAtRow) / $cardsAtRow);

    h2 {
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 860px) {
  .topics-pills {
    width: 80%;

    div {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  .project-card {
    margin-bottom: 3.5vh;
    padding-bottom: 3.5vh;
  }
}

@media screen and (max-width: 700px) {
  .topics-pills {
    width: 100%;

    div {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  $cardsAtRow: 1;

  .project-card {
    width: calc((100% - 3% * $cardsAtRow) / $cardsAtRow);
    padding: 0 1.5% 9%;
    margin-bottom: 9%;

    h2 {
      font-size: 20px;
    }
  }
}
</style>
