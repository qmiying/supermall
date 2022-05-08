<template>
  <div class="tab-bar">
    <!-- 插槽替换TabBarItem里的代码 -->
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'tabbar',
  props: {
    msg: String
  }
}
</script>


<style >
.tab-bar{
  position:fixed;
  left: 0;
  right: 0;
  bottom:0;
  /* 设置布局 */
  display: flex;
  height: 49px;
  /* 设置上边框渐变过渡 */
  box-shadow: 0 -3px 1px rgba(180, 178, 178, 0.2);
}
</style>
