<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-7">
        <form>
          <div class="form-group">
            <label for="userPassword">Password</label>
            <input type="password" class="form-control" id="userPassword">
          </div>
          <div class="form-group">
            <label for="userPasswordConfirm">Password confirmation</label>
            <input type="password" class="form-control" id="userPasswordConfirm">
          </div>
          <button type="submit" class="btn btn-success" @click="join">Sign Up</button>
          <router-link :to="{ name: 'login' }">
            <button type="button" class="btn btn-primary">Sign-in</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'join',
    methods: {
      join (e) {
        e.preventDefault();

        alert("Submit");
      }
    }
  }
</script>
<style></style>
