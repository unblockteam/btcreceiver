<template>
  <div class="container">
    <div class="row justify-content-center">
      <p>Your BTC address:</p>
    </div>
    <div class="row justify-content-center">
      <p style="font-size: 20px"><b>{{ this.user.wallet }}</b></p>
    </div>
    <div class="row justify-content-center">
      <button type="submit" class="btn btn-warning" @click="refreshBalance">Refresh balance</button>
    </div>
    <div class="row justify-content-center">
      <p>Balance:</p>
    </div>
    <div class="row justify-content-center">
      <p style="font-size: 35px"><b>{{ this.user.balance }}</b><span class="text-muted ml-3">BTC</span></p>
    </div>
    <div class="row justify-content-center" style="margin-top: 50px">
      <button type="submit" class="btn btn-secondary" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'

  import api from '../api'

  export default {
    name: 'home',
    computed:{
      ...mapState([
        'user'
      ]),
      ...mapGetters([
        'isLoggedIn'
      ])
    },
    created: async function () {
      const balanceResp = await api.getBalance({
        wallet: this.user.wallet
      });

      this.$store.dispatch('updateUserBalance', {
        balance: balanceResp.response.balance
      });
    },
    methods: {
      async logout (e) {
        e.preventDefault();

        console.log('Logout');

        const logoutResp = await api.logout({
          access_token: this.user.token
        });

        this.$store.dispatch('logoutUser');

        console.log('Logout Success');
      },
      async refreshBalance (e) {
        e.preventDefault();

        const balanceResp = await api.getBalance({
          wallet: this.user.wallet
        });

        this.$store.dispatch('updateUserBalance', {
          balance: balanceResp.response.balance
        });
      }
    }
  }
</script>

<style>
</style>
