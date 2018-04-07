export default {
  loginUser({getters, commit}, payload) {
    if(!getters.isLoggedIn){
      commit('updateUser', {
        wallet: payload.wallet,
        token: payload.token
      });
    }
  },
  logoutUser({getters, commit}) {
    if(getters.isLoggedIn){
      commit('updateUser', {
        wallet: null,
        token: null
      });
    }
  }
}
