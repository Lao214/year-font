<template>
  <div class="body">
  <input type="checkbox" id="search_btn" hidden>
    <label for="search_btn" class="search-btn">
        <!-- <i class="fa fa-search" aria-hidden="true"></i> -->
        <a class="btn">愿望清单</a>
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
export default {
  props: {
    three: {
      type: Number,
      default: 0
    },
  },
  data() {
      return {
        thisIndex: this.three
      }
  },
  created() {
    console.log('this is a prop :' + this.thisIndex)
  }
}
</script>

<style scoped>
.body{
    /* 100%窗口高度 */
    height: 100vh;
    /* 弹性布局 水平+垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 搜索按钮 */
.search-btn{
    /* 相对定位 */
    position: relative;
    z-index: 1;
    width: 80px;
    height: 37px;
    line-height: 37px;
    text-align: center;
    border-radius: 7%;
    /* 鼠标移入变小手 */
    cursor: pointer;
    background: linear-gradient(200deg,#6e86ee,#453c90);
}
.search-btn .fa{
    color: #fff;
    font-size: 22px;
}
/* 关闭按钮 */
.close-btn{
    /* 绝对定位 */
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 1;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    display: none;
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
    background: linear-gradient(200deg,#6e86ee,#453c90);
    /* 将元素剪切为一个圆形(30px表示圆的半径, 50% 50%表示圆心的位置) */
    clip-path: circle(0px at 50% 50%);
    /* 设置过渡 */
    transition: 0.4s;
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
    color: #99e;
    padding: 0.1em .5em .2em;
    background-color: #444;
  }
  details>summary::before {
    content: '田';
    color: #eee;
    margin-right: 0.5em;
  }
  details[open]>summary {
    background-color: #66e;
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
</style>