<template>
  <div class="goods-item">
    <!-- 获取单个商品goodsitem中的数据展示信息 -->
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect"> ☆{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GoodsListItem',
  props:{
    msg: String,
    // 从父组件goodslist中得到单个商品的详情
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>


<style >
.goods-item{
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price{
  color:plum;
  margin-right:20px;
}
.goods-info .collect{
  position: relative;
}
.goods-info .collect::before{
  content:'';
  position: absolute;
  left:-15px;
  top:-1px;
  width: 14px;
  height: 14px;
  /* background:url("~assets/img/commom/collect1.svg") ; */
}
</style>
