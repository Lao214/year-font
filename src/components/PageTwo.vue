<template>
   <div class="body">
   <div class="container">
    <p class="flip-horizontal-top">2022年度你在富学宝典上的学习成就：</p>
    <p class="flip-horizontal-top">1.累计学习时数<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.playtime}}</a>小时</p>
    <p class="flip-horizontal-top">2.学习课程数<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.coursenum}}</a>门</p>
    <p class="flip-horizontal-top">3.获得学分数<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.creditvalue}}</a>个</p>
    <p class="flip-horizontal-top">你超越了<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.rate1}}%</a>同行的小伙伴！</p>
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
  /* display: inline-block; */
  padding-top: 84px;
  padding-left: 21px;
  padding-right: 21px;
}
.flip-horizontal-top{
  color: white;
  font-size: 1.4rem;
  /* animation:roll-in-left .6s ease-out both 4.7s; */
  text-align: start;
  font-weight: 600;
}
</style>