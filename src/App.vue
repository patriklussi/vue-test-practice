<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SearchFilter msg="Welcome to Your Vue.js App"/>¨
    <FruitBowl/>
  </div>
</template>

<script>
import SearchFilter from "./components/SearchFilter.vue"
import FruitBowl from "./components/FruitBowl.vue"

export default {
  name: 'App',
  components: {
    SearchFilter,
    FruitBowl
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
