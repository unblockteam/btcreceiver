export default {
  isLoggedIn (state) {
    return !!(state.user.token && state.user.wallet &&
              state.user.token !== '' && state.user.wallet !== '');
  },
}

