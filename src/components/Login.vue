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
          <router-link :to="{ name: 'join' }">
            <button type="button" class="btn btn-success">Sign-up</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    methods: {
      login (e) {
        e.preventDefault();

        alert("Submit");
      }
    }
  }
</script>
<style></style>
