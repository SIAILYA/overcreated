<template>
  <div class="timeline-event-card">
    <div v-if="lineTop"
         class="d-flex justify-content-center">
      <div
          :style="{ borderLeftStyle: dashed ? 'dashed' : 'solid', height: bigLine ? '150px' : '75px'}"
          class="event-line__inner"></div>
    </div>

    <div class="d-flex event-card align-items-center">
      <div class="dates">
        {{ dates }}
      </div>
      <span :style="`background: ${color}`"
            class="circle"
      >
          <span class="circle__inner"></span>
        </span>
      <div class="description">
        <div v-if="title" class="title" v-html="title"></div>
        <div v-if="caption" class="caption" v-html="caption"></div>
      </div>
    </div>

    <div v-if="lineBottom"
         class="d-flex justify-content-center">
      <div
          :style="{ borderLeftStyle: dashed ? 'dashed' : 'solid', height: bigLine ? '150px' : '75px'}"
          class="event-line__inner"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  dates: String,
  title: String,
  caption: String,
  lineBottom: {type: Boolean, default: false},
  lineTop: {type: Boolean, default: false},
  dashed: {type: Boolean, default: false},
  bigLine: {type: Boolean, default: false},
  color: {type: String}
})
</script>

<style lang="scss" scoped>
@use "sass:math";

.event-card {
  > div {
    width: calc((100% - 35px) / 2);
  }

  .dates {
    text-align: right;
    font-size: 24px;
  }

  .title {
    font-size: 22px;
    font-weight: 500;
  }

  .caption {
    font-size: 18px;
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
    .dates {
      font-size: 20px;
    }
    .title {
      font-size: 18px;
    }
    .caption {
      font-size: 14px;
    }
  }

  .circle {
    width: 35px;
    height: 35px;
    border-radius: 100px;
    margin-left: 12px;
    margin-right: 12px;
    position: relative;

    @media screen and (max-width: 768px) {
      width: 30px;
      height: 30px;
    }

    .circle__inner {
      width: 0;
      height: 0;
      top: 50%;
      left: 50%;
      transition: all .3s ease-in-out;
    }
  }
}

.event-line__inner {
  height: 50px;
  border-left-width: 2px;
  border-left-color: var(--text-color);
  //opacity: 50%;
  margin-top: 6px;
  margin-bottom: 6px;
}
</style>

<style lang="scss">
.event-card {
  .caption {
    span {
      font-weight: 400;
    }

    a {
      color: var(--text-color)
    }
  }
}
</style>
