import Vue from 'vue'
import Vuex from 'vuex'

import channel from "./channel"
import auth from "./auth"
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
    auth
  }
})

export default store
