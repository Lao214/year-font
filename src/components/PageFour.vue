<template>
  <div class="body">
    <div class="container" v-if="type == 0">
      <p class="flip-horizontal-top">
        你喜欢在<a style="font-size: 2rem; color: rgb(255, 215, 0)"
          >{{ dataObj.time }}：00</a
        >用<a style="font-size: 2rem; color: rgb(255, 215, 0)">{{
          dataObj.device
        }}</a
        >登陆富学宝典平台开始学习。
      </p>
      <p class="flip-horizontal-top">
        你今年学习最用功的是<a
          style="font-size: 2rem; color: rgb(255, 215, 0)"
          >{{ dataObj.mon }}</a
        >月，超越了<a style="font-size: 2rem; color: rgb(255, 215, 0)"
          >{{ dataObj.rate2 }}%</a
        >的小伙伴。
      </p>
    </div>
    <div class="sunshine-container" v-if="type == 1">
      <p>看看您2022年最喜欢的学习行为吧！</p>
      <p>
        <i class="fa fa-check" style="color: rgb(108, 234, 243)"></i>您最喜欢在<a
          style="font-size: 1.2rem; color: rgb(255, 215, 0)"
          >{{ sunShineData.device }}</a
        >登陆阳光中心
      </p>
      <p>
        <i class="fa fa-check" style="color: rgb(108, 234, 243)"></i>您最喜欢在<a
          style="font-size: 1.2rem; color: rgb(255, 215, 0)"
          >{{ sunShineData.mon }}</a
        >月进行学习
      </p>
      <p>
        <i class="fa fa-check" style="color: rgb(108, 234, 243)"></i>您最喜欢在<a
          style="font-size: 1.2rem; color: rgb(255, 215, 0)"
          >{{ sunShineData.time }}：00</a
        >时间段进行学习
      </p>
      <p>
        <i class="fa fa-check" style="color: rgb(108, 234, 243)"></i>您最喜欢的课程类别是<a
          style="font-size: 1.2rem; color: rgb(255, 215, 0)"
          >{{ sunShineData.creditTypeCode }}</a
        >
      </p>
    </div>
    <div id="background-wrap">
      <div class="bubble x2"></div>
      <div class="bubble x3"></div>
      <div class="bubble x6"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataObj", "type", "sunShineData"],
};
</script>

<style scoped>
.body {
  background: url("../assets/bg4.jpg");
  background-size: cover;
  width: 100%;
  height: 100vh;
}
.container {
  display: inline-block;
  padding-top: 90px;
  padding-left: 21px;
  padding-right: 21px;
}
.flip-horizontal-top {
  color: white;
  font-size: 1.4rem;
  text-align: start;
  font-weight: 600;
}

/* 泡泡 */
#background-wrap {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 21;
}

/* KEYFRAMES */
@-webkit-keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@-moz-keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@-webkit-keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

@-moz-keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

@keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}
/* ANIMATIONS */
.x2 {
  -webkit-animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  left: 65%;
  top: 80%;
  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
}
.x3 {
  -webkit-animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  left: 70%;
  top: 40%;
  -webkit-transform: scale(0.2);
  -moz-transform: scale(0.2);
  transform: scale(0.2);
}
.x6 {
  -webkit-animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  left: 71%;
  top: 0;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
}
/* OBJECTS */

.bubble {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
  height: 50px;
  position: absolute;
  width: 50px;
}

.bubble:after {
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(255, 255, 255, 0.5)),
    color-stop(70%, rgba(255, 255, 255, 0))
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;

  -webkit-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
  -moz-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);

  content: "";
  height: 45px;
  left: 10px;
  position: absolute;
  width: 45px;
}
/*阳光专区 */
.sunshine-container {
  /* display: inline-block; */
  padding-top: 120px;
  padding-left: 40px;
  padding-right: 21px;
}
.sunshine-container p {
  color: white;
  text-align: start;
  line-height: 12px;
}
</style>