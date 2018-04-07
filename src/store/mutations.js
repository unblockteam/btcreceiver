export default {
  updateUser (state, payload) {
    state.user.wallet = payload.wallet;
    state.user.token = payload.token;
  },
}
