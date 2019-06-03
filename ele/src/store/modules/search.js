import {getCateList} from "@/api/search"

const state = {
  list: []
}

const mutations = {
 
}

const actions = {
  async getCateList(){
    let data = await getCateList();
    let datalist = data.data
    return datalist
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
