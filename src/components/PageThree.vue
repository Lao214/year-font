<template>
  <div class="body">
        <div class="childSwiper">
          <div class="shadow">
            <div id="test" ref="imageDom">
                <img class="poster" src="../assets/poster.jpg" alt="" loading="lazy">
            </div>
          </div>
        </div>
    <input type="checkbox" id="search_btn" hidden>
        <label for="search_btn" class="search-btn" style="margin-right: 17px;">
            <a class="btn">新年学习清单</a>
        </label>
        <label class="imgCreate">
            <a class="btn" @click="getImageAccordingToBrowser()">生成海报</a>
        </label>
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
            <input type="text" placeholder="我还想要学...">
            <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
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
        browser: ''
      }
  },
  created() {
    console.log('this is a prop :' + this.thisIndex)
    this.browser = this.getBrowser()
    console.log(this.browser)
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
      let node = document.getElementById('test');
      let that = this
      domtoimage.toPng(node,{scale:3,width:node.offsetWidth,height:node.offsetHeight})
        .then(function (dataUrl) {
          console.log(dataUrl)
          that.dataUrl = dataUrl
            // console.log(this.browser)
            FileSaver.saveAs(dataUrl, browser+'poster.png')
        })
        .catch(function (error) {
          console.error('生成失败', error);
        })
    },
    getBrowser() {
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      console.log("loginuserAgent:", userAgent)
      //判断是否Opera浏览器
      if (userAgent.indexOf("Opera") > -1) {
        return "Opera"
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
    }
  }
}
</script>

<style scoped>
.body{
    /* 100%窗口高度 */
    height: 100vh;
    /* 弹性布局 水平+垂直居中 */
    /* display: flex; */
    /* background-image: linear-gradient(to bottom, #1b2947, #2b3152, #3b385d, #4c4067, #5d4771); */
    background: linear-gradient(to bottom, #1b2947, #2b3152, #3b385d, #4c4067, #5d4771);
    background-size: cover;
    background-repeat:no-repeat;
	  background-attachment:fixed;
	  background-position:center; 
    width: 100%;
} 
/* 搜索按钮 */
.search-btn{
    /* 相对定位 */
    position: absolute;
    z-index: 100;
    width: 100px;
    height: 37px;
    line-height: 37px;
    text-align: center;
    bottom:15%;
    left: 20%;
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
    position: absolute;
    z-index: 100;
    width: 100px;
    height: 37px;
    line-height: 37px;
    text-align: center;
    bottom:15%;
    left: 50%;
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
    z-index: 101;
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
  height: 100%;
  width: 100%;
  margin: auto;
  display: block;
  /* margin: auto; */
  /* border: #003ea8 7px solid; */
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
.shadow {
  letter-spacing: 0.25em;
  box-shadow: 0 0 45px #f1c40f;
  animation: faguang .8s linear;
}
.childSwiper {
    padding: 40px 20px;
    height: 71%;
    position: absolute;
    font-family: Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Heiti SC', STXihei, 'Microsoft YaHei'; /* 根节点增加字体设置，避免iOS 15生成图片失败 */
}

</style>