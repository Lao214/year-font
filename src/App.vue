<template>
  <div id="app">
    <home></home>
    <!-- <PageThree></PageThree> -->
    <!-- <main-view></main-view> -->
    <!-- <hello-world></hello-world> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainView from './components/MainView.vue'
import PageThree from './components/PageThree.vue';
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MainView,
    PageThree,
    Home
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
