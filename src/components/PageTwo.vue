<template>
  <div class="body">
    <div>
       <swiper :options="swiperOption" ref="mySwiper">
         <swiper-slide class="one">1</swiper-slide>
         <swiper-slide class="two">2</swiper-slide>
         <swiper-slide class="three">3</swiper-slide>
         <swiper-slide class="four">4</swiper-slide>
       </swiper>
    </div>
  </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    components:{swiper,swiperSlide},
    data(){
        return{
            swiperOption:{
                direction:"horizontal"
            }
        }
    }

}
</script>

<style>
.body{
    width: 100%;
    height: 100%;
}
.swiper-slide{
    width: 100%;
    height: 100%;
    touch-action: none;
    background: green;
}
</style>