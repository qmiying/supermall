<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
//import PullUp from '@better-scroll/pull-up';

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
    },
    // 传出，home.vue中使用
    pullUpLoad:{
      type:Boolean,
      default:false
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
      // 保存是否需要上拉加载更多
      pullUpLoad:this.pullUpLoad
    })
    
    // 2.监听滚动位置,'scroll'为正在滚动时触发
    // 判断当前是否是可滚动状态    
    if(this.probeType === 2 || this.probeType === 3){
      this.scroll.on('scroll',(position) => {
     //console.log(position);
    // 将滚动位置信息传出，在home.vue中使用，谁要使用此传出的事件用@事件名调用
        this.$emit('scroll', position)
      })
    }
    // 3.实现加载更多 监听上拉事件
    if(this.pullUpLoad) {       
      this.scroll.on('pullingUp',()=>{
        //当滚动到底部的时候调用。
        this.$emit('pullingUp')
      })
    }
  },
  methods:{
    // 封装滚动到顶部的方法,方便其他页面调用
    // es6添加time默认值
    scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      // 此finishPullUp()是betterscroll里的
      this.scroll && this.scroll.finishPullUp()
    },
    // 封装用在图片刷新语句
    refresh(){
      // 判断scroll初始化没有，没初始化就不继续下面的代码
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style >

</style>
