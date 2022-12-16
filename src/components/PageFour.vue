<template>
   <div class="body">
   <div class="container">
    <p class="flip-horizontal-top">你喜欢用<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.device}}</a>登陆富学宝典学习</p>
    <p class="flip-horizontal-top">你今年学习最用功的是<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.mon}}</a>月，超越了<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.rate2}}%</a>的小伙伴</p>
    <p class="flip-horizontal-top">你喜欢在<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.time}}:00</a>开始你的学习！</p>
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
}
.flip-horizontal-top{
  color: white;
  font-size: 1.2rem;
  /* animation:roll-in-left .6s ease-out both 4.7s; */
  text-align: start;
  font-weight: 600;
}
</style>