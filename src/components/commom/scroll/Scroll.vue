<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Scroll',
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
    this.scroll=new Bscroll()
  },
  props:{
    msg: String
  }
}
</script>


<style >

</style>
