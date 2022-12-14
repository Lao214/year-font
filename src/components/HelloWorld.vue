<template>
  <div>
      <div style="padding:50px;width:500px;border:1px solid red;" id="test">
          <p>我是p标签</p>
          <h1>我是h1标签</h1>
          <div>我是div标签</div>
          <!-- <img src="./11" style="width:200px;" /> -->
      </div>
      <el-button type="primary" @click="createImage">生成图片</el-button>
      <div style="width:500px;height:200px;margin-top:20px;border:1px solid red;">
          <p>生成的图片</p>
          <img :src="dataUrl" style="width:200px;" />
      </div>
  </div>
</template>

<script>
import domtoimage from 'dom-to-image'
import FileSaver from 'file-saver';
export default {
  data() {
      return {
          dataUrl: ''
      }
  },
  methods: {
      createImage() {
          let node = document.getElementById('test');
          let that = this
          domtoimage.toPng(node)
              .then(function (dataUrl) {
                  console.log(dataUrl)
                  that.dataUrl = dataUrl
                  FileSaver.saveAs(dataUrl, 'a.png');
              })
              .catch(function (error) {
                  console.error('生成失败', error);
              });
      },
  }
}
</script>
