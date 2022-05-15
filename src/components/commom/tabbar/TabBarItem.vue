<template >
<div class="tab-bar-item" @click="itemClick">
  <div v-if="!isActive">
    <slot name="item-icon"></slot>
  </div>
  <div v-else>
    <slot name="item-icon-active" ></slot>
  </div>
<!-- 加外层div动态绑定class防止替换插槽后v-bind:无作用 -->
  <!-- <div :class="{active:isActive}"> -->
    <!-- 动态绑定一个颜色d的计算属性属性，替换以上做法， -->
  <div :style="activeStyle">
    <slot name="item-text"></slot></div>
  </div>  
</template>

<script>
export default {
  name: 'tabbaritem',
  props: {
    msg: String,
    // 设置跳转路由的变量path为字符串类型，此变量在每一个item中设置
    path:String,
    // 设置item颜色的默认值
    activeColor:{
      type:String,
      default:"deeppink"

    }
  },
  data(){
    return{
     // isActive:false
    }
  },
  //利用计算属性获取当前活跃的item改变颜色
  computed:{
    isActive(){
      // 当前活跃的路径中有没有匹配path的字符串，=-1时没有
     return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      // 获取当前活跃的item，修改为activeColor颜色
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  // 设置点击item跳转路由
  methods:{
    itemClick(){
      console.log("tabbarItemClick");
      // 传入的地址path为各个item的独立设置值
      this.$router.push(this.path)

    }
  }
}
</script>

<style>
.tab-bar-item{
  /* 水平均分 */
  flex:1;
  text-align: center;
  background-color: #f8f8f8;
  font-size: 14px;
}
.tab-bar-item img{
width: 23px;
height: 23px;
vertical-align: middle;
}
.active{
  color: deeppink;
}
</style>