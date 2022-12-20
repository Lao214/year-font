<template>
  <div class="body">
          <!-- <div class="shadow"> -->
            <div id="test" class="test" ref="imageDom">
              <!-- <div class="zhengshu"> -->
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ=" crossorigin="anonymous" />
                  <!-- <section class="random-bg"> -->
                  <div id="wrap" class="winner-wrap">
                    <div class="border"></div>
                    <div class="medal-box"><i class="fas fa-medal"></i></div>
                    <h1>Your KeyWord 2022</h1>
                    <h2>{{ timeLab }}</h2>
                    <h2>{{ examLab }}</h2>
                    <h2>{{ stuLab }}</h2>
                    <div class="winner-ribbon">WINNER</div>
                    <div class="right-ribbon"></div>
                    <div class="left-ribbon"></div>
                  </div>
              <!-- </div> -->
                <img id="poster" crossOrigin="anonymous" class="poster" src="../assets/poster.jpg" alt="img">
            <!-- </div> -->
          </div>
    <input type="checkbox" id="search_btn" hidden>
      <div class="thebtn">
        <label for="search_btn" class="search-btn" style="margin-right: 17px;">
            <a class="btn">新年学习清单</a>
        </label>
        <label class="imgCreate">
            <a class="btn" @click="getImageAccordingToBrowser()">生成海报</a>
        </label>
      </div>
        <label for="search_btn" class="close-btn">
            <i class="fa fa-close" aria-hidden="true"></i>
        </label>
    <div class="container">
        <div class="shell">
            <details >
                <summary >课程列表</summary>
                <div class="outer">
                <div class="inter">
                    <div class="folder">
                        <details>
                        <summary>IT互联网</summary>
                        <div class="folder">
                            <p>JAVA</p>
                            <p>C#</p>
                        </div>
                        </details>
                        <details >
                        <summary>javaScript</summary>
                        <div class="folder">
                            <p @click="choose()">index.js</p>
                            <p>allk.js</p>
                            <p>kerai.js</p>
                            <p>index.js</p>
                            <p>allk.js</p>
                            <p>kerai.js</p>
                            <p>index.js</p>
                            <p>allk.js</p>
                            <p>kerai.js</p>
                            <p>index.js</p>
                            <p>allk.js</p>
                            <p>kerai.js</p>
                            <p>index.js</p>
                            <p>allk.js</p>
                            <p>kerai.js</p>
                            <p>index.js</p>
                            <p>allk.js</p>
                            <p>kerai.js</p>
                        </div>
                        </details>
                        <details >
                        <summary>img</summary>
                        <div class="folder">
                            <p>ksuia.png</p>
                            <p>skksk.jpg</p>
                        </div>
                        </details>
                        <details >
                        <summary>flie</summary>
                        <div class="folder">
                            <p>impsksa -sasd.docx</p>
                            <p>allsdasd.xlxs</p>
                        </div>
                        </details>
                    </div>
                </div>
            </div>
            </details>
        </div>
        <div class="search-box">
            <input v-model="comment" type="text" placeholder="我还想要学...">
            <i class="fa fa-paper-plane" aria-hidden="true" @click="sumbit"></i>
        </div>
    </div>
  </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import html2canvas from "html2canvas"
import FileSaver from 'file-saver'
import domtoimage from 'dom-to-image'

