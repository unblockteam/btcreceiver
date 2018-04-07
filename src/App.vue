<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <router-link class="navbar-brand" :to="{ name: 'index' }">
          <img src="static/img/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
            BTCReceiver
        </router-link>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>
    <footer></footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .content {
    margin-top: 2rem
  }
</style>
