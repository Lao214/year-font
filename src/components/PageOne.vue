<template>
  <div class="body">
   <div class="container">
    <!-- <div class="typed-out">时间总是偷偷流逝,转眼间一年又过去</div>
    <div class="typed-out2">这一年你收获了多少？让我们一起看看</div> -->
    <p class="flip-horizontal-top">今年您一共获得<a style="font-size: 2.7rem;color: rgb(255,215,0);">{{dataObj.creditvalue}}</a>个学分</p>
    <p class="flip-horizontal-top2">观看了<a style="font-size: 2.1rem;color: rgb(255,215,0);">38</a>门课程</p>
    <p class="slide-in-blurred-top">参与<a style="font-size: 1.7rem;color: rgb(255,215,0);">26</a>次直播</p>
    <div class="dialog">
      <p class="dialogText">今年居然学了那么多<br> 真的很棒呢！</p>
    </div>
    <!-- <img src="../assets/cartoon.jpeg" class="imggundam" alt=""> -->
    <div class="lion">
      <div class="head">
        <div class="hair" />
        <div class="face">
          <div class="hair" />
          <div class="ear left" />
          <div class="ear right" />
          <div class="eye left" />
          <div class="eye right" />
          <div class="nose" />
          <div class="mouth">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="Lionbody">
        <div class="hand"></div>
        <div class="hand"></div>
      </div>
    </div>
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
    /* background: rgb(255, 255, 255); */
    background-size: cover;
    width: 100%;
    height: 100vh;
    /* font-family: 'Trebuchet MS', sans-serif;  */
  }
.container {
  display: inline-block;
  padding-top: 70px;
  padding-left: 21px;
  padding-right: 21px;
  /* background: url('../assets/bg.jpg');
  background-size: 100%; */
}

