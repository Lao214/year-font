<template>
  <div class="body">
    <div class="childSwiper" ref="imageDom">
       <swiper :options="swiperOption" ref="mySwiper" >
         <swiper-slide class="one">1</swiper-slide>
         <swiper-slide class="two">2</swiper-slide>
         <swiper-slide class="three">3</swiper-slide>
         <swiper-slide class="four">4</swiper-slide>
         <div class="swiper-pagination" slot="pagination"></div>
         <div class="swiper-button-prev" slot="button-prev"> <i class="el-icon-caret-left"></i> </div>
         <div class="swiper-button-next" slot="button-next"> <i class="el-icon-caret-right"></i></div>
       </swiper>
    </div>
    <button class="btn" @click="getPrintScreen">获取截图</button>
  </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import html2canvas from "html2canvas";
export default {
    components:{swiper,swiperSlide},
    data(){
        return{
          imgUrl: null, //截图地址
          swiperOption:{
            direction:"horizontal",
            pagination:{
              el: '.swiper-pagination',
              clickable:true
                },
            navigation: {
              nextEl: '.swiper-button-next',
              revEl: '.swiper-button-prev'
        }
            }
        }
    },
     methods: {
    //获取截图方法
    getPrintScreen() {
      html2canvas(this.$refs.imageDom,
      {
        useCORS: true, //图片跨域，开启跨域配置
        logging: false,//日志开关，便于查看html2canvas的内部执行流程
        taintTest: true,//是否在渲染前测试图片
      }).then(canvas => {
        // 转成图片，生成图片地址
        let imgUrl = canvas.toDataURL("image/png"); //可将 canvas 转为 base64 格式
        let eleLink = document.createElement("a");
        eleLink.href = imgUrl; // 转换后的图片地址
        eleLink.download = "名称";
        document.body.appendChild(eleLink);
        eleLink.click();
        document.body.removeChild(eleLink);
      });
    }
  },

}
</script>

<style scoped>
.body{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0; 
    top: 0;
}
.swiper-slide{
    width: 300px;
    height: 300px;
    touch-action: none;
    background: green;
     /* position: relative;
     margin-left: 100px;
     margin-top: 150px;
     touch-action: none; */
}
。childSwiper{
    font-family: Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Heiti SC', STXihei, 'Microsoft YaHei'; /* 根节点增加字体设置，避免iOS 15生成图片失败 */
}
.one{
  background: url('../assets/bg.jpg');
}
</style>