<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SearchFilter msg="Welcome to Your Vue.js App"/>¨

  </div>
</template>

<script>
import SearchFilter from "./components/SearchFilter.vue"


export default {
  name: 'App',
  components: {
    SearchFilter,
 
  },
  async mounted(){
    const response = await fetch("http://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion.json");
    const data = await response.json();
    console.log(data);
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
