import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: login.state.login,
    beAdmin: login.state.beAdmin,
  },
  mutations: {
    login: login.mutations.login,
    beAdmin: login.mutations.beAdmin,
  },
  actions: {
    login: login.actions.login,
    beAdmin: login.actions.beAdmin,
  }
})
