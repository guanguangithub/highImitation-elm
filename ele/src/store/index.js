import Vue from 'vue';

import Vuex from 'vuex';
import Logger from 'vuex/dist/logger';

Vue.use(Vuex);

// 引入模块
import index from './modules/index'
import sort from './modules/sort'
export default new Vuex.Store({
  modules: {
    index,
    sort
  },
  plugins: [Logger()]
})