export default {
  props: {
    three: {
      type: Number,
      default: 0
    },
    browser: {
      type: String,
      default: ''
    },
    examLab: {
      type: String,
      default: ''
    },
    stuLab: {
      type: String,
      default: ''
    },
    timeLab: {
      type: String,
      default: ''
    },
  },
  components:{swiper,swiperSlide},
  data() {
      return {
        thisIndex: this.three,
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
        },
        thisBrowser: this.browser,
        comment: '',
        studyList: '',
        sList: []
      }
  },
  created() {
    console.log('this is a prop :' + this.thisIndex)
    console.log(this.thisBrowser)
  },
  methods: {
    getImageAccordingToBrowser(){
      if (this.browser === 'safari'|| this.browser === 'Safari' || this.browser === 'MQQBrowser') {
        this.getPrintScreen(this.browser)
      } else {
        this.createImage(this.browser)
      }
    },
    //获取截图方法
    getPrintScreen(browser) {
      html2canvas(this.$refs.imageDom,
      {
        imageTimeout: 15000, //newline
        scale: 3, //newline
        dpi:300,
        useCORS: true, //图片跨域，开启跨域配置
        logging: false,//日志开关，便于查看html2canvas的内部执行流程
        taintTest: true,//是否在渲染前测试图片
      }).then(canvas => {
        // 转成图片，生成图片地址
        let imgUrl = canvas.toDataURL("image/png", 1); //可将 canvas 转为 base64 格式
        let eleLink = document.createElement("a");
        eleLink.href = imgUrl // 转换后的图片地址
        eleLink.download = browser + 'canvas'
        document.body.appendChild(eleLink);
        eleLink.click()
        document.body.removeChild(eleLink);
      })
    },
    createImage(browser) {
      let node = document.getElementById('test')
      node.className = 'test2'
      console.log(node.offsetHeight)
      console.log(node.offsetWidth)
      let that = this
      domtoimage.toPng(node,{scale:2,width:node.offsetWidth,height:node.offsetHeight,useCORS:true})
        .then(function (dataUrl) {
          console.log(dataUrl)
          that.dataUrl = dataUrl
            // console.log(this.browser)
            FileSaver.saveAs(dataUrl, browser + 'poster')
            node.className = 'test'
        })
        .catch(function (error) {
          console.error('生成失败', error);
        })
    },
    javaScriptCanvas() {
      var canvas = document.createElement("canvas")
      canvas.getContext("2d")//对应的CanvasRenderingContext2D对象(画笔)
      var img = document.getElementById("poster")//创建新的图片对象
      console.log(img)
      var base64 = '' ;//base64 
      // img.src = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
      console.log(img.width)
      console.log(img.height)
      var topMargin  = img.height * 0.1
      var bottomMargin  = img.height * 0.5
      var leftMargin = img.width * 0.17
      var rightMargin = img.width * 0.17
      console.log('上边距'+topMargin)
      console.log('下边距'+bottomMargin)  
      console.log('左边距'+leftMargin)
      console.log('右边距'+rightMargin)
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx=canvas.getContext("2d");
      ctx.drawImage(img,0,0, img.width, img.height);
      /* 画出证书矩形begin */
      ctx.fillStyle= "#b21f66";
      ctx.fillRect(leftMargin,topMargin,img.width-leftMargin-rightMargin,img.height*0.45)
      /* 画出证书矩形end */
      /* 画出上描边begin */
      ctx.strokeStyle= "#ffbd69";
      ctx.moveTo(leftMargin*1.1, topMargin*1.1)
      ctx.lineTo(img.width*0.813, topMargin*1.1)
      ctx.stroke()
      /* 画出上描边end */
      /* 画出下描边begin */
      ctx.strokeStyle= "#ffbd69";
      ctx.moveTo(leftMargin*1.1, img.height * 0.54)
      ctx.lineTo(img.width*0.813,img.height * 0.54)
      ctx.stroke()
      /* 画出下描边end */
      /* 画出左描边begin */
      ctx.strokeStyle= "#ffbd69";
      ctx.moveTo(leftMargin*1.1, topMargin*1.1)
      ctx.lineTo(leftMargin*1.1, img.height * 0.54)
      ctx.stroke()
      /* 画出左描边end */
      /* 画出右描边begin */
      ctx.strokeStyle= "#ffbd69";
      ctx.moveTo(img.width*0.813, topMargin*1.1)
      ctx.lineTo(img.width*0.813, img.height * 0.54)
      ctx.stroke()
      /* 画出下描边end */
        base64 = canvas.toDataURL("image/png"); 
        FileSaver.saveAs(base64, 'a.jpeg');
        console.log(base64)
    },
    sumbit() {
      const view = {
        comment: this.comment,
        studyList: this.studyList
      }
      this.$emit('sumbit',view)
      // console.log('提交我的留言' + this.comment)
    },
    choose() {
      this.sList
      this.studyList
    }
  }
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Lato:300,400,700,900&display=swap'); */
.body{
    /* 100%窗口高度 */
    height: 100vh;
    /* 弹性布局 水平+垂直居中 */
    /* display: flex; */
    background: linear-gradient(to bottom, #1b2947, #2b3152, #3b385d, #4c4067, #5d4771);
    background-size: cover;
    width: 100%;
} 
.thebtn {
  position: absolute;
  bottom:15%;
  display: flex;
  justify-content: center;
  width: 100%;
}
/* 搜索按钮 */
.search-btn{
    /* 相对定位 */
    z-index: 100;
    width: 100px;
    height: 37px;
    line-height: 37px;
    text-align: center;
    border-radius: 7px;
    /* 鼠标移入变小手 */
    cursor: pointer;
    color: #fff;
    background-color: #f1c40f;
    text-shadow:
        -2px 2px 2px rgb(209, 132, 0),
        -2px 2px 2px rgb(209, 132, 0),
        -2px 2px 2px rgb(209, 132, 0),
        -2px 2px 2px rgb(209, 132, 0),
        -2px 2px 2px rgb(209, 132, 0),
        -2px 2px 2px rgb(209, 132, 0);
    box-shadow: 0px 15px 0px 0px #f39c12;
    transition: all .5s;
}
.search-btn:hover {
        background-color: #fcdc5e;
}
.search-btn:active {
    transform: translate(0,4px);
    box-shadow: 0px 1px 0px 0px #f39c12;
}

.imgCreate {
    /* 相对定位 */
    z-index: 100;
    width: 100px;
    height: 37px;
    line-height: 37px;
    text-align: center;
    border-radius: 7px;
    /* 鼠标移入变小手 */
    cursor: pointer;
        color: #fff;
        background-color: #f1c40f;
        text-shadow:
        -2px 2px 2px rgb(209, 132, 0),
        -2px 2px 2px rgb(209, 132, 0),
        -2px 2px 2px rgb(209, 132, 0),
        -2px 2px 2px rgb(209, 132, 0),
        -2px 2px 2px rgb(209, 132, 0),
        -2px 2px 2px rgb(209, 132, 0);
        box-shadow: 0px 15px 0px 0px #f39c12;
        transition: all .5s;
    }

    .imgCreate:hover {
        background-color: #fcdc5e;
    }
    .imgCreate:active {
        transform: translate(0,4px);
        box-shadow: 0px 1px 0px 0px #f39c12;
    }

.search-btn .fa{
    color: #fff;
    font-size: 22px;
}
/* 关闭按钮 */
.close-btn{
    /* 绝对定位 */
    position: absolute;
    top: 0%;
    left: 5%;
    z-index: 1;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    display: none;
    z-index: 121;
}
.container{
    /* 固定定位 */
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 渐变背景 */
    background: linear-gradient(170deg,#2a95f8,#003ea8);
    /* 将元素剪切为一个圆形(30px表示圆的半径, 50% 50%表示圆心的位置) */
    clip-path: circle(0px at 50% 50%);
    /* 设置过渡 */
    transition: 0.4s;
    z-index: 100;
}
.search-box{
    /* 默认宽度为0(隐藏) */
    width: 0;
    height: 50px;
    display: flex;
    border-bottom: 3px solid #fff;
    /* 溢出隐藏 */
    overflow: hidden;
    /* 设置过渡 */
    transition: 0.3s;
    position: absolute;
    bottom: 10%;
}
.search-box input{
    width: 100%;
    height: 50px;
    border: none;
    background: none;
    outline: none;
    color: #fff;
    font-size: 22px;
    text-indent: 8px;
}
.search-box input::placeholder{
    color: rgba(255,255,255,0.7);
}
.search-box .fa{
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
}
#search_btn:checked ~ .search-btn{
    display: none;
}
#search_btn:checked ~ .close-btn{
    display: block;
}
#search_btn:checked ~ .container{
    clip-path: circle(100%);
}
#search_btn:checked ~ .container .search-box{
    width: 400px;
}
.btn{
  color: #fff;
}


