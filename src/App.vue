<template>
  <div id="app">
    <home v-if="type === 1"></home>
    <Sunshine v-if="type === 2"></Sunshine>
    <main-view v-if="type === 0"></main-view>
    <!-- <hello-world></hello-world> -->
  </div>
</template>

<script>
import MainView from './components/MainView.vue'
import Home from './components/Home.vue'
import Sunshine from './components/Sunshine.vue'

export default {
  name: 'App',
  components: {
    MainView,
    Home,
    Sunshine
  },
  data() {
      return {
        type: 0
      };
    },
  created() {
    var hscr = window.location.href
    if(hscr.indexOf('yangguangzhuanqu') != -1) {
      this.type = 2
    } else if (hscr.indexOf('changqu') != -1) {
      this.type = 1
    }
    console.log(this.type)
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
