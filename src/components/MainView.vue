<template>
  <div class="view">
    <div class="header">
      <!-- <h2>年度学习报告</h2> -->
      <audio ref="audio" autoplay loop dis>
        <source src="../assets/music.mp3" />
      </audio>
      <div class="music-icon">
        <i ref="off" class="fa fa-bell-slash fa-lg" @click="change1" style="display: block"></i>
        <i ref="on" class="fa fa-bell fa-lg" @click="change2" style="display: none"></i>
      </div>
    </div>
    <!-- <div class="fixed-hint" v-if="showFixedHint"><i class="fa fa-angle-double-up fa-3x"></i></div> -->
    <div v-if="!jobNo" style="z-index: 999; width: 100%; height: 100%">
      <job-no-input :job-no="jobNo"></job-no-input>
    </div>
    <div>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="page01">
          <page-one :one="thisActiveIndex"></page-one>
          <!-- <div class="detail-page">
            <div class="text-detail-box textOne" v-show="textOne">
              <p>时光总是偷偷流逝</p>
              <p>转眼间一年又过去了</p>
              <p>这一年你又有多少收获呢</p>
            </div>
          </div>       -->
        </swiper-slide>
        <swiper-slide class="page02">
          <page-two></page-two>
          <!-- <div class="detail-page">
            <div class="text-detail-box textTwo" v-show="textTwo">
              <p>您今年共看了<span style="font-size: 2.7rem;color: rgb(42, 91, 165);">{{dataObj.courses}}</span>门课程</p>
            </div>
          </div> -->
        </swiper-slide>
        <swiper-slide class="page03">
          <!-- <div class="detail-page">
            <div class="text-detail-box textThree" v-show="textThree">
              <p>您的学分是{{dataObj.credit}}分</p>
            </div>
          </div> -->
          <page-three :three="thisActiveIndex"></page-three>
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
    </div>
    <!-- <audio id="audio" controls="controls" autoplay loop>
        <source src="../assets/music.mp3">
    </audio> -->
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import dataApi from "@/api/data";
import PageOne from "./PageOne.vue";
import pageTwo from "./PageTwo.vue";
import PageThree from "./PageThree.vue";
import JobNoInput from "./jobNoInput.vue";

export default {
  name: "app",
  components: { swiper, swiperSlide, PageOne, pageTwo, PageThree, JobNoInput },
  data() {
    return {
      textOne: true,
      textTwo: true,
      textThree: true,
      jobNo: "X2004611",
      dataObj: "",
      showFixedHint: true,
      beforeSlideIndex: 0,
      thisActiveIndex: 0,
      swiperOption: {
        //  effect: "fade",
        direction: "horizontal", //垂直切换选项
        // speed: 3,  切换速度
        height: window.innerHeight, // 高
        width: window.innerWidth, //宽
        // autoplay: {
        //     delay:5000,
        //     disableOnInteraction:false,
        //     stopOnLastSlide: true,
        //     },
        pagination: ".swiper-pagination",
        on: {
          slideChange: () => {
            let swiper = this.$refs.mySwiper.swiper;
            let slideIndex = swiper.activeIndex;
            this.thisActiveIndex = slideIndex;
            // console.log(slideIndex);
            // console.log(this.beforeSlideIndex);
            if (slideIndex == 0) {
              this.textOne = true;
            } else {
              this.textOne = false;
            }
            if (slideIndex == 1) {
              this.textTwo = true;
            } else {
              this.textTwo = false;
            }
            if (slideIndex == 2) {
              this.textThree = true;
            } else {
              this.textThree = false;
            }
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // console.log("swiper",this.swiper)
    this.swiper.slideTo(0, 1000, false);
    // this.$refs.audio.src=require('../assets/music.mp3')

    document.addEventListener("WeixinJSBridgeReady", function () {
      document.getElementById("audio").play();
      //    console.log("自动播放调用了");
    });
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      dataApi.getDataByJobNo(this.jobNo).then((res) => {
        this.dataObj = res.data.data.data;
        // console.log(res.data.data.data);
      });
    },
    change1() {
      this.$refs.on.style.display = "block";
      this.$refs.off.style.display = "none";
      this.$refs.audio.play()
    },
    change2() {
      this.$refs.on.style.display = "none";
      this.$refs.off.style.display = "block";
      this.$refs.audio.pause()
    },
  },
};
</script>


<style scoped>
.view {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
.swiper-slide {
  width: 100%;
  /* line-height: 200px; */
  background: #fff;
  color: #000;
  font-size: 16px;
  /* text-align: center; */
  touch-action: none;
}
/* .page01{
  background: url(../assets/01.png) no-repeat;
  background-size: 100% 100%;
}
.page02{
  background: url(../assets/02.png) no-repeat;
  background-size: 100% 100%;
}
.page03{
  background: url(../assets/03.png) no-repeat;
  background-size: 100% 100%;
} */
.header {
  position: fixed;
  z-index: 10;
  display: block;
  line-height: 46px;
  top: 0;
  left: 0;
  right: 0;
}
h2 {
  font-size: 30px;
  text-align: center;
  color: black;
  font-weight: 600;
}
.music-icon{
    position: fixed;
    top: 10px;
    right: 10px;
    color: rgb(229, 236, 240);
}
.fixed-hint {
  position: absolute;
  z-index: 10;
  padding-top: 10px;
  bottom: 0%;
  color: rgb(42, 91, 165);
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 600;
  /* animation: fixedHintAnimation 1s linear infinite; */
}
.detail-page {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.text-detail-box {
  margin-top: 200px;
  margin-left: 50px;
}
p {
  font-size: 25px;
  line-height: 10px;
  font-weight: 600;
  color: black;
}
.textOne {
  animation: fadenum 2s linear;
}
.textTwo {
  animation: fadenum 2s linear;
}
.textThree {
  animation: fadenum 2s linear;
}
@keyframes fadenum {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