.flip-horizontal-top{
  color: white;
  font-size: 1.2rem;
  /* animation:roll-in-left .6s ease-out both 4.7s; */
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

@keyframes text-focus-in{0%{filter:blur(12px);opacity:0}100%{filter:blur(0);opacity:1}}
.dialog{
  width: 60vw;
  /* animation:text-focus-in 1s cubic-bezier(.55,.085,.68,.53) both 7.3s; */
  display: flex;
  margin-left: 100px;
  font-family: 'Montserrat', sans-serif, Arial, 'Microsoft Yahei';
  z-index: 99;
  animation:text-focus-in .7s cubic-bezier(.55,.085,.68,.53) both .5s
}

@media screen and (min-height: 360px) and (max-height: 590px) {
    .dialog{
    width: 60vw;
    /* animation:text-focus-in 1s cubic-bezier(.55,.085,.68,.53) both 7.3s; */
    display: flex;
    margin-left: 80px;
    font-family: 'Montserrat', sans-serif, Arial, 'Microsoft Yahei';
    z-index: 99;
    animation:text-focus-in .7s cubic-bezier(.55,.085,.68,.53) both .5s
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
/* 以下是卡通狮子 */
@keyframes bounce-in-top{
  0%{transform:translateY(-170px);animation-timing-function:ease-in;opacity:0}
  38%{transform:translateY(0);animation-timing-function:ease-out;opacity:1}
  55%{transform:translateY(-65px);animation-timing-function:ease-in}
  72%{transform:translateY(0);animation-timing-function:ease-out}
  81%{transform:translateY(-28px);animation-timing-function:ease-in}
  90%{transform:translateY(0);animation-timing-function:ease-out}
  95%{transform:translateY(-8px);animation-timing-function:ease-in}
  100%{transform:translateY(0);animation-timing-function:ease-out}
}
.lion {
  --hair-color: rgb(109, 81, 80);
  --skin-color: rgb(247, 190, 123);
  --tail-color: rgb(248, 210, 163);
  --body-color: rgb(189, 146, 93);
  --foot-color: rgb(228, 174, 112);
  --eye-color: rgb(89, 60, 62);
  --other-color: rgb(219, 169, 108);
  position: absolute;
  bottom: 20%;
  animation:bounce-in-top 1.1s both
}
@media screen and (min-height: 700px) and (max-height: 800px) {
  .lion {
    --hair-color: rgb(109, 81, 80);
    --skin-color: rgb(247, 190, 123);
    --tail-color: rgb(248, 210, 163);
    --body-color: rgb(189, 146, 93);
    --foot-color: rgb(228, 174, 112);
    --eye-color: rgb(89, 60, 62);
    --other-color: rgb(219, 169, 108);
    position: absolute;
    bottom: 30%;
    animation:bounce-in-top 1.1s both
  }
}

@media screen and (min-height: 801px) and (max-height: 900px) {
  .lion {
    --hair-color: rgb(109, 81, 80);
    --skin-color: rgb(247, 190, 123);
    --tail-color: rgb(248, 210, 163);
    --body-color: rgb(189, 146, 93);
    --foot-color: rgb(228, 174, 112);
    --eye-color: rgb(89, 60, 62);
    --other-color: rgb(219, 169, 108);
    position: absolute;
    bottom: 40%;
    animation:bounce-in-top 1.1s both
  }
}

@media screen and (min-height: 901px) and (max-height: 1000px) {
  .lion {
    --hair-color: rgb(109, 81, 80);
    --skin-color: rgb(247, 190, 123);
    --tail-color: rgb(248, 210, 163);
    --body-color: rgb(189, 146, 93);
    --foot-color: rgb(228, 174, 112);
    --eye-color: rgb(89, 60, 62);
    --other-color: rgb(219, 169, 108);
    position: absolute;
    bottom: 50%;
    animation:bounce-in-top 1.1s both
  }
}
@media screen and (min-height: 1001px){
  .lion {
    --hair-color: rgb(109, 81, 80);
    --skin-color: rgb(247, 190, 123);
    --tail-color: rgb(248, 210, 163);
    --body-color: rgb(189, 146, 93);
    --foot-color: rgb(228, 174, 112);
    --eye-color: rgb(89, 60, 62);
    --other-color: rgb(219, 169, 108);
    position: absolute;
    bottom: 65%;
    animation:bounce-in-top 1.1s both
  }
}
.head {
  width: 105px;
  height: 105px;
  position: relative;
  z-index: 99;
}

.hair {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--hair-color);
  border-radius: 50%;
}
.face {
  background-color: var(--skin-color);
  width: 50px;
  height: 65px;
  border-radius: 65px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.eye {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 25%;
  animation: 4s blinking infinite forwards;
  overflow: hidden;
}
.eye::before {
  content: "";
  width: 10px;
  height: 10px;
  background-color: var(--eye-color);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.eye.left {
  left: 27px;
}
.eye.right {
  right: 27px;
}
.face .hair {
  width: 34px;
  height: 20px;
  border-radius: 40px;
  margin-top: -30px;
  margin-left: -14px;
  box-shadow: 25px 0 0 var(--hair-color);
}
.nose {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0px;
  height: 0px;
  border-width: 6px 9px;
  border-style: solid;
  border-color: var(--eye-color) transparent transparent transparent;
  margin-top: 15px;
  z-index: 3;
}
.mouth {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 15px;
  width: 20px;
  height: 20px;
}
.mouth::before {
  content: "";
  width: 11px;
  height: 12px;
  border-radius: 50%;
  left: -5px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent var(--eye-color) var(--eye-color) transparent;
  position: absolute;
  top: 2px;
}
.mouth::after {
  content: "";
  width: 11px;
  height: 12px;
  border-radius: 50%;
  right: -5px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent transparent var(--eye-color) var(--eye-color);
  position: absolute;
  top: 2px;
}
.mouth > span {
  width: 11px;
  height: 1px;
  background-color: var(--eye-color);
  position: absolute;
}
.mouth > span:nth-of-type(1) {
  left: -11px;
  top: 7px;
  transform: rotate(8deg);
}
.mouth > span:nth-of-type(2) {
  right: -11px;
  top: 7px;
  transform: rotate(-8deg);
}
.mouth > span:nth-of-type(3) {
  left: -11px;
  top: 13px;
  transform: rotate(-2deg);
  width: 12px;
}
.mouth > span:nth-of-type(4) {
  right: -11px;
  top: 13px;
  transform: rotate(2deg);
  width: 12px;
}

.ear {
  width: 21px;
  height: 21px;
  position: absolute;
  top: 0px;
  background-color: var(--skin-color);
  z-index: 9;
  border-radius: 40px;
  clip-path: ellipse(100% 100% at -20% -10%);
}
.ear.left {
  left: -14px;
}
.ear.right {
  right: -14px;
  transform: rotate(90deg);
}
.Lionbody {
  width: 85px;
  height: 90px;
  position: absolute;
  border-radius: 150px;
  background-color: var(--body-color);
  left: 50%;
  transform: translateX(-50%);
  top: 80px;
  clip-path: ellipse(200% 60% at 50% 0%);
}
/*狮身 */
.Lionbody::before {
  content: "";
  position: absolute;
  background-color: var(--other-color);
  width: 45px;
  height: 100px;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
}
.hand {
  position: absolute;
  height: 100px;
  width: 17.5px;
  background-color: var(--tail-color);
}
.hand::before {
  content: "";
  width: 20px;
  height: 20px;
  background-color: var(--skin-color);
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.hand::after {
  content: "";
  width: 20px;
  height: 20px;
  background-color: var(--foot-color);
  border-radius: 50%;
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
} 
 .hand:nth-of-type(1) {
  left: 45px;
  top: -50px;
}
.hand:nth-of-type(1)::after {
  margin-left: -45px;
}
.hand:nth-of-type(2) {
  right: 45px;
  top: -50px;
}
.hand:nth-of-type(2)::after {
  margin-left: 45px;
}
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