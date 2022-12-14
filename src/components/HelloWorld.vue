<template>
  <div style="color:#fff">
    <div class="icon-button right">
  <!--截屏按钮图标-->
      <button class="iconfont icon-iconcut" @click="screenShot">下载</button>
    </div>
  </div>
  </template>
  
  <script>
  import html2canvas from "html2canvas";
  export default {
      // components:{swiper,swiperSlide},
      data(){
          return{
            imgUrl: null //截图地址
          }
      },
      methods: {
        //截图
        screenShot() {
          //获取页面dom
          //这里的html标签是获取页面最大的dom元素；根据实际业务场景自行更改
          const el = document.querySelector('html');
          html2canvas(el, {allowTaint: true}).then((canvas)=> {
            //document.body.appendChild(canvas)  页面布局会乱
            //转换base64
            const capture = canvas.toDataURL('image/png');
            //下载浏览器弹出下载信息的属性
            const saveInfo = {
            //导出文件格式自己定义，我这里用的是时间作为文件名
              'download': `1.png`,
              'href': capture
            };
            //下载，浏览器弹出下载文件提示
            this.downloadFile(saveInfo);
          
            //调用保存接口 如果需要后台保存，放开注释
        /*   uploadImage({capture:capture}).then(res => {
              if (res.code == 200) {
                this.$message.success("截取成功！")
              }
            });*/
          })
        },
        //下载截图
        downloadFile(saveInfo) {
          const element = document.createElement('a');
          element.style.display = 'none';
          for (const key in saveInfo) {
            element.setAttribute(key, saveInfo[key]);
          }
          document.body.appendChild(element);
          element.click();
          setTimeout(() => {
            document.body.removeChild(element);
          }, 300)
        }
      }
  
  }
  </script>