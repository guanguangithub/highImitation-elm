import request from '@/utils/request';

export let getShoppingCar = (restaurantId)=>{
  return request.get(`https://elm.cangdu.org/shopping/v2/menu?restaurant_id=${restaurantId.id}`)
}