/* 树形列表begin */
.shell {
    position: absolute;
    top: 5%;
    display: block;
    width: 600px;
    text-align: start;
}
@media screen and (min-width: 401px) and (max-width: 599px) {
    .shell {
        position: absolute;
        top: 5%;
        display: block;
        width: 400px;
        text-align: start;
    }
}
@media screen and (min-width: 280px) and (max-width: 400px) {
    .shell {
        position: absolute;
        top: 5%;
        display: block;
        width: 300px;
        text-align: start;
    }
    #search_btn:checked ~ .container .search-box{
        width: 300px;
    }
}
  details {
    position: relative;
    width: auto;
    height: auto;
    overflow: hidden;
    max-height: 2.5em !important;
    transition: 1s;
  }

  details[open] {
    max-height: 600px !important;
  }

  details>summary {
    position: relative;
    margin-top: 0.25em;
    color: rgb(109, 153, 233);
    padding: 0.1em .5em .2em;
    background-color: #444;
  }
  details>summary::before {
    content: '田';
    color: #eee;
    margin-right: 0.5em;
  }
  details[open]>summary {
    background-color: rgb(14, 76, 190);
  }
  details[open]>summary::before {
    content: '曰';
    background-color: #444;
  }
  .folder{
    border-left: 2px dotted #ccc;
    border-bottom: 2px dotted #ccc;
    margin: 0 0 10px 10px;
    padding: 10px 0 10px 20px;
  }
  .outer {
        height: 67vh;
        overflow-y: scroll;
    }
    .inter {
        height: 87vh;
        width: 100%;
    }
