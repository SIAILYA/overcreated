<template>
  <component
      :is="wrapperComponent"
      :to="to || '/project/' + project.slug"
      class="d-block project__wrapper"
  >
    <div class="d-flex flex-column h-100">
      <h2
          :style="`color: ${project.color}`"
          class="title colored-brightness"
      >
        {{ project.title }}
      </h2>

      <p class="description">{{ project.description.slice(0, 120) }}{{ project.description.length > 120 ? '...' : '' }}</p>

      <div class="d-flex flex-column mt-auto overflow-hidden ellipsis">
        <div v-if="project.techs.length" class="techs list d-flex">
          <span :style="'color:' + project.color" class="material-icons-round colored-brightness">api</span>
          <span class="content">{{ project.techs.join(", ") }}</span>
        </div>
        <div v-if="project.developTime" class="develop-time list d-flex">
          <span :style="'color:' + project.color" class="material-icons-round colored-brightness">alarm_on</span>
          <span class="content">~{{ project.developTime }}hr</span>
        </div>
        <div v-if="project.link" class="link list d-flex">
          <span :style="'color:' + project.color" class="material-icons-round colored-brightness">public</span>
          <a :href="project.link" class="content">{{ project.link }}</a>
        </div>
      </div>

      <div class="topics-indicators d-flex mt-3">
        <div class="indicator me-1" v-for="t in project.topicsObjects" :style="{background: t.color}"></div>
      </div>
    </div>
  </component>
</template>

<script lang="ts" setup>
import {Project} from "../typings/project";
import {computed, onMounted, PropType, Ref, ref} from "vue";

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true
  },
  to: {
    type: String,
    default: ""
  }
})

const wrapperComponent = computed(() => {
  if (!props.to && !props.project.slug) {
    return 'div'
  }

  return 'router-link'
})
</script>


<style lang="scss" scoped>
.project__wrapper {
  color: var(--text-color);
  text-decoration: none;
  background: var(--background-secondary);
  padding: 12px 20px;
  border-radius: 25px;
  transition: all .3s ease;

  &:hover {
    box-shadow: 0 0 10px -1px var(--shadow-color);
  }

  .list {
    white-space: nowrap;
    overflow: hidden;
    align-content: center;
    align-items: center;
    width: 100%;
    padding-right: 20px;
    margin-bottom: 5px;

    .content {
      width: 100%;
      overflow: hidden;
      display: block;
      text-overflow: ellipsis;
      margin-left: 6px;
      color: var(--text-color);
    }
  }

  .title {
    font-size: 26px;
  }
}

.topics-indicators {
  .indicator {
    width: 20px;
    height: 10px;
    border-radius: 100px;
  }
}
</style>

<style lang="scss">
body[variant="light"] {
  .project__wrapper {
    box-shadow: 0 0 10px var(--shadow-color);

    &:hover {
      box-shadow: 0 0 15px 5px var(--shadow-color);
    }
  }
}
</style>
