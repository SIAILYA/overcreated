<template>
  <div class="view">
    <Menu/>
    <OvercreatedHeader/>
    <slot></slot>
  </div>
</template>

<script>
import Menu from '../components/Menu';
import OvercreatedHeader from '../components/OvercreatedHeader';
export default {
  name: 'DefaultView',
  components: { OvercreatedHeader, Menu }
};
</script>

<style scoped lang="scss">
.view{
  width: 80%;
  margin-left: 10%;
  //padding-left: 16px;
  //padding-right: 16px;
}

@media screen and (max-width: 576px) {
  .view{
    margin-left: 4%;
    width: 92%;
  }
}
</style>
