//包含n个接口请求函数 params参数


/*
* 1根据经纬度获取位置详情
* 2获取食品分类列表
* 3根据经纬度获取商铺列表
*
* 40.10038,116.36867
纬度          经度   (da)
latitude      longitude
* */
const BASE = "api"  //根据config 里的index 配置代理  (解决跨域)
import ajax from "./ajax"
export const reqAddress = (longitude,latitude) => ajax(BASE+`position/${latitude},${longitude}`)
export const reqFoodCategorys = () => ajax(BASE+'/index_category')
export const reqShops = (longitude,latitude)=>ajax(BASE+'shops',{latitude,longitude})
