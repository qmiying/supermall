<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll:null
    }
  },
  props:{
    // 设置派发滚动方式，默认为0：不派发
    probeType:{
      type:Number,
      default:0
    }
  },
  mounted(){
    // 给组件添加refs属性，用以指定获取的获取的组件或标签
    // 1. 创建scroll对象
    this.scroll = new Bscroll(this.$refs.wrapper,{
      // scroll组件中不设置click为true则buttom以外的标签不起作用，例如div
      click:true,
      // 传入监听方式
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    // 2.监听滚动位置,'scroll'为正在滚动时触发    
    this.scroll.on('scroll',(position) => {
      //console.log(position);
    // 将滚动位置信息传出，在home.vue中使用，谁要使用此传出的事件用@事件名调用
      this.$emit('scroll', position)
    })
  },
  methods:{
    // 封装滚动到顶部的方法,方便其他页面调用
    // es6添加time默认值
    scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      // 此finishPullUp()是betterscroll里的
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style >

</style>
