import {getSort} from "@/api/sort"

const state = {

}

const mutations = {

}

const actions = {
  async getSort(){
    let data = await getSort();
    return data
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
