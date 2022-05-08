<template>
  <div class="goods">
    <!-- goods-list-item里面不放插槽，直接使用单标签 -->
    <!-- goodsListItem存放单个商品的详细信息，需从父组件goodslist的goods列表中获取单个商品 -->
    <!-- goods-item标签中展示单个item的详情 -->
    <goods-list-item v-for="item in goods" :key="item" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem"

export default {
  name: 'GoodsList',
  // 从父组件home中请求到goods数据,绑定到home中的goodslist标签中
  props:{
    msg: String,
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>


<style >
.goods{ 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding:2px;
 }
 

</style>
