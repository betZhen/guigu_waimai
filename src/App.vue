<template>
  <div>
    <router-view></router-view> <!--显示当前路由组件-->
    <FootGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FootGuide from "./components/FootGuide/FootGuide.vue"

  /* import {reqAddress} from "./api"  *///测试  在mounted里执行这函数reqAddress
    export default {

       /* mounted(){
          const result = reqAddress("116.36867","40.10038")  //报错 404 当前端口号没人来处理
          console.log(result)                               // 它应该去请求 服务器 5000
        },*/

      // 异步获取地址数据(到state中)  通知actions执行
     mounted(){
       this.$store.dispatch("getAddress")  //不用接收参数 因为它第二个参数没有 (接口文档)
     },

        components:{
          FootGuide
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
