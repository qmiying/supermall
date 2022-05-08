<template>
  <swiper>
      <swiper-item v-for="item in banners" :key="item">
        <!-- v-for绑定轮播图数量，并将获取的数据动态绑定 -->
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
// swiper和swiperitem文件统一打包在index中
import { Swiper,SwiperItem } from "components/commom/swiper";

export default ({
  name:'homeSwiper',
  props:{
    // swiper 里使用的数据传进来，组件数据-父传子props
    banners:Array,
    default(){
      return[]
    }
  },
  components:{
    Swiper,
    SwiperItem,

  }
})
</script>
