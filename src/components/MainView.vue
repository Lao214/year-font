<template>
  <div class="view">
    <div v-show="jobNoCheck"  class="PromptBox">
      <div class="prompt2">抱歉，暂时找不到您的学习报告！</div>
    </div>
    <div v-show="sumbitCheck"  class="PromptBox">
      <div class="prompt2">提交成功，感谢您的留言</div>
    </div>
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
    <transition appear>
    <div v-if="!dataObj" style="position: absolute;z-index: 999; width: 100%; height: 100%">
      <job-no-input :job-no="jobNo"  @inputJobNo="inputJobNo"></job-no-input>
    </div>
    </transition>
    <div v-if="dataObj">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- <swiper-slide class="home">
          <home></home>
        </swiper-slide> -->
        <swiper-slide class="page01">
          <page-one :one="thisActiveIndex" :dataObj="dataObj"></page-one>
        </swiper-slide>
        <swiper-slide class="page02">
          <page-two :dataObj="dataObj"></page-two>
        </swiper-slide>
        <swiper-slide class="page03">
          <page-four :dataObj="dataObj"></page-four>
        </swiper-slide>
        <swiper-slide class="page04">
          <page-five :dataObj="dataObj"></page-five>
        </swiper-slide>
        <swiper-slide class="page05">
          <page-three :stuLab="dataObj.stuLab" :timeLab="dataObj.timeLab" :examLab="dataObj.examLab" :three="thisActiveIndex" :username="dataObj.username" :dataObj="dataObj" @sumbit="sumbit" :browser="browser"></page-three>
        </swiper-slide>

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
import viewApi from "@/api/view";
import PageOne from "./PageOne.vue";
import PageTwo from "./PageTwo.vue"
import PageThree from "./PageThree.vue";
import JobNoInput from "./jobNoInput.vue";
import PageFour from './PageFour.vue';
import PageFive from './PageFive.vue';
import Home from './Home.vue';

