<template>
 <div class="body">
   <div class="container">
        <a href="#" class="pluse"></a>
        <p>点击查看</p>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.body{
    background: url('../assets/bg.jpg');
    background-size: cover;
    width: 100%;
    height: 100vh;
    
  }
  .container{
    position: absolute;
    padding-top: 80vh;
    margin-left: 160px;
  
  }
  .container p{
    padding-top: 8vh;
    color: white;
    margin-left: -8px;
  }
  .pluse{
    position: absolute;
    padding: 7px;
    width: 2rem;
    color: #fff;
    transition: all .5s ease;
    background: rgb(255,215,0);
    /* top: 50%;
    right: 50%;
    margin-right: 50%;
    margin-top: 50%; */
  }
  .pluse,
  .pluse::before,
  .pluse::after{
    content: "";
    display: grid;
    grid-area: 1/1;
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: 0 0 0 0 #d9ea18c0;
    animation: plusing 3s linear infinite var(--s,0s);
  }
  .pluse::before{
    --s:1s
  }
  .pluse::after{
    --s:2s
  }
  .pluse:hover{
    background: #35D1E633;
    color: #ffffff99;
  }
@keyframes plusing {
    to{
        box-shadow: 0 0 0 2rem #0000;
    }
}
</style>