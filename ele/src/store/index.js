import Vue from 'vue';
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger';

Vue.use(Vuex);

// 引入模块
import search from './modules/search'

export default new Vuex.Store({
  modules: {
    search
  },
  plugins: [Logger()]
})
