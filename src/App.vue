<template>
  <nav>
    <h1>Vue3 and TS trainging</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/learning">Learning</router-link> |
    <router-link to="/product">Products</router-link> |
  </nav>
  <router-view />
</template>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>


