<template>
  <default-view>
    <div ref="topics" class="topics-pills d-flex">
      <topic-pill v-for="topic in getAvailableTopics"
                  :key="topic._id.toString()"
                  :color="topic.color"
                  :name="topic.name"
                  :slug="topic.slug"
      />
    </div>
    <transition-group class="projects-list d-flex flex-wrap" name="projects-list" tag="div">
      <div v-for="(project) in getProjects"
           :key="project._id"
           class="project-card">
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
            <div class="d-flex my-1">
              <span class="material-icons-outlined my-auto me-2">schedule</span>
              <span class=" my-auto">~{{ project.developTime }} часов</span>
            </div>
            <div class="d-flex my-1">
              <span class="material-icons-outlined my-auto me-2">reorder</span>
              <span class=" my-auto">{{ project.techs.join(", ").substr(0, 20) }}...</span>
            </div>
            <div class="d-flex my-1">
              <span class="material-icons-outlined my-auto me-2">link</span>
              <div class=" my-auto">{{ project.demoLink }}</div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </default-view>
</template>

<script>
import DefaultView from './DefaultView';
import TopicPill from '../components/TopicPill';
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Portfolio',
  components: {
    TopicPill,
    DefaultView
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getAvailableTopics", "getSelectedTopics", "getProjects",
      "getProjectsLoading", "getProjectsLoading"])
  },
  methods: {
    ...mapActions(["loadTopics", "loadProjects"])
  },
  mounted() {
    if (this.getAvailableTopics.length === 0) this.loadTopics().then(() => {
      this.$refs.topics.classList.add("show-topics")

      if (Object.keys(this.$route.query).length > 0) {
        this.$store.commit("setSelectedTopics", Object.keys(this.$route.query))
      } else {
        this.$store.commit("setSelectedTopics", this.getAvailableTopics
          .filter(topic => topic.defaultSelected)
          .map(topic => topic.slug))
      }

      this.loadProjects()
    })
  }
};
</script>

<style lang="scss" scoped>
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

.projects-list-enter, .projects-list-leave-to {
  opacity: 0;
  transform: translateY(10vh);
}

.projects-list-leave-active {
  position: absolute;
}

.projects-list-move {
  transition: transform .8s ease;
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
  box-shadow: 0px 0px 12px 1px rgba(255, 255, 255, 0.5);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.material-icons-outlined {
  margin-right: 6px;
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
    margin-bottom: 6vh;
    padding-bottom: 6vh;
  }
}


@media screen and (max-width: 576px) {
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

    h2 {
      font-size: 20px;
    }
  }
}
</style>
