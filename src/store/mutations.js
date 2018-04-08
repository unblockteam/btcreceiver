export default {
  updateUser (state, payload) {
    state.user.wallet = payload.wallet;
    state.user.token = payload.token;
  },
  updateUserBalance (state, payload) {
    state.user.balance = payload.balance;
  },
}
