export default {
  loginUser({getters, commit}, payload) {
    if(!getters.isLoggedIn){
      commit('updateUser', {
        wallet: payload.wallet,
        token: payload.token
      });
    }
  },
  updateUserBalance({getters, commit}, payload) {
    payload.balance = payload.balance || '0';

    commit('updateUserBalance', {
      balance: payload.balance
    });
  },
  logoutUser({getters, commit}) {
    if(getters.isLoggedIn){
      commit('updateUser', {
        wallet: null,
        token: null
      });
      commit('updateUserBalance', {
        balance: null
      });
    }
  }
}
