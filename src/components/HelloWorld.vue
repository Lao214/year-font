<template>
  <div id="page">
    <!-- 截图区域 -->
    <div class="content" ref="imageDom">
      这里是丰富的网页内容...
    </div>
    <!-- 截图区域2 -->
    <!-- 点击调用方法获取截图 -->
    <button class="btn" @click="getPrintScreen">获取截图</button>
    <!-- <div class="img-box"> -->
      <!-- <h2>截图结果:</h2> -->
      <!-- 通过img标签把获取到的截图呈现出来 -->
      <!-- <img :src="imgUrl" alt="" /> -->
    <!-- </div> -->
  </div>
</template>

<script>
// 引入 html2canvas
import html2canvas from "html2canvas";

export default {
  name: "Screenshot",
  data() {
    return {
      imgUrl: null, //截图地址
    };
  },
  methods: {
    //获取截图方法
    getPrintScreen() {
      html2canvas(this.$refs.imageDom,
      {
        imageTimeout: 15000, //newline
        scale:3, //newline
        useCORS: true, //图片跨域，开启跨域配置
        logging: false,//日志开关，便于查看html2canvas的内部执行流程
        taintTest: false,//是否在渲染前测试图片
      }).then(canvas => {
        // 转成图片，生成图片地址
        let imgUrl = canvas.toDataURL("image/png",1); //可将 canvas 转为 base64 格式
        let eleLink = document.createElement("a");
        eleLink.href = imgUrl; // 转换后的图片地址
        eleLink.download = "名称";
        document.body.appendChild(eleLink);
        eleLink.click();
        document.body.removeChild(eleLink);
      });
    }
  },
};
</script>


<!-- 本demo样式代码（不重要） -->
<style scoped>
.content {
    height: 30%;
    font-size: 26px;
    font-family: Source Han Sans CN;
    color: rgb(245, 245, 245);
    text-align: center;
    line-height: 200px;
    background-color: rgb(243, 161, 152);
  }
  .btn {
    display: block;
    width: 80vw;
    height: 11.733vw;
    background: #79c76f;
    border-radius: 2vw;
    border: none;
    font-size: 4.8vw;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    line-height: 11.733vw;
    letter-spacing: 4px;
    text-align: center;
    margin: 30px 0 20px 40px;
  }
#page {
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
