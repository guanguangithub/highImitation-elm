import request from '@/utils/request'
// 获取首页分类
export let getCateList = str=>{
    return request.get(`https://elm.cangdu.org/v4/restaurants?extras[]=restaurant_activity&geohash=40.041898,116.300096&keyword=${str.str}&type=search`)
}