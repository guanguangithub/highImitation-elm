import {getShoppingCar} from '../../api/shopping';

const state = {

}

const mutations = {

}

const actions = {
  async getShoppingCar({commit},restaurantId){
    let data = await getShoppingCar(restaurantId);
    return data
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
