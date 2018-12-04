/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import TopBar from '../pages/TopBar/TopBar.vue'
import CateGory from '../pages/CateGory/CateGory.vue'
import KnowGoods from '../pages/KnowGoods/KnowGoods.vue'
import ShopCarts from '../pages/ShopCarts/ShopCarts.vue'
import Profile from '../pages/Profile/Profile.vue'



// 必须声明使用
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // 去掉#
  // 配置应用所有的路由
  routes: [
    {
      path: '/topbar',
      component: TopBar, // 只有当请求对应的path才会执行import()加载对应的包
      meta: {
        isShow: true // 标识显示底部导航
      }
    },

    {
      path: '/category',
      component: CateGory,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },

    {
      path: '/knowgoods',
      component: KnowGoods,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },

    {
      path: '/shopcarts',
      component: ShopCarts,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },

    {
      path: '/profile',
      component: Profile,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },


    {
      path: '/',
      redirect: '/topbar'
    }

  ]
})

export default router
