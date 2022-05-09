<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import Bscroll from 'better-scroll'
=======
<<<<<<< HEAD
import Bscroll from 'better-scroll'
=======
import BScroll from 'better-scroll'
>>>>>>> 5bd52b1 (5-9 home商品请求完成)
>>>>>>> fdd9d1a (4-9 商品请求完成)
export default {
  name: 'Scroll',
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
<<<<<<< HEAD
    this.scroll=new Bscroll()
=======
<<<<<<< HEAD
    this.scroll=new Bscroll()
=======
    this.scroll=new BScroll()
>>>>>>> 5bd52b1 (5-9 home商品请求完成)
>>>>>>> fdd9d1a (4-9 商品请求完成)
  },
  props:{
    msg: String
  }
}
</script>


<style >

</style>
