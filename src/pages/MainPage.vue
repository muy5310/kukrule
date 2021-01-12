<template>
  <div id="app">
    <TopMenu></TopMenu>
    <TimeLine></TimeLine>
  </div>
</template>

<script>
import TopMenu from '../components/TopMenu.vue';
import TimeLine from '../components/TimeLine.vue';

export default {
  components: {
    TopMenu,
    TimeLine
  }
}
</script>

<style>
#app {
  width:100%;
}
</style>
