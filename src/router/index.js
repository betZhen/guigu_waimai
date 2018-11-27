import Vue from "vue"
import VueRouter from "vue-router"
import Msite from "../pages/Msite/Msite.vue"
import Order from "../pages/Order/Order.vue"
import Profile from "../pages/Profile/Profile.vue"
import Search from "../pages/Search/Search.vue"
import Login from "../pages/Login/Login.vue"

// 必须声明使用
Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",  //去掉 hash #
  //配置应用所有的路由
  routes: [
    {path: "/msite",
      component:Msite,
      meta:{
      isShow:true    //与meta有关  标识显示底部导航
      }
    },
    {path: "/order",
      component:Order,
      meta:{
        isShow:true
      }
    },
    {path: "/profile",
      component:Profile,
      meta:{
        isShow:true
      }
    },
    {path: "/search",
      component:Search,
      meta:{
        isShow:true
      }
    },
    {path: "/login",
      component:Login,
    },

    {path: "/",redirect:"msite"},
  ]
})
