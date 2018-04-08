<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-7">
        <form>
          <div class="form-group">
            <label for="userWallet">Wallet address</label>
            <input type="text" class="form-control" id="userWallet" placeholder="Enter wallet address.." v-model="userWallet">
          </div>
          <div class="form-group">
            <label for="userPassword">Password</label>
            <input type="password" class="form-control" id="userPassword" v-model="userPassword">
          </div>
          <button type="submit" class="btn btn-primary" @click="login" v-bind:disabled="!userWallet || !userPassword">Sign In</button>
          <button type="submit" class="btn btn-secondary" v-if="isLoggedIn" @click="logout">Logout</button>
          <router-link :to="{ name: 'join' }">
            <button type="button" class="btn btn-success">Sign-up</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapState } from 'vuex'

  import api from '../api'

  export default {
    name: 'login',
    data: function () {
      return {
        userWallet: '',
        userPassword: ''
      }
    },
    computed:{
      ...mapState([
        'user'
      ]),
      ...mapGetters([
        'isLoggedIn'
      ])
    },
    methods: {
      async login (e) {
        e.preventDefault();

        console.log('Login');

        const signInResp = await api.signIn({
          wallet: this.userWallet,
          password: this.userPassword
        });

        this.$store.dispatch('loginUser', {
          wallet: this.userWallet,
          token: signInResp.response.access_token
        });

        console.log('Login success');

        // Redirect to Home
        this.$router.replace({ name: 'index' });
      },
      async logout (e) {
        e.preventDefault();

        console.log('Logout');

        const logoutResp = await api.logout({
          access_token: this.user.token
        });

        this.$store.dispatch('logoutUser');

        console.log('Logout Success');
      }
    }
  }
</script>
<style></style>
