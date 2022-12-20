<template>
  <div class="body">
   <div class="container">
    <p class="flip-horizontal-top">亲爱的<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.stuName
}}</a>小伙伴：</p>
    <p class="flip-horizontal-top2">2022年即将过去，感谢您与富士康科技集团携手走过<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.hyear}}</a>年！</p>
    <p class="flip-horizontal-top2">这一年，你在富学宝典平台上的总学习天数达到了<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.studate}}</a>天，赶快来开启专属于你的年度学习报告吧～</p>
    <!-- <div class="dialog">
      <p class="dialogText">今年居然学了那么多<br> 真的很棒呢！</p>
    </div> -->
    <img src="../assets/peaco.webp" class="imggundam" alt="">
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

.imggundam {
  margin-top: 47px;
  width: 338px;
  height: 260px;
  animation:bounce-in-top 1.1s both .2s
}

.flip-horizontal-top{
  color: white;
  font-size: 1.2rem;
  text-align: start;
  font-weight: 600;
}
.flip-horizontal-top2{
  color: white;
  font-size: 1.2rem;
  animation:roll-in-left .6s ease-out both 5.5s;
  text-align: start;
  font-weight: 600;
}
.slide-in-blurred-top{
  color: white;
  font-size: 1.2rem;
  /* animation:slide-in-blurred-top .6s cubic-bezier(.23,1.000,.32,1.000) both 6s; */
  text-align: start;
  font-weight: 600;
}

.dialogText {
    position: relative;
    padding: 20px;
    background-color: #ECE5CE;
    border-radius: 11px;
    /* 投影 */
    box-shadow: 20px 20px #83af9b;
    /* 动画效果 50%的时候向上移动20px */
    animation: animate1 4s ease-in-out infinite;
}

/* 实现底部横线与圆点 */

.dialogText::after, .dialogText::before {
    position: absolute;
    content: '';
    height: 5px;
    left: 0px;
    font-weight: 600;
    background-color: #ECE5CE;
    border-radius: 11px;
    /* 投影 */
    box-shadow: 20px 20px #83af9b;
}

/* 单独定义底部横线的样式，宽度为50px */

.dialogText::after {
    width: 50px;
    bottom: -25px;
    /* 动画效果 50%的时候向上移动10px 加上P元素向上移动20，真实移动像素为20+10px */
    animation: animate2 4s ease-in-out infinite;
}

/* 单独定义底部圆点的样式，宽度为11px */

.dialogText::before {
    width: 11px;
    bottom: -50px;
    /* 动画效果 50%的时候向上移动15px 加上P元素向上移动20，真实移动像素为20+15px */
    animation: animate3 4s ease-in-out infinite;
}

@keyframes animate1 {
  
    50% {
        transform: translateY(-20px);
    }
}

@keyframes animate2 {
   
    50% {
        transform: translateY(-10px);
    }
}

@keyframes animate3 {
 
    50% {
        transform: translateY(-15px);
    }
}

@keyframes text-focus-in{
  0%{filter:blur(12px);opacity:0}
  100%{filter:blur(0);opacity:1}
}
/* .dialog{
  width: 60vw;
  display: flex;
  margin-left: 100px;
  font-family: 'Montserrat', sans-serif, Arial, 'Microsoft Yahei';
  z-index: 99;
  animation:text-focus-in .7s cubic-bezier(.55,.085,.68,.53) both .7s
} */

@media screen and (min-height: 360px) and (max-height: 590px) {
    /* .dialog{
    width: 60vw;
    display: flex;
    margin-left: 80px;
    font-family: 'Montserrat', sans-serif, Arial, 'Microsoft Yahei';
    z-index: 99;
    animation:text-focus-in .7s cubic-bezier(.55,.085,.68,.53) both .7s
    } */
    .flip-horizontal-top{
    font-size: 1rem;
    animation:roll-in-left .6s ease-out both 4.7s;
    text-align: start;
    font-weight: 600;
    margin: 0;
    }
    .flip-horizontal-top2{
      font-size: 1rem;
      animation:roll-in-left .6s ease-out both 5.5s;
      text-align: start;
      font-weight: 600;
      margin: 0;
    }
    .slide-in-blurred-top{
      font-size: 1rem;
      animation:slide-in-blurred-top .6s cubic-bezier(.23,1.000,.32,1.000) both 6s;
      text-align: start;
      font-weight: 600;
      margin: 0;
    }
}
/* 眨眼特效 */
@keyframes blinking {
  0%,
  40%,
  80% {
    clip-path: ellipse(100% 100% at 50% 48%);
  }
  60%,
  100% {
    clip-path: ellipse(100% 2% at 50% 48%);
  }
}
</style>