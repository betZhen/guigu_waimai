<template>
  <footer class="footer_guide border-1px">
    <!--
      动态class: 什么时候用对象方式? 类名确定, 只是不确定有没有
    -->
    <span class="guide_item" :class="{on: $route.path==='/topbar'}" @click="goTo('/topbar')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/category'}" @click="goTo('/category')">
      <span class="item_icon">
        <i class="iconfont icon-icon-test"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/knowgoods'}" @click="goTo('/knowgoods')">
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/shopcarts'}" @click="goTo('/shopcarts')">
      <span class="item_icon">
        <i class="iconfont icon-qicheqianlian-1-copy"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/profile'}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        // 编程式路由导航
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color rgb(240,77,63)
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
