<template>
  <div id="app">
    <!-- <img width="200px" height="150px" src="./assets/logo.png"> -->
    <div>
      <router-link to="/home">主页</router-link>
      <router-link to="/user">用户</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div>
          <router-view></router-view>
    </div>
  </div>
</template>



<script>
import News from './components/News.vue';

export default {
  name: 'App',
  components: {
  }
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
</style>
