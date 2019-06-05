import request from '@/utils/request'

// console.log('request...', request);
// 获取首页分类
export let getCateList = params=>{
  return request.get('https://elm.cangdu.org/v2/index_entry?geohash=40.041898,116.300096&group_type=1&flags[]=F')
}
// 获取详情分类
export let getDetails = params=>{
  return request.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1')
}
//获取商家
export let getMerchant=params=>{
 let data= require.get('https://elm.cangdu.org/shopping/restaurants?latitude=40.041244&longitude=116.300301&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=')
 console.log(data)
 return data
}