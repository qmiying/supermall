<template>
  <div id="home">
    <!-- navbar -->
    <nav-bar class="home-nav"><template v-slot:center>购物街</template></nav-bar>
    <!-- 为首页固定区域设置滚动 -->
    <!-- 为滚动区域添加ref属性,派发滚动方式3：实时监听： -->
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" >
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
    <!-- vue2对组件标签使用点击时，需要添加标签native：@click.native -->
    <back-top @click="backClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
// 公共组件导入
import NavBar from "components/commom/navbar/NavBar"
import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import Scroll from "components/commom/scroll/Scroll"
import BackTop from "components/content/backTop/BackTop"

// 页面组件导入
import HomeSwiper from "./childrenComps/HomeSwiper"
import RecommendView from "./childrenComps/RecommendView"
import FeatureView from "./childrenComps/FeatureView"

import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
		name: "Home",
    components: {
		  NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,

      HomeSwiper,
      RecommendView,
      FeatureView
      
    },
    data() {
		  return {
		    banners: [],
        recommends: [],
        goods: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        currentType: 'pop', 
        // 默认返回顶部按钮隐藏
        isShowBackTop:false
      }
    },
    computed: {
		  showGoods() {
		    return this.goods[this.currentType].list
      }
    },
    created() {
      // 1.请求轮播图数据
      this.getMultiData()

      // 2.请求商品数据
      this.getHomeGoodsList('pop')
      this.getHomeGoodsList('new')
      this.getHomeGoodsList('sell')

    },
    activated: function () {
      this.$refs.hSwiper.startTimer()
    },
    deactivated: function () {
      this.$refs.hSwiper.stopTimer()
    },
    updated() {
      // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      // console.log(this.tabOffsetTop);
    },
    methods: {
		  tabClick(index) {
		    switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      // 返回顶部按钮
      backClick(){
        console.log('点击了返回');
        // 获取当前滚动区域的scroll对象：$refs.scroll，添加封装在Scroll.vue中的滚动到顶部方法
        this.$refs.scroll.scrollTo(0,0)
      },
      // 根据滚动区域选择显示回到顶部按钮
      contentScroll(position){
        //console.log(position)
        // 滚动区域大于1000时，isShowBackTop为true，显示按钮
        this.isShowBackTop = (-position.y) > 1000
      },
      /**
       * 网络请求相关方法:
       */
      // 获取轮播图和推荐数据
      // 进一步将获取数据的方法getHomeMultidata()封装到当前页方法getMultiData()
      getMultiData() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;          
          this.recommends = res.data.recommend.list;
        })
      },
      // 获取首页商品数据
      getHomeGoodsList(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then( res=>{
          // 当前展示的商品由请求到的添加进里面去
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+=1;
        // content滚动对象调用
        //this.$refs.scroll.finishPullUp()
      })
      }
    }
	}


</script>

<style scoped>
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
/* 设置scroll滚动区域的高度 */
.content{
  overflow: hidden;
  position:absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .content{
  height: calc(100% - 93px);
  overflow: hidden;
} */
</style>