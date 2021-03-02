<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">All</router-link> |
      <router-link to="/bennet">Bennet</router-link> |
      <router-link to="/xiao">Xiao</router-link> |
      <router-link to="/jean">Jean</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
