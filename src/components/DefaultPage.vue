<template>
  <div class="body">
    <div class="container">
      <p class="flip-horizontal-top">
        &nbsp;&nbsp;亲爱的<a
          style="font-size: 1.2rem; color: rgb(255, 215, 0)"
          >{{ dataObj.stuName }}</a
        >小伙伴，很遗憾告诉您2022年您没有在富学宝典上进行学习。
      </p>
      <div class="container1">
        <p>无论是在繁荣还是萧条时期,</p>
        <p>快乐学习都是一份宝贵的礼物。</p>
        <p>2023年要加油哟～</p>
      </div>
    </div>
    <img src="../assets/peaco.webp" class="imggundam" alt="" />
  </div>
</template>

<script>
export default {
  props: ["dataObj"],
};
</script>

<style scoped>
.body {
  background: url("../assets/bg.jpg");
  background-size: cover;
  width: 100%;
  height: 100vh;
}
.container {
  display: inline-block;
  padding-top: 90px;
  padding-left: 21px;
  padding-right: 21px;
}
.imggundam {
  margin-top: 35px;
  width: 338px;
  height: 260px;
  animation: bounce-in-top 1.1s both 0.2s;
}
.flip-horizontal-top {
  color: white;
  font-size: 1.2rem;
  text-align: start;
  font-weight: 600;
}
.container1 {
  color: rgb(255, 215, 0);
  text-align: center;
  font-size: 1.2rem;
  margin-top: 80px;
}
</style>