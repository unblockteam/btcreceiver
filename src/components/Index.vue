<template>
  <div class="container">
    <div class="row justify-content-center">
      <div>
        <router-link :to="{ name: 'login' }">
          <button type="button" class="btn btn-primary">Sign-in</button>
        </router-link>
        <router-link :to="{ name: 'join' }">
          <button type="button" class="btn btn-success">Sign-up</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
