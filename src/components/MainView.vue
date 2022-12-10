<template>
  <div class="view">
    <div class="header">
      <h2>年度学习报告</h2>
    </div>
    <div class="fixed-hine" v-if="showFixedHint">
      <span>向上滑，查看年度报告</span>
    </div>
    <div class="recommendPage">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="page01">
          <div class="detail-page">
            <div class="text-detail-box">
              <p>时光总是偷偷流逝</p>
              <p>转眼间一年又过去了</p>
              <p>这一年你又有多少收获呢</p>
            </div>
          </div>      
        </swiper-slide>
        <swiper-slide class="page02">
          <div class="detail-page">
            <div class="text-detail-box">
              <p>您今年共看了{{dataObj.courses}}门课程</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="page03">
          <div class="detail-page">
            <div class="text-detail-box">
              <p>您的学分是{{dataObj.credit}}分</p>
            </div>
          </div>
        </swiper-slide>
         <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import dataApi from '@/api/data'

export default {
  name: 'app',
  components:{swiper,swiperSlide},
   data() {
    return {
      jobNo:'X2004611',
      dataObj:'',
      showFixedHint: false,
      beforeSlideIndex: 0,
      thisActiveIndex: 0,
      swiperOption: {
      //  effect: "fade", 
        direction: "vertical", //垂直切换选项
        speed: 9, // 切换速度
        height: window.innerHeight, // 高
        width: window.innerWidth, //宽
        autoplay: false,
        pagination:'.swiper-pagination',
        on:{
          slideChange:()=>{
            let swiper = this.$refs.mySwiper.swiper;
            let slideIndex = swiper.activeIndex;
            this.thisActiveIndex = slideIndex;
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted(){
    // console.log("swiper",this.swiper)
    this.swiper.slideTo(0,1000,false)
  },
  created() {
    this.getData()
  },
  methods:{
    getData(){
        dataApi.getDataByJobNo(this.jobNo).then(res=>{
            this.dataObj=res.data.data.data
            // console.log(res.data.data.data);
        })
    }
  }
}
</script>


<style scoped>
.view{
   width: 100%; 
    height: 100%; 
    position: absolute; 
    left: 0; 
    top: 0;
    overflow: hidden;
}
 .swiper-slide{
  width: 100%;
  /* line-height: 200px; */
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
  touch-action: none;
}
.page01{
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
}
.header{
  position: fixed;
  z-index: 10;
  display: block;
  line-height: 46px;
  top: 0;
  left: 0;
  right: 0;
}
h2{
  font-size: 30px;
  text-align: center;
  color: #fff;
  font-weight: 600;
}
.fixed-hint{
  position: fixed;
    z-index: 10;
    padding-top: 60px;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    font-weight: 600;
    animation: fixedHintAnimation 1s linear infinite;
}
.detail-page{
  position: relative;
    display: block;
    width: 100%;
    height: 100%;
}
.text-detail-box {
    margin-top: 300px;
    margin-left: 50px;
}
p {
    font-size: 25px;
    line-height: 40px;
    font-weight: 600;
    color: azure;
 }
</style>