export default {
  name: "app",
  components: { swiper, swiperSlide,Home, PageOne, PageTwo, PageThree, JobNoInput, PageFour, PageFive },
  data() {
   return {
      jobNo: "",
      jobNoCheck: false,
      sumbitCheck: false,
      dataObj: '',
      viewId: '',
      ua: '',
      code: '',
      browser: '',
      showFixedHint: true,
      beforeSlideIndex: 0,
      thisActiveIndex: 0,
      source: '',
      device: '',
      appId: 'GSZDIv6rmA8d2LujhLa30g2',
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
        // },
        pagination: ".swiper-pagination",
        on: {
          slideChange: () => {
            let swiper = this.$refs.mySwiper.swiper;
            let slideIndex = swiper.activeIndex;
            this.thisActiveIndex = slideIndex;
            // console.log(slideIndex);
            // console.log(this.beforeSlideIndex);
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    setTimeout(() => {
        console.log('1s')
        if(this.$jobNo) {
          this.source = '富学宝典'
          this.jobNo  = this.$jobNo
          // console.log('nei' + this.$store.getters.username)
          // console.log('nei' + this.$jobNo)
          if(this.jobNo) {
            this.getData()
            // this.swiper.slideTo(0, 1000, false)
          }
        }
      }, 1000)
    // if(this.jobNo) {
    //   this.getData()
    //   this.swiper.slideTo(0, 1000, false)
    // }
    document.addEventListener("WeixinJSBridgeReady", function () {
      document.getElementById("audio").play()
    })
  },
  created() {
    this.browser = this.getBrowser()
    this.getSystem()
     /* 相信数据begin */
    var test = window.location.href
    let arr  = test.split('?code=')
    this.code = arr[1]
    if (this.code) {
      setTimeout(() => {
      viewApi.getUserInfoByBelieve('code=' + this.code + '&appid=' + this.appId).then(res => {
        console.log(this.code)
        this.jobNo = res.data.civetno
        console.log(res.data)
        this.source = '相信'
        if(this.jobNo) {
          this.getData()
        }
      })
    },1000)
    }
    /* 相信数据end */
  },
  methods: {
    getData() {
      dataApi.getDataByJobNo(this.jobNo).then((res) => {
        this.dataObj = res.data.data.data
        console.log(res.data.data.data)
        if (this.dataObj) {
          this.sendViewRecords()
        } else if (!this.dataObj) {
          this.tipShow('check')
        }
      })
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
    inputJobNo(jobNo) {
      if (jobNo) {
        this.jobNo = jobNo
        this.getData()
      }
    },
    sendViewRecords() {
      if (this.jobNo) {
        let viewData ={
          jobNo: this.jobNo,
          device: this.device,
          ua: this.ua,
          browser: this.browser
        }
        if(this.source) {
          viewData['source'] = this.source
        }
        viewApi.view(viewData).then(res =>{
          this.viewId = res.data.data.data.id
        })
      }
    },
    sumbit(view) {
      view['id'] = this.viewId
      console.log(view)
      viewApi.update(view).then(res => {
        this.tipShow('sumbit')
      })
      // console.log('提交我的留言' + this.comment)
    },
    getSystem() {
      var system = navigator.userAgent
      this.ua = system
      //判断android ios windows
      var android = system.indexOf("Android")
      var iphone = system.indexOf("iPhone")
      var ipad = system.indexOf("ipad")
      var windows = system.indexOf("windows")
      var isMac = /macintosh|mac os x/i.test(navigator.userAgent)
      if (android !== -1) {
        console.log("Android")
        this.device = 'Android'
        // return 'android'
      }
      if (iphone !== -1 || ipad !== -1 || isMac) {
        console.log("ios")
        this.device = 'ios'
        // return 'ios'
      }
      if (windows !== -1) {
        console.log("windows")
        this.device = 'windows'
        // return 'windows'
      }
    },
    getBrowser() {
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      // console.log("loginuserAgent:", userAgent)
      //判断是否Opera浏览器
      if (userAgent.indexOf("Opera") > -1) {
        return "Opera"
      }
      //判断微信浏览器
      else if(userAgent.indexOf('MicroMessenger') > -1 || userAgent.indexOf('micromessenger') > -1) {
        return "MicroMessenger";
      }
      //判断是否是QQ浏览器
      else if (userAgent.indexOf("MQQBrowser") > -1) {
        return "MQQBrowser"
      }
      //判断是否Edge浏览器
      else if (userAgent.indexOf("Edg") > -1){
        return 'Edge'
      }
      //判断是否Firefox浏览器
      else if (userAgent.indexOf("Firefox") > -1) {
        return "firefox";
      }
      // 判断是否是小米浏览器
      else if ( userAgent.indexOf("MiuiBrowser") > -1){
        return "MiuiBrowser";
      }
      //判断是否Chrome浏览器
      else if (userAgent.indexOf("Chrome") > -1){
        return "Chrome";
      }

      //判断是否Chrome浏览器
      else if (userAgent.indexOf("360SE") > -1){
        return "360SE";
      }
    
      //判断是否Safari浏览器
      else if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
      }
      //判断是否IE浏览器
      else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
      }
      else if ( userAgent.indexOf("Trident") > -1){
        return "IE";
      }
      // else{
      //   arr.push('请更换主流浏览器,例如chrome,firefox,opera,safari,IE,Edge!')
      //   return arr;
      // }
    },
    tipShow(type) {
      if(type === 'sumbit'){
        this.sumbitCheck = false
        setTimeout(() => {
          this.sumbitCheck = true
        },10)
        setTimeout(() => {
          this.sumbitCheck = false
        },3000)
      } else if (type === 'check') {
        this.jobNoCheck = false
        setTimeout(() => {
          this.jobNoCheck = true
        },10)
        setTimeout(() => {
          this.jobNoCheck = false
        },3000)
      }
    }
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
.PromptBox {
    position: absolute;
    top: 10%;
    left: 50%;
    transform:translateX(-50%); /*百分比的参照物是自身*/
    width: 100%;
    height: 20%;
    z-index: 1000;
    /* text-align: center; */
}
  .prompt2{
    background-color: #000;
    margin: 100px auto;
    color: #fff;
    padding: 25px 15px;
    display:table;
    margin:0 auto;
    top: -100px;
    opacity: 1;
    border-radius: 10px;
    animation:slide-in-blurred-top .6s cubic-bezier(.23,1.000,.32,1.000) both;
    z-index: 1001;
  }

  @keyframes slide-in-blurred-top{
    0%{transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 0;filter:blur(40px);opacity:0}
    100%{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}
  }

  /* .shown {
    opacity: 1;
    top: 10%;
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

@keyframes input {
  0% {
    transform: translateY(-1000px);
  }
  100% {
    transform: translateY(0px);
  }
}
.come {
  animation: input .7s ;
}
.v-enter-active {
  animation: input .7s ;
}
.v-leave-active {
  animation: input .5s reverse;
}
</style>
