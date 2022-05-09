<template>
  <div id="home">
    <!-- navbar -->
    <nav-bar class="home-nav"><template v-slot:center>购物街</template></nav-bar>
    <!-- 为首页固定区域设置滚动 -->
<<<<<<< HEAD
    <scroll>
=======
<<<<<<< HEAD
    <scroll>
=======
    
>>>>>>> 5bd52b1 (5-9 home商品请求完成)
>>>>>>> fdd9d1a (4-9 商品请求完成)
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
<<<<<<< HEAD
    </scroll>
=======
<<<<<<< HEAD
    </scroll>
=======
    
>>>>>>> 5bd52b1 (5-9 home商品请求完成)
>>>>>>> fdd9d1a (4-9 商品请求完成)
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
>>>>>>> 5bd52b1 (5-9 home商品请求完成)
>>>>>>> fdd9d1a (4-9 商品请求完成)
      </ul>

  </div>
</template>

<script>
// 公共组件导入
import NavBar from "components/commom/navbar/NavBar"
import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import Scroll from "components/commom/scroll/Scroll"
<<<<<<< HEAD
//import Scroll from "components/commom/scroll/Scroll"
=======
<<<<<<< HEAD
//import Scroll from "components/commom/scroll/Scroll"
=======
>>>>>>> 5bd52b1 (5-9 home商品请求完成)
>>>>>>> fdd9d1a (4-9 商品请求完成)

// 页面组件导入
import HomeSwiper from "./childrenComps/HomeSwiper"
import RecommendView from "./childrenComps/RecommendView"
import FeatureView from "./childrenComps/FeatureView"

<<<<<<< HEAD

import Scroll from "../../components/commom/scroll/Scroll.vue"

=======
<<<<<<< HEAD

import Scroll from "../../components/commom/scroll/Scroll.vue"

=======
import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
		name: "Home",
    components: {
		  NavBar,
      TabControl,
      GoodsList,
      Scroll,

      HomeSwiper,
      RecommendView,
      FeatureView,
      
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
      })
      }
    }
	}
>>>>>>> 5bd52b1 (5-9 home商品请求完成)
>>>>>>> fdd9d1a (4-9 商品请求完成)


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