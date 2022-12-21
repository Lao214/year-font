<template>
  <div class="body">
   <div class="container">
    <p class="flip-horizontal-top">亲爱的<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.stuName
}}</a>小伙伴：</p>
    <p class="flip-horizontal-top2">2022年即将过去，感谢您与富士康科技集团携手走过<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.hyear}}</a>年！</p>
    <p class="flip-horizontal-top2">这一年，你在富学宝典平台上的总学习天数达到了<a style="font-size: 2rem;color: rgb(255,215,0);">{{dataObj.studate}}</a>天，赶快来开启专属于你的年度学习报告吧～</p>
    <img src="../assets/peaco.webp" class="imggundam" alt="">
  </div>
    <div class="arrows-body">
      <div class="arrow"></div>
      <div class="arrow"></div>
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
    props:['dataObj']
}
</script>

<style scoped>

.arrows-body {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .arrow {
    position: relative;
    width:30px;
    height: 30px;
    border-bottom: 6px solid #fff;
    border-right:6px solid #fff;
    transform: rotate(-45deg);
    animation: arrow-load 2s infinite;
  }
  .arrow:nth-child(1) {
     left: 11px;
     animation-delay:  -0.4s;
  }
  .arrow:nth-child(2) {
     animation-delay:  -0.2s;
  }
  .arrow:nth-child(3) {
     right:  11px;
  }

  @keyframes arrow-load {
    0% {
      opacity: 0;
      transform: rotate(-45deg) translate(60px,60px);
    }
    0% {
      opacity: 1;
    }
    0% {
      opacity: 0;
      transform: rotate(-45deg) translate(-60px,-60px);
    }
  }
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


@media screen and (min-height: 360px) and (max-height: 590px) {
   
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