import Vue from 'vue';
import Vuex from 'vuex';
import account from './modules/account';
import translations from './modules/translations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: (state, payload = 1) => {
      state.count += payload
    }
  },
  actions: {
    addCount(state, payload) {
      state.commit('increment', payload);
    }
  },
  getters: {
    getCount: state => state.count,
  },
  modules: {
    account,
    translations
  }
});
