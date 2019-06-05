import {getCateList,getMerchant} from "@/api/index"

const state = {
  list: [1,2,3,4]
}

const mutations = {

}

const actions = {
  async getCateList({commit},payload){
    let data = await getCateList();
    let len=data.length;
    let n=8;
    let lineNum= len%8===0 ? len/8 : Math.floor((len % 8)+1);
    let res=[];
    for(let i=0;i<lineNum;i++){
      let rum=data.slice(i*n,i*n+n);
      res.push(rum)
    }

    return res
  },
  // async getMerchant({commit},payload){
  //   let data=await getMerchant();
  //   console.log(data,'ffffff')
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
