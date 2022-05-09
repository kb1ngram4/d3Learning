<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
    <!-- <face></face> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import face from './components/face.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // face
  }
}
</script>

<style>
#app {
  /* margin-top: 60px; */
  width: 100vw;
  height: 100vh;
  /* overflow: hidden; */
}
</style>
