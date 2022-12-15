<template>
  <div id="app">

    <!-- <PictureView></PictureView> -->
    <main-view></main-view>
    <!-- <hello-world></hello-world> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainView from './components/MainView.vue'
import PictureView from './components/PictureView.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MainView,
    PictureView
}
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
