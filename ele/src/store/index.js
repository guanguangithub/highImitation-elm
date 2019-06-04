import Vue from 'vue';
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger';

Vue.use(Vuex);

// 引入模块
import cityPosition from './modules/cityPosition'
import getters  from './getters'
export default new Vuex.Store({
  modules: {
    cityPosition,
  },
  getters,
  plugins: [Logger()]
})
