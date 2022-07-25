import Vue from 'vue'
import Vuex from 'vuex'

import channel from "./channel"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {

    isOpen: false,
    search: '',
  },
  getters: {

  },
  mutations: {
    TOGGLE_IS_OPEN(state, val) {
      state.isOpen = val
    },

  },
  actions: {
  },
  modules: {
    channel,
  }
})

export default store
