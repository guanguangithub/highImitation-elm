import request from '@/utils/request'
// 获取首页分类
export let getCateList = params=>{
    return request.get('https://elm.cangdu.org/v4/restaurants?extras[]=restaurant_activity&geohash=31.22299,121.36025&keyword=%E5%8C%85%E5%AD%90&type=search')
}