<template>
  <div id="app">
    <div id="nav" v-if="false">
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create New user</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  beforeCreate() {
    if (!localStorage.getItem('userData')) {
      console.log('User not found, Redirecting...');
      // this.$router.replace('/create'); //todo add user login
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  /* margin: 30px; */
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
