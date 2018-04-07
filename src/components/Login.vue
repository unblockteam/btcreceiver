<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-7">
        <form>
          <div class="form-group">
            <label for="userWallet">Wallet address</label>
            <input type="text" class="form-control" id="userWallet" placeholder="Enter wallet address..">
          </div>
          <div class="form-group">
            <label for="userPassword">Password</label>
            <input type="password" class="form-control" id="userPassword">
          </div>
          <button type="submit" class="btn btn-primary" @click="login">Sign In</button>
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
  import { mapGetters } from 'vuex'

  export default {
    name: 'login',
    computed:{
      ...mapGetters([
        'isLoggedIn'
      ])
    },
    methods: {
      login (e) {
        e.preventDefault();

        console.log('Login');

        this.$store.dispatch('loginUser', {
          wallet: "Wallet",
          token: "Token"
        });
      },
      logout (e) {
        e.preventDefault();

        console.log('Logout');

        this.$store.dispatch('logoutUser');
      }
    }
  }
</script>
<style></style>
