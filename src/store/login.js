export default {
  state: {
    login: {
      isLogin: false,
      isAdmin: false
    }
  },
  mutations: {
    login (state) {
      state.login.isLogin = true
    },
    beAdmin (state) {
      state.login.isAdmin = true
    }
  },
  actions: {
      login () {
        this.commit('login')
      },
      beAdmin () {
        this.commit('beAdmin')
      }
  }
}
