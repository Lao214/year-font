<template>
   <div class="body">
    <div class="childSwiper" id="test">
       <swiper :options="swiperOption" ref="mySwiper" >
         <swiper-slide class="one">1</swiper-slide>
         <swiper-slide class="two">2</swiper-slide>
         <swiper-slide class="three">3</swiper-slide>
         <swiper-slide class="four">4</swiper-slide>
         <!-- <div class="swiper-pagination" slot="pagination"></div> -->
         <!-- <div class="swiper-button-prev" slot="button-prev"> <i class="el-icon-caret-left"></i> </div> -->
         <!-- <div class="swiper-button-next" slot="button-next"> <i class="el-icon-caret-right"></i></div> -->
       </swiper>
    </div>
    <button class="btn" @click="createImage">获取截图</button>
    <!-- <div style="width:500px;height:200px;margin-top:20px;border:1px solid red;">
          <p>生成的图片</p>
          <img :src="dataUrl" style="width:200px;" />
      </div> -->
  </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import domtoimage from 'dom-to-image'
import FileSaver from 'file-saver';
export default {
  components:{swiper,swiperSlide},
  data() {
      return {
          dataUrl: '',
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
      createImage() {
          let node = document.getElementById('test');
          console.log(node)
          let that = this
          domtoimage.toPng(node)
              .then(function (dataUrl) {
                  console.log(dataUrl)
                  that.dataUrl = dataUrl
                  FileSaver.saveAs(dataUrl, 'a.png')
              })
              .catch(function (error) {
                  console.error('生成失败', error)
              })
      },
  }
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
.childSwiper{
    font-family: Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Heiti SC', STXihei, 'Microsoft YaHei'; /* 根节点增加字体设置，避免iOS 15生成图片失败 */
}
.one{
  background: url('../assets/bg.jpg');
}
</style>