.poster{
  position: relative;
  left:50%;
  transform:translateX(-50%); /*百分比的参照物是自身*/
  height: 100%;
  width: 100%;
  /* background-color: #130048; */
  /* border: #003ea8 7px solid; */
}
.test {
  position: absolute;
  margin-top: 30px;
  left:50%;
  transform:translateX(-50%); /*百分比的参照物是自身*/
  height: 70%;
  width: 80%;
}
@keyframes faguang {
  from{
    letter-spacing: 0.25em;
    box-shadow: 0 0 1px #f1c40f;
  }to {
    letter-spacing: 0.25em;
    box-shadow: 0 0 45px #f1c40f;
  }
}



/** 证书 **/
.winner-wrap{
  position:absolute;
  width:55%;
  height:30%;
  background:#b21f66;
  position:absolute; /*参照物是父容器*/
  left:50%;
  top: 11%;
  transform:translateX(-50%); /*百分比的参照物是自身*/
  /* position:relative; */
  padding:1rem 2rem 4.5rem 2rem;
 font-family: Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Heiti SC', STXihei, 'Microsoft YaHei', SimHei;
  text-align:center;
  z-index: 88;
}

.border{
  position:absolute;
  width:90%;
  height:90%;
  border:1px solid rgba(255, 189, 105, 0.4);
  left:0; right:0;
  top:0; bottom:0;
  margin:auto;
}
.medal-box{
  width:10px;
  height:10px;
  /* background:#fe346e; */
  color:#ffbd69;
  border-radius:50px;
  line-height:10px;
  font-size:1.1rem;
  margin:.4rem auto 0rem;
}
.winner-wrap h1{
  color:rgba(255, 189, 105, 0.95);
  font-size:1rem;
  font-weight:400;
  text-transform:uppercase;
  /* margin-bottom:1rem; */
  margin-bottom: 0;
}
.winner-wrap h2{
  color:#fff;
  font-size:1.1rem;
  font-weight:400;
  text-transform:uppercase;
  margin-bottom: 0;
  margin-top: 0;
}
@media screen and (min-height: 700px) and (max-height: 810px) {
  .winner-wrap h1{
    color:rgba(255, 189, 105, 0.95);
    font-size:1.1rem;
    font-weight:400;
    text-transform:uppercase;
    /* margin-bottom:1rem; */
    margin-bottom: 0;
  }
  .winner-wrap h2{
    color:#fff;
    font-size:1.3rem;
    font-weight:400;
    text-transform:uppercase;
    margin-bottom: 0;
    margin-top: 0;
  }
}

@media screen and (min-height: 811px) and (max-height: 910px) {
  .winner-wrap h1{
    color:rgba(255, 189, 105, 0.95);
    font-size:1.2rem;
    font-weight:400;
    text-transform:uppercase;
    /* margin-bottom:1rem; */
    margin-bottom: 0;
  }
  .winner-wrap h2{
    color:#fff;
    font-size:1.5rem;
    font-weight:400;
    text-transform:uppercase;
    margin-bottom: 0;
    margin-top: 0;
  }
}

.winner-ribbon{
  width:100%;
  height:25px;
  background:#ffbd69;
  text-align:center;
  font-family: 'Bebas Neue', cursive;
  font-size:1.2rem;
  color:#fe346e;
  position:absolute;
  bottom:35px;
  left:0;
  z-index:99;
  box-shadow:0 10px 15px -7px rgba(0,0,0,0.2)
}
.right-ribbon{
  width:0;
  height:0;
  position:absolute;
  right:-35px;
  bottom:30px;
  border-top:10px solid #E0B05C;
  border-bottom:10px solid #E0B05C;
  border-left:10px solid #E0B05C;
  border-right:25px solid transparent;
  transition:all ease .3s;
}
.left-ribbon{
  width:0;
  height:0;
  position:absolute;
  left:-35px;
  bottom:30px;
  border-top:10px solid #E0B05C;
  border-bottom:10px solid #E0B05C;
  border-left:25px solid transparent;
  border-right:10px solid #E0B05C;
  transition:all ease .3s;
}
/** 证书 **/

/** 证书 打印 **/
.test2 {
  position: absolute;
  left:40%;
  transform:translateX(-50%); /*百分比的参照物是自身*/
  height: 70%;
  width: 80%;
}
/** 证书 打印 **/
</style>