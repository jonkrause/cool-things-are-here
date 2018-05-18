<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
position: absolute;
top: 0;
}
a {
  text-decoration: none;
  color: #55bcc9
}
a:hover {
  color: #fc4445;
}
</style>
