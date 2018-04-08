<template>
  <div class="container">
    <div class="row justify-content-center">
      <p>Home page</p>
    </div>
    <div class="row justify-content-center">
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
    methods: {
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

<style>
</style>
