<template>
  <component :is="wrapper" :to="to || project.slug" class="d-block project__wrapper">
    <div>
      <h2
          :style="`color: ${project.color}`"
          class="title"
      >
        {{ project.title }}
      </h2>

      <p class="description">{{ project.description }}</p>

      <div class="d-flex flex-column">
        <div class="techs d-flex" v-if="project.techs.length">
          <span class="material-icons-round">api</span>
          <span>{{ project.techs.join(", ") }}</span>
        </div>
        <div class="develop-time d-flex" v-if="project.developTime">
          <span class="material-icons-round">alarm_on</span>
          <span>~{{ project.developTime }}hr</span>
        </div>
        <div class="techs d-flex" v-if="project.link">
          <span class="material-icons-round">public</span>
          <a :href="project.link">{{ project.link }}</a>
        </div>
      </div>
    </div>
  </component>
</template>

<script lang="ts" setup>
import {Project} from "../typings/project";
import {computed, PropType} from "vue";

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true
  },
  to: {
    type: String || Boolean,
    default: false
  }
})

const wrapper = computed(() => {
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
}

.project-title {
  font-size: 26px;
}
</style>
