<template>
  <div class="block">
    <div class="box">
      <div class="chilld-box">
        <div class="rotate-animate fill-color"></div>
      </div>
    </div>
    <!-- css实现圆环加载动画 -->
    <!-- <div class="rotate-animate"></div> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods:{
      handChange(val){
        alert(val)
      }
    }
  };
</script>
<style scoped>
  .box{
    position: absolute;
    left: 400px;
    top: 200px;
    width: 800px;
    height: 400px;
    border: 1px solid green;
    overflow: hidden;
    overflow-y: scroll;
    animation: rotate1 100s linear infinite;
  }
  .box::-webkit-scrollbar{
    display: none;
    /* width: 0;
    height: 0;
    color: transparent; */
  }
  .chilld-box{
    position: relative;
    top: 10px;
    left: 20px;
    width: 1000px;
    height: 800px;
    border: 2px solid red;
    
    
  }
  .rotate-animate {
    width: 100px;
    height: 100px;
    border:10px solid #f3f3f3;
    border-radius:50%;
    /* border-top:10px solid #2842d8; */
    /* border-bottom:10px solid #f40;
    border-left:10px solid green;
    border-right:10px solid gold; */
    animation:rotate2 10s linear infinite;
}
  .rotate-animate.fill-color {
    margin-left: 20px;
    border-color: #2842d8 #d1b516 #cf4928 #27c965;
  }
@keyframes rotate1{
    0%{
        transform: rotate(0deg);
    }
    30%{
      transform: rotate(90deg);
    }
    60%{
      transform: rotate(180deg);
    }
    100%{
        transform:rotate(360deg);
    }
}
@keyframes rotate2{
    0%{
        transform: rotate(0deg);
    }
    30%{
      transform: rotate(90deg);
    }
    60%{
      transform: rotate(180deg);
    }
    100%{
        transform:rotate(360deg);
    }
}

</style>