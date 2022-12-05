<template>
  <div class="logo-sm relative my-auto" :class="{extended}">
    <h3 ref="text" class="m-0">
      <span v-for="l in logoLetters"
            :class="{'colored': l.marked}"
            :style="{width: (l.minified || extended) ? l.width : 0}"
      >
        {{ l.letter }}
      </span>
    </h3>
    <div class="line bottom-[0px]"></div>
  </div>
</template>

<script lang="ts" setup>
const logoLetters = [
  {letter: "o", marked: false, minified: true, width: '15.25px'},
  {letter: "v", marked: false, minified: false, width: '13.42px'},
  {letter: "e", marked: false, minified: false, width: '14.7px'},
  {letter: "r", marked: false, minified: false, width: '9.84px'},
  {letter: "c", marked: true, minified: true, width: '13.72px'},
  {letter: "r", marked: true, minified: false, width: '9.84px'},
  {letter: "e", marked: true, minified: false, width: '14.7px'},
  {letter: "a", marked: true, minified: false, width: '14.36px'},
  {letter: "t", marked: true, minified: false, width: '9.94px'},
  {letter: "e", marked: true, minified: false, width: '14.7px'},
  {letter: "d", marked: false, minified: false, width: '16.38px'},
]

interface Props {
  extended: boolean
}

defineProps<Props>()

const text = ref<HTMLElement>()
</script>

<style lang="scss" scoped>
.headline {
  margin-top: 10vh;
}

.logo-sm {
  h3 {
    user-select: none;
    font-size: 24px;
    line-height: 1;
    font-weight: 450;

    span {
      width: 0;
      display: inline-block;
      overflow: hidden;
      transition: all .3s ease;

      &.colored {
        color: var(--accent);

        &:hover {
          color: var(--text-color)
        }
      }
    }
  }

  .line {
    position: absolute;
    width: 25%;
    height: 2px;
    transition: width 1.2s ease, background-color .3s ease;
    border-radius: 100px;
    background: var(--accent);
  }

  &:hover {
    .line {
      width: 100%;
    }
  }
}
</style>
