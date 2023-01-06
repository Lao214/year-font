<template>
  <div class="body">
    <div class="container" v-if="type == 0">
      <p class="flip-horizontal-top">
        亲爱的<a style="font-size: 2rem; color: rgb(255, 215, 0)">{{
          dataObj.stuName
        }}</a
        >小伙伴：
      </p>
      <p class="flip-horizontal-top2">
        2022年即将过去，感谢您与富士康科技集团携手走过<a
          style="font-size: 2rem; color: rgb(255, 215, 0)"
          >{{ dataObj.hyear }}</a
        >年！
      </p>
      <p class="flip-horizontal-top2">
        这一年，你在富学宝典平台上的总学习天数达到了<a
          style="font-size: 2rem; color: rgb(255, 215, 0)"
          >{{ dataObj.studate }}</a
        >天，赶快来开启专属于你的年度学习报告吧～
      </p>
    </div>
    <div class="sunshine-container" v-if="type == 1">
      <p>
        亲爱的<a style="font-size: 1.2rem; color: rgb(255, 215, 0)">{{
          sunShineData.stuname
        }}</a
        >小伙伴：
      </p>
      <p>回顾2022年，感谢您一直以来与阳光</p>
      <p>培训中心相伴成长！</p>
      <p>从相识到相知，从陌生变成熟悉，</p>
      <p>一直奋斗不止的您，</p>
      <p>没有停下学习的脚步，</p>
      <p>
        这一年，您在平台学习的天数为<a
          style="font-size: 1.2rem; color: rgb(255, 215, 0)"
          >{{ sunShineData.studate }}</a
        >天
      </p>
      <p>
        超越了<a style="font-size: 1.2rem; color: rgb(255, 215, 0)"
          >{{ sunShineData.rate1 }}%</a
        >同行小伙伴
      </p>
      <p>快来看看您的学习报告吧</p>
    </div>
    <img src="../assets/peaco.webp" class="imggundam" alt="" />

    <div class="arrows-body">
      <div class="arrow"></div>
      <div class="arrow"></div>
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataObj", "type", "sunShineData"],
};
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
  width: 30px;
  height: 30px;
  border-top: 6px solid #fff;
  border-left: 6px solid #fff;
  transform: rotate(-45deg);
  animation: arrow-load 2s infinite;
}
.arrow:nth-child(1) {
  right: -7px;
  animation-delay: -0.4s;
}
.arrow:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow:nth-child(3) {
  left: -7px;
}

@keyframes arrow-load {
  0% {
    opacity: 0;
    transform: rotate(-45deg) translate(-60px, -60px);
  }
  0% {
    opacity: 1;
  }
  0% {
    opacity: 0;
    transform: rotate(-45deg) translate(60px, 60px);
  }
}
.body {
  background: url("../assets/bg.jpg");
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
  animation: bounce-in-top 1.1s both 0.2s;
}

.flip-horizontal-top {
  color: white;
  font-size: 1.2rem;
  text-align: start;
  font-weight: 600;
}
.flip-horizontal-top2 {
  color: white;
  font-size: 1.2rem;
  animation: roll-in-left 0.6s ease-out both 5.5s;
  text-align: start;
  font-weight: 600;
}

/* 实现底部横线与圆点 */

@keyframes text-focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}

@media screen and (min-height: 360px) and (max-height: 590px) {
  .flip-horizontal-top {
    font-size: 1rem;
    animation: roll-in-left 0.6s ease-out both 4.7s;
    text-align: start;
    font-weight: 600;
    margin: 0;
  }
  .flip-horizontal-top2 {
    font-size: 1rem;
    animation: roll-in-left 0.6s ease-out both 5.5s;
    text-align: start;
    font-weight: 600;
    margin: 0;
  }
  .slide-in-blurred-top {
    font-size: 1rem;
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both 6s;
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
/*阳光专区*/
.sunshine-container {
  /* display: inline-block; */
  padding-top: 100px;
  padding-left: 21px;
  padding-right: 21px;
}
.sunshine-container p {
  color: white;
  text-align: center;
  line-height: 12px;
}
</style>