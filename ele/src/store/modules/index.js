import {getCateList,getIndList} from "@/api/index"

const state = {

}

const mutations = {

}

const actions = {
  async getCateList(){
    let data = await getCateList();
    return data
  },
  async getIndList(){
    let list = await getIndList();
    return list
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
