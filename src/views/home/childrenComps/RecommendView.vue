<template>
  <div  class="recommend">
    <div v-for="item in recommends" :key="item" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

 <script>
 
 
 export default ({
   name:'recomendView',
  //  从父组件home中获取数据
   props:{
     recommends:Array,
     default(){
       return []
     }
   }
 })
 </script>
  
 <style>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    text:14px;
  }
  .recommend-item{
    flex:1;   

  }
.recommend-item img{
  width: 65px;
  height: 65px;
}

 </style>
 