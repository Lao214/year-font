<template>
   <div class="container">
    <p class="typed-out">时间总是偷偷流逝 转眼间一年又过去<br>今年你收获了多少 让我们一起看看吧</p>
    <p class="flip-horizontal-top">今年您一共获得<span style="font-size: 2.1rem;color: rgb(42, 91, 165);">32.5</span>个学分</p>
    <p class="flip-horizontal-top2">观看了<span style="font-size: 1.9rem;color: rgb(42, 91, 165);">38</span>门课程</p>
    <p class="slide-in-blurred-top">参与<span style="font-size: 1.7rem;color: rgb(42, 91, 165);">26</span>次直播</p>
    <div class="dialog">
      <p class="dialogText">今年居然学了那么多<br> 真的很棒呢！</p>
    </div>
    <img src="../assets/cartoon.jpeg" class="imggundam" alt="">
  </div>
</template>

<script>
export default {
  props: {
    one: {
      type: Number,
      default: 0
    },
  },
  data() {
      return {
        thisIndex: this.one
      }
  },
  created() {
    console.log('this is a prop :' + this.thisIndex)
  }
}
</script>

<style>
  /* @keyframes slide-right{
    0%{transform:translateX(0)}
  100%{transform:translateX(100px)}
  } */
  body{
    background: rgb(255, 255, 255);
    background-size: cover;
    width: 100%;
    height: 100%;
    /* font-family: 'Trebuchet MS', sans-serif;  */
  }
.container {
  padding-top: 70px;
  padding-left: 21px;
  padding-right: 21px;
}
/* @keyframes typing {
  from { width: 0 }
  to { width: 31ch; border-right: .15em solid rgb(255, 255, 255); }
}
@keyframes typing2 {
  from { width: 0 ; border-right: .15em solid rgb(42, 91, 165); }
  to { width: 31ch; border-right: .15em solid rgb(42, 91, 165); }
} */
.typed-out{
    /* overflow: hidden; */
    /* border-right: .15em solid rgb(42, 91, 165); */
    /* white-space: nowrap; */
    font-size: 1rem;
    font-weight: 600;
    margin: 7px;
    /* width: 0; */
    /* text-align: center; */
    /* animation: typing 2.4s steps(31) forwards; */
}
/* @keyframes roll-in-left{
  0%{transform:translateX(-800px) rotate(-540deg);opacity:0}
  100%{transform:translateX(0) rotate(0deg);opacity:1}
} */

.flip-horizontal-top{
  font-size: 1.2rem;
  /* animation:roll-in-left .6s ease-out both 4.7s; */
  text-align: start;
  font-weight: 600;
}
.flip-horizontal-top2{
  font-size: 1.2rem;
  animation:roll-in-left .6s ease-out both 5.5s;
  text-align: start;
  font-weight: 600;
}
.slide-in-blurred-top{
  font-size: 1.2rem;
  /* animation:slide-in-blurred-top .6s cubic-bezier(.23,1.000,.32,1.000) both 6s; */
  text-align: start;
  font-weight: 600;
}
/* @keyframes slide-in-blurred-top{
  0%{transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 0;filter:blur(40px);opacity:0}
100%{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}
} */

:root {
    --border-color: #7591AD;
    --text-color: #34495e;
    --color1: #ECE5CE;
    --color2: #83af9b;
}

.dialogText {
    position: relative;
    padding: 20px;
    background-color: var(--color1);
    border-radius: 11px;
    /* 投影 */
    box-shadow: 20px 20px var(--color2);
    /* 动画效果 50%的时候向上移动20px */
    /* animation: animate1 4s ease-in-out infinite; */
}

/* 实现底部横线与圆点 */

.dialogText::after, .dialogText::before {
    position: absolute;
    content: '';
    height: 5px;
    left: 0px;
    background-color: var(--color1);
    border-radius: 11px;
    /* 投影 */
    box-shadow: 20px 20px var(--color2);
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

/* @keyframes animate1 {
  
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
} */
.dialog{
  width: 60vw;
  animation:text-focus-in 1s cubic-bezier(.55,.085,.68,.53) both 7.3s;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  margin-left: 100px;
  font-family: 'Montserrat', sans-serif, Arial, 'Microsoft Yahei';
  z-index: 99;
}
/* @keyframes text-focus-in{
  0%{filter:blur(12px);opacity:0}
100%{filter:blur(0);opacity:1}
} */

.imggundam{
  width: 100px;
  height: 100px;
  padding-top: 30px;
  margin-left: -200px;
  animation:slide-in-blurred-tl .6s cubic-bezier(.23,1.000,.32,1.000) both 6.8s;
  z-index: 98;
}

/* @keyframes slide-in-blurred-tl{
  0%{transform:translate(-1000px,-1000px) skew(80deg,10deg);transform-origin:100% 0;filter:blur(40px);opacity:0}
  100%{transform:translate(0,0) skew(0deg,0deg);transform-origin:50% 50%;filter:blur(0);opacity:1}
} */

@media screen and (min-height: 360px) and (max-height: 590px) {
    .imggundam{
    width: 60px;
    height: 60px;
    padding-top: 30px;
    margin-left: -200px;
    animation:slide-in-blurred-tl .6s cubic-bezier(.23,1.000,.32,1.000) both 6.8s;
    z-index: 98;
    }
    .dialog{
    width: 60vw;
    animation:text-focus-in 1s cubic-bezier(.55,.085,.68,.53) both 7.3s;
    display: flex;
    /* justify-content: center;
    align-items: center; */
    margin-left: 80px;
    font-family: 'Montserrat', sans-serif, Arial, 'Microsoft Yahei';
    z-index: 99;
    }
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
</style>