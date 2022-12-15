<template>
  <div id="app">

    <!-- <PageThree></PageThree> -->
    <!-- <main-view></main-view> -->
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainView from './components/MainView.vue'
import PageThree from './components/PageThree.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MainView,
    PageThree
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
