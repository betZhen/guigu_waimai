// 间接更新状态的  发请求

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutations_types'

import {reqAddress,reqFoodCategorys,reqShops} from "../api"
export default {
  /*actions发异步ajax请求*/  // 返回的是promise
  // 2. 根据结果提交mutation
  /*
  *  1获取经纬度获取位置
* 2获取食品分类列表
* 3获取商铺列表    actions (传的参数是 store （store有4个）)
  * */
  async getAddress({commit,state}){   //那没有 store 当前组件 this
    const {latitude,longitude} = state
    const result = await reqAddress(longitude,latitude)
    if(result.code===0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }   //  action提交给mutation的是包含数据的对象, 而不数据本身
  },
  async getCategorys({commit}){   //那没有 store 当前组件 this
    const result = await reqFoodCategorys
    if(result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }   //  action提交给mutation的是包含数据的对象, 而不数据本身
  },
  async getShops({commit,state}){   //那没有 store 当前组件 this
    const {latitude,longitude} = state
    const result = await reqShops(longitude,latitude)
    if(result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops});
    }   //  action提交给mutation的是包含数据的对象, 而不是数据本身
  }
}
