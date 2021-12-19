<template>
  <div :class="isSelected ? 'selected' : 'not-selected'" :style="styleObject"
       class="topic-pill" @click="toggleSelect">
    <div class="topic-pill__inner" :style="innerStyleObject">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TopicPill',
  props: {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    color: {
      type: Array
    }
  },
  data() {
    return {
      colors: [
        ['#00698A', '#00BDC9'],
        ['#FF7A00', '#FFAC2F'],
        ['#0050C9', '#4A88FF'],
        ['#00A825', '#33C200'],
        ['#2B00A5', '#0050C9'],
        ['#E0A100', '#FFD600'],
        ['#AD00C9', '#C7005F'],
        ['#7000FF', '#B02FFF'],
        ['#AD00C9', '#4800A5'],
      ],
      selected: false,
      styleObject: {
        background: 'red',
      },
      innerStyleObject: {
        background: "none"
      }
    };
  },
  computed: {
    ...mapGetters(['getSelectedTopics']),
    isSelected() {
      return this.getSelectedTopics.includes(this.slug);
    }
  },
  methods: {
    ...mapActions(["selectTopic", "deselectTopic"]),
    toggleSelect() {
      if (this.isSelected) {
        this.deselectTopic(this.slug)
      } else {
        this.selectTopic(this.slug)
      }
    }
  },
  mounted() {
    let colorPair;

    if (this.color === null) {
      colorPair = this.colors[Math.floor(Math.random() * this.colors.length)];
    } else {
      colorPair = this.color;
    }

    this.selected = this.getSelectedTopics.includes(name);

    if (this.selected) {
      this.innerStyleObject.background = "var(--background-primary)"
    } else {
      this.innerStyleObject.background = "none"
      this.styleObject.background = `linear-gradient(93.97deg, ${colorPair[0]} 6.33%, ${colorPair[1]} 94.4%)`;
    }
  },
};
</script>

<style lang="scss" scoped>
.topic-pill {
  padding: 2px 2px;
  border-radius: 50px;
  cursor: pointer;
  margin-bottom: 12px;
  transition: all .3s ease;
  user-select: none;

  &:hover {
    filter: brightness(.85);
  }
}

.topic-pill__inner {
  background: none;
  border-radius: 50px;
  padding: 10px 26px;
  transition: all .3s ease;
}

.not-selected {
  opacity: 0.5;
  .topic-pill__inner{
    background: var(--background-primary)!important;
  }
}

@media screen and (max-width: 576px) {
  .topic-pill__inner {
    font-size: 12px;
    padding: 8px 12px;
  }
}
</style>
