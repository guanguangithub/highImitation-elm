
import { getDetails } from "../../api/index";
const state = {
}

const mutations = {

}

const actions = {
  async getDetails(){
    let data = await getDetails();
    return data
    // console.log('data...111', data);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
