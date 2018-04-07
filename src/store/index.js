import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistedState from 'vuex-persistedstate';
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

const persistedStateOptions = {
  storage: window.localStorage
};

const store = new Vuex.Store({
  plugins: [VuexPersistedState(persistedStateOptions)],
  state,
  actions,
  getters,
  mutations
});

export default store
