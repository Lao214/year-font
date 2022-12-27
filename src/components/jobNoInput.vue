<template>
  <div class="body">
    <div class="shell">
      <input type="text" placeholder="请输入工号" v-model="thisJobNo">
      <a href="#">
        <i class="fa fa-hand-o-right" @click="sumbit()"></i>
        <i class="fa fa-edit"></i>
      </a>
    </div>
    <!-- <div class="paopao">
        <div class="bubble"></div>
        <div class="shadow"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    jobNo: {
      type: String,
      default: ''
    },
  },
  data() {
      return {
        thisJobNo: this.jobNo
      }
  },
  created() {
    // console.log('this is a prop :' + this.thisJobNo)
  },
  methods: {
    sumbit() {
      this.$emit('inputJobNo',this.thisJobNo)
    }
  }
}
</script>

<style scoped>
  * {
    outline: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }

  .body { 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(170deg,#42c2ff,#2c79ff);
  }

  .shell {
    position: relative;
    width: 1000px;
    padding: 33px;
    background-color: #009EFF;
    border-radius: 20px;
    box-shadow: 0 10px 50px #154b88,0 0 0 20px #fff;
  }

  .shell input {
    width: 80%;
    height: 100px;
    font: 300 80px '优设标题黑';
    border: 0;
    background-color: transparent;
  }

  .shell a{
    display: flex;
    font-size: 120px;
    position: absolute;
    right: 60px;
    top: 10px;
    color: #fff;
    width: 250px;
    height: 150px;
  }

  .shell a .fa-edit{
    transform: translateX(-80px);
  }
  .shell a .fa-hand-o-right{
    transform: translateX(-100px);
    opacity: 0;
  }
  .shell:hover .fa-edit{
    transform: translateX(0);
    opacity: 0;
  }
  .shell:hover .fa-hand-o-right{
    transform: translateX(110px);
    opacity: 1;
  }


  @media screen and (min-width: 860px) and (max-width: 1120px) {
  .shell {
    position: relative;
    width: 750px;
    padding: 33px;
    background-color: #009EFF;
    border-radius: 20px;
    box-shadow: 0 10px 50px #154b88,0 0 0 20px #fff;
  }
}
@media screen and (min-width: 590px) and (max-width: 859px) {
  .shell {
    position: relative;
    width: 480px;
    padding: 30px;
    background-color: #009EFF;
    border-radius: 20px;
    box-shadow: 0 10px 50px #154b88,0 0 0 20px #fff;
  }
  .shell input {
    width: 80%;
    height: 75px;
    font: 300 60px '优设标题黑';
    border: 0;
    background-color: transparent;
  }
  .shell a{
    display: flex;
    font-size: 85px;
    position: absolute;
    right: 60px;
    top: 10px;
    color: #fff;
    width: 180px;
    height: 100px;
  }
}

@media screen and (min-width: 380px) and (max-width: 589px) {
  .shell {
    position: relative;
    width: 270px;
    padding: 30px;
    background-color: #009EFF;
    border-radius: 20px;
    box-shadow: 0 10px 50px #154b88,0 0 0 20px #fff;
  }
  .shell input {
    width: 80%;
    height: 45px;
    font: 300 40px '优设标题黑';
    border: 0;
    background-color: transparent;
  }
  .shell a{
    display: flex;
    font-size: 70px;
    position: absolute;
    right: 20px;
    top: 10px;
    color: #fff;
    width: 140px;
    height: 90px;
  }
  .shell:hover .fa-hand-o-right{
    transform: translateX(60px);
    opacity: 1;
  }
}

@media screen and (min-width: 180px) and (max-width: 379px) {
  .shell {
    position: relative;
    width: 190px;
    padding: 20px;
    background-color: #009EFF;
    border-radius: 20px;
    box-shadow: 0 10px 50px #154b88,0 0 0 20px #fff;
  }
  .shell input {
    width: 80%;
    height: 25px;
    font: 300 20px '优设标题黑';
    border: 0;
    background-color: transparent;
  }
  .shell a{
    display: flex;
    font-size: 30px;
    position: absolute;
    right: 15px;
    top: 10px;
    color: #fff;
    width: 70px;
    height: 70px;
  }
  .shell:hover .fa-hand-o-right{
    transform: translateX(21px);
    opacity: 1;
  }
}
  .shell input::placeholder {
    color: #8f36367e;
  }

  .shell a .fa {
    margin: 10px 28px;
    transition: .3s;
  }
</style>