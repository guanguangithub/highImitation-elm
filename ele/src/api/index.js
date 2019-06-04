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