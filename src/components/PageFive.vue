<template>
    <div class="body">
   <div class="container">
    <p class="flip-horizontal-top">今年你在富学宝典上累计考试了<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.examcount}}</a>次</p>
    <p class="slide-in-blurred-top">其中一次通过考试的课程数有<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.coursenumF}}</a>门<span v-if="dataObj.coursenumF!==0">，超越了<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.rate5}}%</a>的小伙伴</span></p>
    <p class="slide-in-blurred-top" v-if="dataObj.coursenumF!==0">为好学不倦的你点赞👍～</p>
    <p class="slide-in-blurred-top" v-else>请继续坚持，不懈努力💪</p>
  </div>
  </div>
</template>

<script>
export default {
props:['dataObj']
}
</script>

<style scoped>
.body{
    background: url('../assets/bg.jpg');
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
.container {
  display: inline-block;
  padding-top: 70px;
  padding-left: 21px;
  padding-right: 21px;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>