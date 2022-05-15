<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" class="tab-control-item" 
    :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'TabControl',
  props:{
    // 传入的tabcontrol标题
    titles:{
      type:Array,
      // 当默认值是对象或数组时，默认值必须是函数
      default(){
        return []
      }
    },
    msg: String
  },
  data(){
    return{
      // 记录当前选中的项
      currentIndex:0
    }
  },
  methods:{
    // 设置点击事件：当前点击选项变色
    itemClick(index){
      console.log("tabControlitemClick")
      this.currentIndex=index;
      // 向home组件传入事件
      this.$emit('tabclick',index)
    }
  }
}
</script>


<style >
.tab-control{
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  background-color: #fff;
  
}
.tab-control-item{
  flex:1
}
.tab-control-item span{
  padding: 3px;
}

.active span{
  color:deeppink;
  border-bottom: 2px solid deeppink;
}
</style>
