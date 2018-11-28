/*
包含n个用来直接更新状态数据的方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutations_types'

export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
}


/*
* mutations 提供接收的数据 (那就定义不同的常量  (标识名称))
现在的值是字符串。 让名字是个变量 [] 方括号
*
* */
