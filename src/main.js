import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import TopHeader from "./components/TopHeader/TopHeader.vue"

Vue.component('TopHeader', TopHeader)
new Vue({
  el:"#app",
  components:{
    App
  },
  template:"<App/>",  //注册组件 确定标签名
  router
})



 // render: h => h(App)
  /*render: function (createElement) {
    return createElement(App)  // 渲染<App/>
  }*/


