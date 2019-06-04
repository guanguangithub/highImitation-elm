import {getCateList} from "@/api/search"

const state = {
  list: []
}

const mutations = {
//  getlist(state,payload){
//    state.list = payload;
//  }
}
const actions = {
  async getCateList({commit},payload){
    let data = await getCateList(payload);
    let datalist = data
    return datalist;
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
