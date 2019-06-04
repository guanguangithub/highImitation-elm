import { getCurCity, getHotCity, getAllCity, getSearchResult,changeCity } from '@/api/city.js'
const state = {
  curCityInfo:{},
  hotCity:[],
  allCity:[],
  curAddress:wx.getStorageSync('curAddress') ,
  curAddressDetail:{},
  searchResult:[],
}
const mutations = {
  //增加搜索历史记录

  CURADRESS:(state,payload)=>{
    state.curAddress = payload.address
    state.curAddressDetail = payload
  },
  CURCITY:(state,payload)=>{
    state.curCityInfo = payload
  },
  HOTCITY:(state,payload)=>{
    state.hotCity = payload
  },
  AllCITY:(state,payload)=>{
    let arr = Object.keys(payload).sort()
    let arrnew = [];
    arr.forEach(item=>{
      arrnew.push({
        [item]:payload[item],
        title:item 
      })
    })
    state.allCity = arrnew
  },
  SEARCHRESULT:(state,payload)=>{
    state.searchResult = payload
  },
  //清空搜索列表
  CLEARSEARCH:(state,paylaod)=>{
    state.searchResult = []
  }
}
const actions = {
  /**
   * 
   * TODO:
   *  三个请求可合并  用type传参辨别
   */
  //获取当前城市
  async getCurCity(context,payload){
    const data = await getCurCity()
    context.commit('CURCITY',data.data)
  },
  //获取热门城市
  async getHotCity(context,payload){
    const data = await getHotCity()
    context.commit('HOTCITY',data.data)
  },
  //获取所有城市
  async getAllCity(context,payload){
    const data = await getAllCity()
    context.commit('AllCITY',data.data)
  },
  //根据关键字搜索详细地址列表4
  async getSearchResult(context,payload){
    const data = await getSearchResult(payload)
    context.commit('SEARCHRESULT',data.data)
  },
  //切换城市
  async changeCity(context,payload){
    const data = await changeCity(payload)
    return data.data
  },
}
export default {
  namespaced : true,
  state,
  mutations,
  actions
}