<template>
  <div id="home">
    <!-- navbar -->
    <nav-bar class="home-nav"><template v-slot:center>购物街</template></nav-bar>
    <!-- 为首页固定区域设置滚动 -->
    <scroll>
        <!-- 导航栏swiper -->
      <home-swiper :banners='banners'></home-swiper>
      <!-- recomend栏 -->
      <recommend-view :recommends='recommends'></recommend-view>
      <!-- feature栏 -->
      <feature-view></feature-view>
      <!-- 接收tabcontrol组件中传入的自定义事件tabclick，在当前页的tabClick事件中执行 -->
      <tab-control :titles="['流行','新款','精选']" 
        @tabclick="tabClick"
        class="tab-control"></tab-control>
      <!-- 从goods中的pop类型数据中取出商品列表赋值到goodslist组件的goods中 -->
      <goods-list :goods="showGoods"/>
    </scroll>
      <ul>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
        <li>测试用的</li>
      </ul>

  </div>
</template>

<script>
// 公共组件导入
import NavBar from "components/commom/navbar/NavBar"
import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import Scroll from "components/commom/scroll/Scroll"
//import Scroll from "components/commom/scroll/Scroll"

// 页面组件导入
import HomeSwiper from "./childrenComps/HomeSwiper"
import RecommendView from "./childrenComps/RecommendView"
import FeatureView from "./childrenComps/FeatureView"


import Scroll from "../../components/commom/scroll/Scroll.vue"



</script>

<style>
#home{
  /* 固定导航栏 */
  padding-top: 44px;
}
.home-nav{
  background-color: rgb(238, 166, 178);
  color: #fff;
  /* 固定导航栏 */
  position: fixed;
  left: 0;
  right: 0;
  top:0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top:40px;
  z-index:9;
}
</style>