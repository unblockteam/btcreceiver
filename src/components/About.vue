<template>
  <div class="container">
    <div class="row justify-content-center">
      <p>Simple Bitcoin payments receiver.</p>
    </div>
    <div class="row justify-content-center">
      <router-link :to="{ name: 'index' }">
        <button type="button" class="btn btn-secondary">Go to main page</button>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'about'
  }
</script>
<style></style>
