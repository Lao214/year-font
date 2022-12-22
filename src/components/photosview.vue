<template>
  <div class="content">
    <h1>preview图片预览Demo</h1>
    <img v-for="src in imgs" :src="src.url" :key="src.title" :preview="src.preview" :preview-text="src.title">
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        {
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          title: "图片1",
          preview: "1"
        },
        {
          url:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          title: "图片2",
          preview: "1"
        }
      ]
    };
  }
};
</script>
<style>
.content img {
  width: 80px;
  height: 80px;
  padding: 0 5px;
}
</style>
