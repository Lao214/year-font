<template>
  <div class="view">
    <div v-show="choose" class="body">
      <div class="box">
        <div class="box-item">
            <p class="title">龙华园区</p>
            <ul class="box-item-content">
                <li @click="chooseTip = true" style="padding: 7px;">language</li>
                <li @click="chooseTip = true" style="padding: 7px;">love</li>
                <li @click="chooseTip = true" style="padding: 7px;">picture</li>
            </ul>
        </div>
        <div class="box-item">
            <p class="title">观澜园区</p>
            <ul class="box-item-content">
              <li @click="chooseTip = true" style="padding: 7px;">language</li>
              <li @click="chooseTip = true" style="padding: 7px;">love</li>
              <li @click="chooseTip = true" style="padding: 7px;">picture</li>
            </ul>
        </div>
        <div  class="box-item ">
            <p class="title">南宁园区</p>
            <ul class="box-item-content">
              <li @click="chooseTip = true" style="padding: 7px;">language</li>
              <li @click="chooseTip = true" style="padding: 7px;">love</li>
              <li @click="chooseTip = true" style="padding: 7px;">picture</li>
            </ul>
        </div>
        <div class="box-item">
            <p class="title">杭州园区</p>
            <ul class="box-item-content">
              <li @click="chooseTip = true" style="padding: 7px;">language</li>
              <li @click="chooseTip = true" style="padding: 7px;">love</li>
              <li @click="chooseTip = true" style="padding: 7px;">picture</li>
            </ul>
        </div>
        <div class="circle">
          <ul>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
          </ul>
        </div>
      </div>
    </div>
    <div v-show="chooseTip" id="winmsg" style="position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,0.3);z-index: 999;">
      <!-- 创建主窗口 -->
      <div style="position: fixed;top: 50%;left: 50%;width: 60%;max-width: 500px;background: #FFF;transform: translate(-50%,-50%);border-radius: 30px;padding: 30px 40px;">
          <!-- 标题 -->
          <!-- <h3 style="font-weight: bold;text-align:center;font-size: 30px;">声明</h3> -->
          <!-- 内容 -->
          <div style="text-align: center;font-size: 16px;margin-top: 26px;line-height: 30px;color: #999;">您确定要查看XXX厂区XXX事业群的报告吗？</div>
          <!-- 按钮 -->
          <div class="dialogbtns">
            <a class="dialogBtn" style="background: #C00000;" @click="chooseTip = false" >
              取消
            </a>
            <a  class="dialogBtn" style="background: #008f00;" @click="confirm" >
              确定
            </a>
          </div>
      </div>
    </div>
    <div v-show="!choose" class="ban">
      <div class="text">
        xxx厂区xxx事业群
      </div>
      <div class="chart">
        <div class="cart">
          1
        </div>
        <div class="cart">
          2
        </div>
        <div class="cart">
          3
        </div>
        <div class="cart">
          4
        </div>
        <div class="cart">
          5
        </div>
        <div class="cart">
          6
        </div>
      </div>
    </div>
  </div>
</template>

<script>

   export default {
    data() {
      return {
        choose: true,
        chooseTip: false,
        height: 40
      }
    },
    methods: {
      confirm() {
        this.choose = false
        this.chooseTip = false
      }
    },
    created() {

    }
  }
</script>

<style scoped>
.view {
  width: 100%;
  height: 100%;
  /* position: absolute; */
  left: 0;
  top: 0;
  /* overflow: auto; */
}

.body {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow-y: scroll;
  background: linear-gradient(150deg,#FFCF71,#2376DD);
}
.box {
  margin: 41px auto;
  width: 70%;
  background-color:  #2a9ead00;
  font-size: 17px;
  font-weight: bold;
}
.box .box-item {
  border-bottom: 1px solid #06283D;
  color: #f19f26;
}
.box .title {
  margin: 0;
  padding: 10px;
  color: #283149;
  background-color: #2a9ead00;
}
.box-item-content{
  height: 0;
  overflow: hidden;
  background-color: #06283D;
  margin: 0;
  padding-left: 20px;
  transition: 0.5s;
}
ul{
  list-style: none;
}
ul li{
  padding-top: 5px;
  cursor: pointer;
}
 .box-item:hover .box-item-content {
  height: 120px;
}

.text{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}

.chart {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
  width: 100%;
}
.cart {
  border: 1px solid forestgreen;
  width: 32%;
  min-height: 300px;
  min-width: 337px;
  /* padding: 7px; */
  margin-bottom: 17px;
}

.dialogbtns {
  display: flex;
  justify-content: space-between;
}

.dialogBtn {
  color: #FFF;
  text-align: center;
  font-weight: bold;
  font-size: 19px;
  line-height: 60px;
  margin: 0 auto;
  margin-top: 25px;
  border-radius: 11px;
  width: 40%;
}

.li{
    position: absolute;
    border: 1px solid #fff;
    background-color: #fff;
    width: 17px;
    height: 17px;
    list-style: none;
    opacity: 0;
}
.circle li{
    bottom: 0;
    left: 15vw;
    /* 执行动画 */
    animation: circle 10s linear infinite;
}
.circle li:nth-child(2){
    left: 25vw;
    /* 设置动画延迟时间 */
    animation-delay: 2s;
}
.circle li:nth-child(3){
    left: 45vw;
    /* 设置动画延迟时间 */
    animation-delay: 6s;
}
.circle li:nth-child(4){
    left: 75vw;
    /* 设置动画延迟时间 */
    animation-delay: 4s;
}
.circle li:nth-child(5){
    left: 70vw;
    /* 设置动画延迟时间 */
    animation-delay: 8s;
}

/* 定义动画 */
@keyframes circle {
    0%{
        transform: scale(0) rotateY(0deg);
        opacity: 1;
        bottom: 0;
        border-radius: 10%;
    }
    100%{
        transform: scale(5) rotateY(1000deg);
        opacity: 0;
        bottom: 90vh;
        border-radius: 80%;
    }
}
</style>