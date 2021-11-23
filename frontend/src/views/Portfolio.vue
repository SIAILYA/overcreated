<template>
  <default-view>
    <div class="topics-pills d-flex">
      <topic-pill :color="0" name="Фронтенд" slug="frontend"/>
      <topic-pill :color="1" name="Бэкенд" slug="frontend"/>
      <topic-pill :color="2" name="Python" slug="frontend"/>
      <topic-pill :color="3" name="UX/UI" slug="frontend"/>
      <topic-pill :color="4" name="VK Mini App" slug="frontend"/>
      <topic-pill :color="5" name="JavaScript" slug="frontend"/>
      <topic-pill :color="6" name="Хакатон" slug="frontend"/>
      <topic-pill :color="7" name="Учебный" slug="frontend"/>
      <topic-pill :color="8" name="Прочее" slug="frontend"/>
    </div>
  </default-view>
</template>

<script>
import DefaultView from './DefaultView';
import TopicPill from '../components/TopicPill';

export default {
  name: 'Portfolio',
  components: {
    TopicPill,
    DefaultView
  },
  data() {
    return {
      colors: [
        ['#0050C9', '#4800A5'],
        ['#00698A', '#00BDC9'],
        ['#FF7A00', '#FFAC2F'],
        ['#0050C9', '#4A88FF'],
        ['#00A825', '#33C200'],
        ['#2B00A5', '#0050C9'],
        ['#E0A100', '#FFD600'],
        ['#AD00C9', '#C7005F'],
        ['#7000FF', '#B02FFF'],
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.topics-pills {
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  div {
    margin-left: 10px;
    margin-right: 10px;
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
}
</style>
