<template>
  <div id="app" class="app">
    <div class="view">
      <Menu/>
      <OvercreatedHeader />
      <transition appear duration="300" mode="out-in" name="fade">
        <router-view class="route-view">
        </router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu';
import OvercreatedHeader from './components/OvercreatedHeader';

export default {
  name: 'App',
  components: {OvercreatedHeader, Menu},
  data() {
    return {
      rc: false
    }
  }
};
</script>

<style lang="scss">
@import "main";
@import "animations";

.view {
  width: 80%;
  margin-left: 10%;
  //padding-left: 16px;
  //padding-right: 16px;
}

@media screen and (max-width: 576px) {
  .view {
    margin-left: 4%;
    width: 92%;
  }
}

</style>
