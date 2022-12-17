<template>
   <div class="body">
   <div class="container">
    <p class="flip-horizontal-top">2022年度你在富学宝典上的学习成就：</p>
    <p class="flip-horizontal-top" style="line-height:10px;"><i class="fa fa-check"></i>累计学习时数<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.playtime}}</a>小时</p>
    <p class="flip-horizontal-top" style="line-height:10px;"><i class="fa fa-check"></i>学习课程数<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.coursenum}}</a>门</p>
    <p class="flip-horizontal-top" style="line-height:10px;"><i class="fa fa-check"></i>获得学分数<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.creditvalue}}</a>个</p>
    <p class="flip-horizontal-top">超越了<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.rate1}}%</a>同行的小伙伴！</p>
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
    background: url('../assets/bg1.jpg');
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
/* .container p{
  line-height: 25px;
} */
.flip-horizontal-top{
  color: white;
  font-size: 1.4rem;
  /* animation:roll-in-left .6s ease-out both 4.7s; */
  text-align: start;
  font-weight: 600;
}
i{
  color: rgb(108, 234, 243);
}
</style>