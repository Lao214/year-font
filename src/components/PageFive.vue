<template>
  <div class="body">
    <div class="container" v-if="type == 0">
      <p class="flip-horizontal-top">
        &nbsp;&nbsp;&nbsp;&nbsp;今年你在富学宝典上累计考试了<a
          style="font-size: 2rem; color: rgb(255, 215, 0)"
          >{{ dataObj.examcount }}</a
        >次, 其中一次通过考试的课程数有<a
          style="font-size: 2rem; color: rgb(255, 215, 0)"
          >{{ dataObj.coursenumF }}</a
        >门<span v-if="dataObj.coursenumF !== 0"
          >，超越了<a style="font-size: 2rem; color: rgb(255, 215, 0)"
            >{{ dataObj.rate5 }}%</a
          >的小伙伴。</span
        >
      </p>
      <p class="slide-in-blurred-top" v-if="dataObj.coursenumF !== 0">
        为好学不倦的你点赞👍～
      </p>
      <p class="slide-in-blurred-top" v-else>请继续坚持，不懈努力💪</p>
      <!-- <img src="../assets/person.png" style="width:400px;height:400px"> -->
    </div>
    <div class="sunshine-container" v-if="type === 1 && chooseTip === false">
      <p>工欲善其事，必先利其器！</p>
      <p>
        通过您的不懈努力，2022收获良多，共参与考试<a
          style="font-size: 1.2rem; color: rgb(255, 215, 0)"
          >{{ sunShineData.examcount }}</a
        >次，通过率为<a style="font-size: 1.2rem; color: rgb(255, 215, 0)">{{
          sunShineData.passR
        }}</a>
      </p>
      <p
        style="
          font-size: 1.2rem;
          color: rgb(255, 215, 0);
          text-align: center;
          line-height: 10px;
        "
      >
        为您点赞加油！
      </p>
      <p
        style="
          font-size: 1.2rem;
          color: rgb(255, 215, 0);
          text-align: center;
          line-height: 10px;
        "
      >
        期待2023年更上一层楼
      </p>
      <p>2023年是充满希望的一年，您期待学习的课程方向是，请您填写:</p>
      <!-- <img src="../assets/person.png" style="width:400px;height:400px"> -->
    </div>
    <div
      v-show="chooseTip && device === 'Android'"
      style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.578);
        z-index: 979;
      "
    >
      <i
        class="fa fa-close"
        style="
          position: absolute;
          z-index: 980;
          bottom: 91%;
          color: #fff;
          font-size: 37px;
          left: 5%;
        "
        @click="chooseTip = false"
      ></i>
    </div>
    <div class="search-box" v-if="type === 1">
      <input
        v-model="comment"
        type="text"
        placeholder="定一个2023学习小目标吧"
        @click="chooseTip = true"
      />
      <i class="fa fa-paper-plane" aria-hidden="true" @click="sumbit"></i>
    </div>
    <div id="background-wrap">
      <div class="bubble x1"></div>
      <div class="bubble x6"></div>
      <div class="bubble x7"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataObj", "type", "sunShineData", "device"],
  data() {
    return {
      comment: "",
      studyList: "",
      chooseTip: false,
    };
  },
  methods: {
    sumbit() {
      this.chooseTip = false;
      this.studyList = "";
      const view = {
        comment: this.comment,
        studyList: this.studyList,
      };
      this.$emit("sumbit", view);
    },
  },
};
</script>

<style scoped>
.body {
  background: url("../assets/bg2.jpg");
  background-size: cover;
  width: 100%;
  height: 100vh;
}
.container {
  display: inline-block;
  padding-top: 90px;
  padding-left: 21px;
  padding-right: 21px;
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  justify-content: space-evenly;
}
.container p {
  justify-content: space-between;
  /* line-height: 25px; */
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
.x1 {
  -webkit-animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  left: 25%;
  top: 5%;
  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
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
.x7 {
  -webkit-animation: animateBubble 20s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  -moz-animation: animateBubble 20s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  animation: animateBubble 20s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  left: 35%;
  top: 70%;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  transform: scale(0.9);
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
/*阳光专区*/
.sunshine-container {
  /* display: inline-block; */
  padding-top: 120px;
  padding-left: 21px;
  padding-right: 21px;
}
.sunshine-container p {
  color: white;
  text-align: start;
  line-height: 25px;
}
.search-box {
  min-width: 270px;
  height: 40px;
  display: flex;
  /* justify-content: space-around; */
  border-bottom: 3px solid #fff;
  overflow: hidden;
  transition: 0.3s;
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translateX(-50%); /*百分比的参照物是自身*/
  z-index: 999;
}
.search-box input {
  width: 100%;
  height: 50px;
  border: none;
  background: none;
  outline: none;
  color: #fff;
  font-size: 22px;
  text-indent: 10px;
}
.search-box input::placeholder {
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
}
.search-box .fa {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
}
</style>