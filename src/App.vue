<template>
  <div>
    <router-view></router-view> <!--显示当前路由组件-->
    <FootGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FootGuide from "./components/FootGuide/FootGuide.vue"
    export default {
        components:{
          FootGuide
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
