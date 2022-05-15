<template>
  <div class="back-top">
    <img src="~assets\img\common\top.png" alt="">   
  </div>
</template>

<script>

export default {
  name: 'BackTop',
  props:{
    msg: String
  }
}
</script>


<style >
.back-top{
  position: fixed;
  right: 40px;
  bottom: 60px;

}
.back-top img{
  widows: 46px;
  height: 46px;
}

</style>
