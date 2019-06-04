import request from '@/utils/request'

// 获取sort页 restaurant_category_id
export let getSort = ()=>{
  return request.get(`https://elm.cangdu.org/shopping/restaurants?latitude=31.22299&longitude=121.36025&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=`)
}
