<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-7">
        <form>
          <div class="form-group">
            <label for="userPassword">Password</label>
            <input type="password" class="form-control" id="userPassword" aria-describedby="userPasswordHelp" v-model="userPassword">
            <small id="userPasswordHelp" class="form-text text-muted">Your BTC wallet will be generated after registration.</small>
          </div>
          <div class="form-group">
            <label for="userPasswordConfirm">Password confirmation</label>
            <input type="password" class="form-control" id="userPasswordConfirm" v-model="userPasswordConfirmation">
          </div>
          <button type="submit" class="btn btn-success" @click="join"
                  v-bind:disabled="userPassword == '' || userPasswordConfirmation == '' ||
                                   userPassword !== userPasswordConfirmation">
            Sign Up
          </button>
          <router-link :to="{ name: 'login' }">
            <button type="button" class="btn btn-primary">Sign-in</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../api'

  export default {
    name: 'join',
    data: function () {
      return {
        userPassword: '',
        userPasswordConfirmation: ''
      }
    },
    methods: {
      async join (e) {
        e.preventDefault();

        console.log("Join");

        const signUpResp = await api.signUp({
          password: this.userPassword
        });

        const wallet = signUpResp.response.user.wallet;

        const signInResp = await api.signIn({
          wallet: wallet,
          password: this.userPassword
        });

        this.$store.dispatch('loginUser', {
          wallet: wallet,
          token: signInResp.response.access_token
        });

        console.log("Join success");

        // Redirect to Home
        this.$router.replace({ name: 'index' });
      }
    }
  }
</script>
<style></style>
